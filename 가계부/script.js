// 스토어 객체 - 데이터 관리
const store = {
    // 데이터 저장
    data: {
        totalAsset: 0,
        expenses: []
    },
    
    // 로컬 스토리지에서 데이터 불러오기
    loadFromStorage() {
        const savedTotalAsset = localStorage.getItem('totalAsset');
        const savedExpenses = localStorage.getItem('expenses');
        
        if (savedTotalAsset) {
            this.data.totalAsset = parseInt(savedTotalAsset);
        }
        
        if (savedExpenses) {
            this.data.expenses = JSON.parse(savedExpenses);
        }
    },
    
    // 로컬 스토리지에 데이터 저장
    saveToStorage() {
        localStorage.setItem('totalAsset', this.data.totalAsset);
        localStorage.setItem('expenses', JSON.stringify(this.data.expenses));
    },
    
    // 총 자산 업데이트
    updateTotalAsset(amount) {
        this.data.totalAsset = amount;
        this.saveToStorage();
    },
    
    // 가계부 내역 추가
    addExpense(expense) {
        // ID 생성 (기존 내역이 있으면 마지막 ID + 1, 없으면 1)
        const id = this.data.expenses.length > 0 
            ? Math.max(...this.data.expenses.map(exp => exp.id)) + 1 
            : 1;
        
        // 현재 시간 생성
        const now = new Date();
        
        // 새 내역 객체 생성
        const newExpense = {
            id,
            created_at: now.toISOString().split('T')[0], // YYYY-MM-DD 형식
            amount: expense.amount,
            category: expense.category,
            description: expense.description,
            fundAtTheTime: this.data.totalAsset - expense.amount
        };
        
        // 내역 추가
        this.data.expenses.push(newExpense);
        
        // 총 자산 업데이트
        this.data.totalAsset -= expense.amount;
        
        // 스토리지에 저장
        this.saveToStorage();
        
        return newExpense;
    },
    
    // 가계부 내역 삭제
    deleteExpense(id) {
        // 삭제할 내역 찾기
        const expenseToDelete = this.data.expenses.find(exp => exp.id === id);
        
        if (!expenseToDelete) return false;
        
        // 내역 삭제
        this.data.expenses = this.data.expenses.filter(exp => exp.id !== id);
        
        // 스토리지에 저장
        this.saveToStorage();
        
        return true;
    },
    
    // 가계부 내역 가져오기 (오름차순 정렬)
    getExpenses() {
        return [...this.data.expenses].sort((a, b) => {
            // 날짜 기준 오름차순 정렬
            return new Date(a.created_at) - new Date(b.created_at);
        });
    },
    
    // 총 자산 가져오기
    getTotalAsset() {
        return this.data.totalAsset;
    }
};

// DOM 요소
const totalAssetElement = document.getElementById('total-asset');
const assetForm = document.getElementById('asset-form');
const assetInput = document.getElementById('asset-input');
const expenseForm = document.getElementById('expense-form');
const categoryInput = document.getElementById('category');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseListElement = document.getElementById('expense-list');

// 초기화 함수
function init() {
    // 스토리지에서 데이터 불러오기
    store.loadFromStorage();
    
    // UI 업데이트
    updateTotalAssetUI();
    renderExpenseList();
    
    // 이벤트 리스너 등록
    assetForm.addEventListener('submit', handleAssetFormSubmit);
    expenseForm.addEventListener('submit', handleExpenseFormSubmit);
}

// 총 자산 UI 업데이트
function updateTotalAssetUI() {
    totalAssetElement.textContent = store.getTotalAsset().toLocaleString();
}

// 가계부 목록 렌더링
function renderExpenseList() {
    // 목록 초기화
    expenseListElement.innerHTML = '';
    
    // 내역 가져오기
    const expenses = store.getExpenses();
    
    // 내역이 없는 경우
    if (expenses.length === 0) {
        expenseListElement.innerHTML = '<p class="no-expenses">등록된 내역이 없습니다.</p>';
        return;
    }
    
    // 내역 렌더링
    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        
        // 카테고리 한글 변환
        const categoryMap = {
            'coffee': '커피',
            'meal': '식사',
            'transportation': '교통',
            'shopping': '쇼핑',
            'etc': '기타'
        };
        
        // 날짜 포맷팅 (HH:mm)
        const date = new Date(expense.created_at);
        const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${formattedTime}`;
        
        expenseItem.innerHTML = `
            <div class="expense-info">
                <div>
                    <span class="expense-category category-${expense.category}">${categoryMap[expense.category]}</span>
                    <span class="expense-description">${expense.description}</span>
                </div>
                <div class="expense-date">${formattedDate}</div>
                <div class="fund-at-time">잔액: ${expense.fundAtTheTime.toLocaleString()}원</div>
            </div>
            <div class="expense-actions">
                <span class="expense-amount">-${expense.amount.toLocaleString()}원</span>
                <button class="delete-btn" data-id="${expense.id}">삭제</button>
            </div>
        `;
        
        // 삭제 버튼 이벤트 리스너
        const deleteBtn = expenseItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            handleDeleteExpense(expense.id);
        });
        
        expenseListElement.appendChild(expenseItem);
    });
}

// 총 자산 폼 제출 핸들러
function handleAssetFormSubmit(e) {
    e.preventDefault();
    
    // 입력값 가져오기
    const assetAmount = parseInt(assetInput.value);
    
    // 유효성 검사
    if (isNaN(assetAmount) || assetAmount < 0) {
        alert('유효한 금액을 입력해주세요.');
        return;
    }
    
    // 스토어 업데이트
    store.updateTotalAsset(assetAmount);
    
    // UI 업데이트
    updateTotalAssetUI();
    
    // 폼 초기화
    assetForm.reset();
}

// 가계부 내역 폼 제출 핸들러
function handleExpenseFormSubmit(e) {
    e.preventDefault();
    
    // 입력값 가져오기
    const category = categoryInput.value;
    const description = descriptionInput.value;
    const amount = parseInt(amountInput.value);
    
    // 유효성 검사
    if (!category || !description || isNaN(amount) || amount <= 0) {
        alert('모든 필드를 올바르게 입력해주세요.');
        return;
    }
    
    // 금액이 현재 자산보다 큰 경우
    if (amount > store.getTotalAsset()) {
        alert('소비 금액이 현재 자산보다 클 수 없습니다.');
        return;
    }
    
    // 내역 추가
    store.addExpense({
        category,
        description,
        amount
    });
    
    // UI 업데이트
    updateTotalAssetUI();
    renderExpenseList();
    
    // 폼 초기화
    expenseForm.reset();
}

// 가계부 내역 삭제 핸들러
function handleDeleteExpense(id) {
    // 삭제 확인
    if (!confirm('정말 이 내역을 삭제하시겠습니까?')) {
        return;
    }
    
    // 내역 삭제
    const deleted = store.deleteExpense(id);
    
    if (deleted) {
        // UI 업데이트
        updateTotalAssetUI();
        renderExpenseList();
    }
}

// 앱 초기화
init();

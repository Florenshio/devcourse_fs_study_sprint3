# 가계부

## Use Case
1. 현재 자산을 입력할 수 있다.
2. 가계부 내역을 입력할 수 있다.
3. 가계부 목록을 볼 수 있다.

## 가계부 내역 데이터
```javascript
{
    "totalAsset" : 100000,
}

// 가계부 내역
{
    "id" : 1,
    "created_at" : "2025-05-31",
    "amount" : 10000,
    "category" : "coffee" | "meal" | "transportation" | "shopping" | "etc",
    "description" : "점심식사",
    "fundAtTheTime" : 100000, // 시점 잔액
}[]
```

## 데이터 관리
- 원본 데이터는 브라우저 storage에서 관리
- 이후 JavaScript의 `store 객체`로 데이터 전송

### usecase1) 현재 자산을 입력할 수 있다.
UI
- 총 자산 급액 입력 input
- 제출 버튼

Action
- 금액 데이터 입력
- 버튼 클릭시 데이터 저장

### usecase2) 가계부 내역을 입력할 수 있다.
UI
- 소비 가테고리 입력 input
- 소비 내용 입력 input
- 소비 금액 입력 input
- 제출 버튼

Action
- 소비 카테고리 입력
- 소비 내용 입력
- 소비 금액 입력
- validate
    - 소비 금액은 현재 자산 이하
    - 필수 값: 모든 내용을 입력 필요
- 버튼 클릭시 데이터 저장

### usecase3) 가계부 목록을 볼 수 있다.
UI
- 소비 항목이 나열된 목록

TODO
- 항목의 시간 포맷 변경: HH:mm
- 오름차순으로 목록 나열
- 포맷 맞춰주기

### usecase4) 소비내역을 삭제할 수 있다.
UI
- 소비 항목마다 삭제 버튼
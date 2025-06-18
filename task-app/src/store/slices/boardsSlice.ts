import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// 타입 정의
export interface Task {
  id: string;
  content: string;
  description: string;
  completed: boolean;
}

export interface List {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  title: string;
  lists: List[];
}

interface BoardsState {
  boards: Board[];
  activeBoard: string | null; // 현재 활성화된 보드 ID
}

// 초기 상태
// 초기 보드 ID 생성
const initialBoardId = uuidv4();

const initialState: BoardsState = {
  boards: [
    {
      id: initialBoardId,
      title: '상세 게시판',
      lists: [
        {
          id: uuidv4(),
          title: 'List 1',
          tasks: [
            { id: uuidv4(), content: 'Task 1', description: 'Description', completed: false },
            { id: uuidv4(), content: 'Task 2', description: 'Description', completed: false },
            { id: uuidv4(), content: 'Task 3', description: 'Description', completed: false },
          ],
        },
        {
          id: uuidv4(),
          title: 'List 2',
          tasks: [
            { id: uuidv4(), content: 'Task 1', description: 'Description', completed: false },
            { id: uuidv4(), content: 'Task 2', description: 'Description', completed: false },
          ],
        },
      ],
    },
  ],
  activeBoard: initialBoardId, // 첫 번째 보드의 ID 사용
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    // 보드 관련 액션
    addBoard: (state, action: PayloadAction<{ title: string }>) => {
      const newBoard: Board = {
        id: uuidv4(),
        title: action.payload.title,
        lists: [],
      };
      state.boards.push(newBoard);
    },
    removeBoard: (state, action: PayloadAction<{ boardId: string }>) => {
      state.boards = state.boards.filter(board => board.id !== action.payload.boardId);
      if (state.activeBoard === action.payload.boardId) {
        state.activeBoard = state.boards.length > 0 ? state.boards[0].id : null;
      }
    },
    setActiveBoard: (state, action: PayloadAction<{ boardId: string }>) => {
      state.activeBoard = action.payload.boardId;
    },
    
    // 리스트 관련 액션
    addList: (state, action: PayloadAction<{ boardId: string; title: string }>) => {
      const { boardId, title } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      if (board) {
        board.lists.push({
          id: uuidv4(),
          title,
          tasks: [],
        });
      }
    },
    removeList: (state, action: PayloadAction<{ boardId: string; listId: string }>) => {
      const { boardId, listId } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      if (board) {
        board.lists = board.lists.filter(list => list.id !== listId);
      }
    },
    
    // 태스크 관련 액션
    addTask: (state, action: PayloadAction<{ boardId: string; listId: string; content: string; description?: string }>) => {
      const { boardId, listId, content, description = '' } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      if (board) {
        const list = board.lists.find(l => l.id === listId);
        if (list) {
          list.tasks.push({
            id: uuidv4(),
            content,
            description,
            completed: false,
          });
        }
      }
    },
    removeTask: (state, action: PayloadAction<{ boardId: string; listId: string; taskId: string }>) => {
      const { boardId, listId, taskId } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      if (board) {
        const list = board.lists.find(l => l.id === listId);
        if (list) {
          list.tasks = list.tasks.filter(task => task.id !== taskId);
        }
      }
    },
    toggleTaskComplete: (state, action: PayloadAction<{ boardId: string; listId: string; taskId: string }>) => {
      const { boardId, listId, taskId } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      if (board) {
        const list = board.lists.find(l => l.id === listId);
        if (list) {
          const task = list.tasks.find(t => t.id === taskId);
          if (task) {
            task.completed = !task.completed;
          }
        }
      }
    },
    moveTask: (state, action: PayloadAction<{
      boardId: string;
      sourceListId: string;
      destinationListId: string;
      sourceIndex: number;
      destinationIndex: number;
    }>) => {
      const { boardId, sourceListId, destinationListId, sourceIndex, destinationIndex } = action.payload;
      const board = state.boards.find(b => b.id === boardId);
      
      if (board) {
        // 같은 리스트 내에서 이동하는 경우
        if (sourceListId === destinationListId) {
          const list = board.lists.find(l => l.id === sourceListId);
          if (list) {
            const [removed] = list.tasks.splice(sourceIndex, 1);
            list.tasks.splice(destinationIndex, 0, removed);
          }
        } 
        // 다른 리스트로 이동하는 경우
        else {
          const sourceList = board.lists.find(l => l.id === sourceListId);
          const destList = board.lists.find(l => l.id === destinationListId);
          
          if (sourceList && destList) {
            const [removed] = sourceList.tasks.splice(sourceIndex, 1);
            destList.tasks.splice(destinationIndex, 0, removed);
          }
        }
      }
    },
  },
});

export const {
  addBoard,
  removeBoard,
  setActiveBoard,
  addList,
  removeList,
  addTask,
  removeTask,
  toggleTaskComplete,
  moveTask,
} = boardsSlice.actions;

export default boardsSlice.reducer;

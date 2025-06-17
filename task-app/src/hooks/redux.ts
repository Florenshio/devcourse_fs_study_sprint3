import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// 타입화된 후크들

/**
 * `useAppDispatch`: 타입화된 dispatch 후크
 * 
 * 예시:
 * ```ts
 * const dispatch = useAppDispatch();
 * dispatch(addTask({ boardId, listId, content }));
 * ```
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * `useAppSelector`: 타입화된 selector 후크
 * 
 * 예시:
 * ```ts
 * const boards = useAppSelector((state) => state.boards.boards);
 * const isModalOpen = useAppSelector((state) => state.modal.isOpen);
 * ```
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * `useActiveBoard`: 현재 활성화된 보드를 가져오는 후크
 * 
 * 예시:
 * ```ts
 * const activeBoard = useActiveBoard();
 * if (activeBoard) {
 *   // 보드 사용
 * }
 * ```
 */
export const useActiveBoard = () => {
  const boards = useAppSelector((state) => state.boards.boards);
  const activeBoardId = useAppSelector((state) => state.boards.activeBoard);
  
  if (!activeBoardId && boards.length > 0) {
    return boards[0]; // 활성화된 보드가 없으면 첫 번째 보드 반환
  }
  
  return boards.find(board => board.id === activeBoardId) || null;
};

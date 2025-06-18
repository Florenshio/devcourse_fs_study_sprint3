import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setActiveBoard } from '../../store/slices/boardsSlice';
import { openModal } from '../../store/slices/modalSlice';
import * as styles from './BoardList.css';

const BoardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { boards, activeBoard: activeBoardId } = useAppSelector((state) => state.boards);

  const handleBoardClick = (boardId: string) => {
    dispatch(setActiveBoard({ boardId }));
  };

  const handleAddBoard = () => {
    dispatch(openModal({ modalType: 'ADD_BOARD' }));
  };

  const handleDeleteBoard = (e: React.MouseEvent, boardId: string) => {
    e.stopPropagation();
    dispatch(openModal({
      modalType: 'DELETE_BOARD',
      modalProps: { boardId },
    }));
  };

  return (
    <div className={styles.boardListContainer}>
      <div className={styles.boardListHeader}>
        <h2 className={styles.boardListTitle}>보드 목록</h2>
      </div>
      <div className={styles.boardListContent}>
        {boards.map((board) => (
          <div
            key={board.id}
            className={`${styles.boardItem} ${board.id === activeBoardId ? styles.activeBoardItem : ''}`}
            onClick={() => handleBoardClick(board.id)}
            data-testid={`board-${board.id}`}
          >
            <span className={styles.boardItemTitle}>{board.title}</span>
            <div className={styles.boardItemActions}>
              <button
                className={styles.boardItemButton}
                onClick={(e) => handleDeleteBoard(e, board.id)}
                aria-label="보드 삭제"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.addBoardButton}
        onClick={handleAddBoard}
        aria-label="보드 추가"
      >
        + 새 보드 추가
      </button>
    </div>
  );
};

export default BoardList;

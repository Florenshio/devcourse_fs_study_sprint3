import React from 'react';
import { useActiveBoard } from '../../hooks/redux';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/slices/modalSlice';
import List from '../List/List';
import * as styles from './ListContainer.css';

const ListContainer: React.FC = () => {
  const activeBoard = useActiveBoard();
  const dispatch = useAppDispatch();

  const handleAddList = () => {
    if (!activeBoard) return;
    
    dispatch(openModal({
      modalType: 'ADD_LIST',
      modalProps: { boardId: activeBoard.id },
    }));
  };

  if (!activeBoard) {
    return (
      <div className={styles.emptyBoardMessage}>
        <h2 className={styles.emptyBoardTitle}>선택된 보드가 없습니다</h2>
        <p className={styles.emptyBoardDescription}>왼쪽 메뉴에서 보드를 선택하거나 새로운 보드를 만들어보세요.</p>
        <button 
          className={styles.emptyBoardButton}
          onClick={() => dispatch(openModal({ modalType: 'ADD_BOARD' }))}
        >
          새 보드 만들기
        </button>
      </div>
    );
  }

  return (
    <div className={styles.boardContainer}>
      {activeBoard.lists.map((list) => (
        <List key={list.id} list={list} boardId={activeBoard.id} />
      ))}
      <button 
        className={styles.addListButton} 
        onClick={handleAddList}
        aria-label="리스트 추가"
      >
        + 새 리스트 추가
      </button>
    </div>
  );
};

export default ListContainer;

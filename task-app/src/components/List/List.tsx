import React from 'react';
import type { List as ListType } from '../../store/slices/boardsSlice';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/slices/modalSlice';
import { toggleTaskComplete } from '../../store/slices/boardsSlice';
import Task from '../Task/Task';
import * as styles from './List.css';

interface ListProps {
  list: ListType;
  boardId: string;
}

const List: React.FC<ListProps> = ({ list, boardId }) => {
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    dispatch(openModal({
      modalType: 'ADD_TASK',
      modalProps: { boardId, listId: list.id },
    }));
  };

  const handleRemoveList = () => {
    dispatch(openModal({
      modalType: 'CONFIRM_DELETE',
      modalProps: { 
        title: '리스트 삭제', 
        message: `"${list.title}" 리스트를 삭제하시겠습니까?`,
        onConfirm: () => {
          // 삭제 로직은 모달에서 처리
        },
        entityType: 'list',
        entityId: list.id,
        boardId,
      },
    }));
  };

  const handleToggleComplete = (taskId: string) => {
    dispatch(toggleTaskComplete({ boardId, listId: list.id, taskId }));
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3 className={styles.listTitle}>{list.title}</h3>
        <div className={styles.listActions}>
          <button 
            className={styles.listActionButton}
            onClick={handleRemoveList}
            aria-label="리스트 삭제"
          >
            ✕
          </button>
        </div>
      </div>
      <div className={styles.listContent}>
        {list.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            boardId={boardId}
            listId={list.id}
            toggleComplete={handleToggleComplete}
          />
        ))}
      </div>
      <button 
        className={styles.addTaskButton}
        onClick={handleAddTask}
        aria-label="태스크 추가"
      >
        + 태스크 추가
      </button>
    </div>
  );
};

export default List;

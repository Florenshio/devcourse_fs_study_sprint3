import React from 'react';
import type { Task as TaskType } from '../../store/slices/boardsSlice';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/slices/modalSlice';
import * as styles from './Task.css';

interface TaskProps {
  task: TaskType;
  boardId: string;
  listId: string;
  index?: number; // 옵셔널로 변경
  toggleComplete: (taskId: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, boardId, listId, toggleComplete }) => {
  const dispatch = useAppDispatch();

  const handleTaskClick = () => {
    dispatch(openModal({
      modalType: 'EDIT_TASK',
      modalProps: { task, boardId, listId },
    }));
  };

  const handleToggleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleComplete(task.id);
  };

  return (
    <div 
      className={`${styles.taskContainer} ${task.completed ? styles.completedTask : ''}`}
      onClick={handleTaskClick}
      data-testid={`task-${task.id}`}
    >
      <div className={styles.taskContent}>{task.content}</div>
      {task.description && (
        <div className={styles.taskDescription}>{task.description}</div>
      )}
      <div className={styles.taskFooter}>
        <div className={styles.taskActions}>
          <button 
            className={styles.taskActionButton}
            onClick={handleToggleComplete}
            aria-label={task.completed ? '완료 취소' : '완료 표시'}
          >
            {task.completed ? '✓ 완료됨' : '□ 완료하기'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

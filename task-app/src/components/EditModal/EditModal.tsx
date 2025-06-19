import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { closeModal } from '../../store/slices/modalSlice';
import { updateTask } from '../../store/slices/boardsSlice';
import * as styles from './EditModal.css.ts';

interface EditModalProps {
  boardId: string;
  listId: string;
  taskId: string;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ boardId, listId, taskId, onClose }) => {
  const dispatch = useAppDispatch();
  const { modalProps } = useAppSelector((state) => state.modal);
  const { content: initialContent, description: initialDescription } = modalProps;

  const [content, setContent] = useState(initialContent || '');
  const [description, setDescription] = useState(initialDescription || '');

  useEffect(() => {
    // ESC 키를 누르면 모달 닫기
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;

    dispatch(updateTask({
      boardId,
      listId,
      taskId,
      updates: {
        content: content.trim(),
        description: description.trim()
      }
    }));

    dispatch(closeModal());
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>태스크 수정</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="content" className={styles.formLabel}>제목</label>
            <input
              id="content"
              type="text"
              className={styles.formInput}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="태스크 제목을 입력하세요"
              autoFocus
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.formLabel}>설명</label>
            <textarea
              id="description"
              className={styles.formTextarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="태스크 설명을 입력하세요 (선택사항)"
              rows={5}
            />
          </div>
          <div className={styles.modalActions}>
            <button
              type="button"
              className={`${styles.actionButton} ${styles.cancelButton}`}
              onClick={onClose}
            >
              취소
            </button>
            <button
              type="submit"
              className={`${styles.actionButton} ${styles.submitButton}`}
              disabled={!content.trim()}
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;

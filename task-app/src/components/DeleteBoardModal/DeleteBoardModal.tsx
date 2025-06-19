import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { removeBoard } from '../../store/slices/boardsSlice';
import { closeModal } from '../../store/slices/modalSlice';
import * as styles from './DeleteBoardModal.css';

interface DeleteBoardModalProps {
  boardId: string;
  onClose: () => void;
}

const DeleteBoardModal: React.FC<DeleteBoardModalProps> = ({ boardId, onClose }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    // 보드 삭제 액션 디스패치
    dispatch(removeBoard({ boardId }));
    // 모달 닫기
    dispatch(closeModal());
    onClose();
  };

  const handleCancel = () => {
    dispatch(closeModal());
    onClose();
  };

  // ESC 키를 누르면 모달 닫기
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCancel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 모달 외부 클릭 시 닫기
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>보드 삭제</h2>
          <button className={styles.closeButton} onClick={handleCancel}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.confirmMessage}>
            이 보드를 삭제하시겠습니까? 이 작업은 되돌릴 수 없으며, 모든 리스트와 태스크가 함께 삭제됩니다.
          </p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            취소
          </button>
          <button className={styles.deleteButton} onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBoardModal;

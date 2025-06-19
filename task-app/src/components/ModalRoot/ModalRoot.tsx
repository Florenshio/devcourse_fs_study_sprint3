import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { closeModal } from '../../store/slices/modalSlice';
import EditModal from '../EditModal/EditModal';
import LoggerModal from '../LoggerModal/LoggerModal';
import DeleteBoardModal from '../DeleteBoardModal/DeleteBoardModal';

const ModalRoot: React.FC = () => {
  const { isOpen, modalType, modalProps } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  // 모달 타입에 따라 적절한 모달 컴포넌트 렌더링
  switch (modalType) {
    case 'EDIT_TASK':
      return (
        <EditModal
          boardId={modalProps.boardId}
          listId={modalProps.listId}
          taskId={modalProps.taskId}
          onClose={handleClose}
        />
      );
    case 'DELETE_BOARD':
      return (
        <DeleteBoardModal
          boardId={modalProps.boardId}
          onClose={handleClose}
        />
      );
    case 'VIEW_BOARDS':
      return <LoggerModal onClose={handleClose} />;
    default:
      return null;
  }
};

export default ModalRoot;

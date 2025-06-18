import React, { useState } from 'react';
import * as styles from './ActionButton.css';
import DropDownForm from './DropDownForm/DropDownForm';

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  showForm?: boolean;
  formType?: 'board' | 'list' | 'task';
  boardId?: string;
  listId?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  showForm = false,
  formType,
  boardId,
  listId,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    if (showForm) {
      setIsFormOpen(!isFormOpen);
    } else if (onClick) {
      onClick();
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={styles.actionButtonContainer}>
      <button
        className={`${styles.actionButton} ${
          variant === 'secondary' ? styles.actionButtonSecondary : ''
        }`}
        onClick={handleClick}
      >
        <span className={styles.actionButtonText}>{text}</span>
      </button>
      {isFormOpen && showForm && formType && (
        <DropDownForm
          type={formType}
          onClose={handleCloseForm}
          boardId={boardId}
          listId={listId}
        />
      )}
    </div>
  );
};

export default ActionButton;

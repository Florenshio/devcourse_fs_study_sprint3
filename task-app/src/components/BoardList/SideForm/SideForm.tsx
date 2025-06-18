import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { addBoard } from '../../../store/slices/boardsSlice';
import * as styles from './SideForm.css';

interface SideFormProps {
  onCancel: () => void;
}

const SideForm: React.FC<SideFormProps> = ({ onCancel }) => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addBoard({ title: title.trim() }));
    setTitle('');
    onCancel();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>새 보드 만들기</h3>
      <input
        type="text"
        className={styles.formInput}
        placeholder="보드 이름을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <div className={styles.formActions}>
        <button
          type="button"
          className={`${styles.formButton} ${styles.cancelButton}`}
          onClick={onCancel}
        >
          취소
        </button>
        <button
          type="submit"
          className={`${styles.formButton} ${styles.submitButton}`}
          disabled={!title.trim()}
        >
          추가
        </button>
      </div>
    </form>
  );
};

export default SideForm;

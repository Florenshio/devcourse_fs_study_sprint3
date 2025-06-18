import React, { useState, useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { addBoard, addList, addTask } from '../../../store/slices/boardsSlice';
import * as styles from './DropDownForm.css.ts';

interface DropDownFormProps {
  type: 'board' | 'list' | 'task';
  onClose: () => void;
  boardId?: string;
  listId?: string;
}

const DropDownForm: React.FC<DropDownFormProps> = ({ type, onClose, boardId, listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 폼 외부 클릭 시 폼 닫기
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    switch (type) {
      case 'board':
        dispatch(addBoard({ title: title.trim() }));
        break;
      case 'list':
        if (boardId) {
          dispatch(addList({ boardId, title: title.trim() }));
        }
        break;
      case 'task':
        if (boardId && listId) {
          dispatch(addTask({ 
            boardId, 
            listId, 
            content: title.trim(), 
            description: description.trim()
          }));
        }
        break;
    }

    setTitle('');
    setDescription('');
    onClose();
  };

  const getPlaceholder = () => {
    switch (type) {
      case 'board':
        return '보드 이름을 입력하세요';
      case 'list':
        return '리스트 이름을 입력하세요';
      case 'task':
        return '태스크 제목을 입력하세요';
      default:
        return '';
    }
  };

  const getFormTitle = () => {
    switch (type) {
      case 'board':
        return '새 보드 추가';
      case 'list':
        return '새 리스트 추가';
      case 'task':
        return '새 태스크 추가';
      default:
        return '';
    }
  };

  return (
    <div className={styles.dropdownContainer} ref={formRef}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h3 className={styles.formTitle}>{getFormTitle()}</h3>
        <input
          type="text"
          className={styles.formInput}
          placeholder={getPlaceholder()}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        {type === 'task' && (
          <textarea
            className={styles.formTextarea}
            placeholder="상세 내용을 입력하세요 (선택사항)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
        <div className={styles.formActions}>
          <button
            type="button"
            className={`${styles.formButton} ${styles.cancelButton}`}
            onClick={onClose}
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
    </div>
  );
};

export default DropDownForm;

import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { loginSuccess } from '../../store/slices/authSlice';
import { closeModal } from '../../store/slices/modalSlice';
import * as styles from './LoginModal.css.ts';
import { v4 as uuidv4 } from 'uuid';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 간단한 유효성 검사
    if (!username.trim() || !password.trim()) {
      setError('사용자 이름과 비밀번호를 입력해주세요.');
      return;
    }

    // 실제 애플리케이션에서는 API 호출로 대체
    // 여기서는 간단히 모든 로그인 시도를 성공으로 처리
    dispatch(loginSuccess({
      id: uuidv4(),
      username: username,
      email: `${username}@example.com`,
    }));
    
    dispatch(closeModal());
    onClose();
  };

  // ESC 키를 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeModal());
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, onClose]);

  // 모달 외부 클릭 시 닫기
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>로그인</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleLogin} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.formGroup}>
            <label htmlFor="username">사용자 이름</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.buttons}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              취소
            </button>
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

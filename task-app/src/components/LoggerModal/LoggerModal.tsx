import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { closeModal } from '../../store/slices/modalSlice';
import LogItem from './LogItem/LogItem';
import * as styles from './LoggerModal.css.ts';

interface LoggerModalProps {
  onClose: () => void;
}

// 로그 타입 정의
export type LogAction = 'CREATE' | 'UPDATE' | 'DELETE' | 'MOVE';
export type LogEntityType = 'BOARD' | 'LIST' | 'TASK';

export interface LogEntry {
  id: string;
  timestamp: number;
  action: LogAction;
  entityType: LogEntityType;
  entityId: string;
  entityName: string;
  details?: string;
}

const LoggerModal: React.FC<LoggerModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  // 실제 애플리케이션에서는 로그 데이터를 Redux 스토어나 컨텍스트에서 가져올 수 있습니다.
  // 여기서는 예시 데이터를 사용합니다.
  const logs: LogEntry[] = [
    {
      id: '1',
      timestamp: Date.now() - 3600000, // 1시간 전
      action: 'CREATE',
      entityType: 'BOARD',
      entityId: 'board-1',
      entityName: '프로젝트 계획',
    },
    {
      id: '2',
      timestamp: Date.now() - 1800000, // 30분 전
      action: 'CREATE',
      entityType: 'LIST',
      entityId: 'list-1',
      entityName: '할 일',
      details: '보드: 프로젝트 계획',
    },
    {
      id: '3',
      timestamp: Date.now() - 900000, // 15분 전
      action: 'CREATE',
      entityType: 'TASK',
      entityId: 'task-1',
      entityName: '요구사항 분석',
      details: '리스트: 할 일',
    },
    {
      id: '4',
      timestamp: Date.now() - 300000, // 5분 전
      action: 'UPDATE',
      entityType: 'TASK',
      entityId: 'task-1',
      entityName: '요구사항 분석 및 문서화',
      details: '제목 변경됨',
    },
  ];

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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>활동 로그</h2>
          <button 
            className={styles.closeButton} 
            onClick={() => {
              dispatch(closeModal());
              onClose();
            }}
          >
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          {logs.length > 0 ? (
            <ul className={styles.logList}>
              {logs.map((log) => (
                <LogItem key={log.id} log={log} />
              ))}
            </ul>
          ) : (
            <p className={styles.emptyMessage}>로그가 없습니다.</p>
          )}
        </div>
        <div className={styles.modalFooter}>
          <button
            className={styles.closeModalButton}
            onClick={() => {
              dispatch(closeModal());
              onClose();
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoggerModal;

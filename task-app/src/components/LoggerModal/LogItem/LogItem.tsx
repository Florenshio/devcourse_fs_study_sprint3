import React from 'react';
import type { LogEntry } from '../LoggerModal';
import * as styles from './LogItem.css.ts';

interface LogItemProps {
  log: LogEntry;
}

const LogItem: React.FC<LogItemProps> = ({ log }) => {
  // 로그 상태에 따른 아이콘 및 색상 처리
  const getActionIcon = (action: string) => {
    switch (action) {
      case 'CREATE':
        return '➕';
      case 'UPDATE':
        return '✏️';
      case 'DELETE':
        return '🗑️';
      case 'MOVE':
        return '↔️';
      default:
        return '📝';
    }
  };

  const getEntityTypeIcon = (entityType: string) => {
    switch (entityType) {
      case 'BOARD':
        return '📋';
      case 'LIST':
        return '📑';
      case 'TASK':
        return '📌';
      default:
        return '📄';
    }
  };

  const getActionClass = (action: string) => {
    switch (action) {
      case 'CREATE':
        return styles.createAction;
      case 'UPDATE':
        return styles.updateAction;
      case 'DELETE':
        return styles.deleteAction;
      case 'MOVE':
        return styles.moveAction;
      default:
        return '';
    }
  };

  // 시간 포맷팅
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  };

  // 상대적 시간 표시 (예: '5분 전')
  const getRelativeTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}일 전`;
    if (hours > 0) return `${hours}시간 전`;
    if (minutes > 0) return `${minutes}분 전`;
    return `방금 전`;
  };

  return (
    <li className={styles.logItem}>
      <div className={styles.logHeader}>
        <div className={styles.logIcons}>
          <span className={`${styles.actionIcon} ${getActionClass(log.action)}`}>
            {getActionIcon(log.action)}
          </span>
          <span className={styles.entityIcon}>
            {getEntityTypeIcon(log.entityType)}
          </span>
        </div>
        <div className={styles.logTime} title={formatTime(log.timestamp)}>
          {getRelativeTime(log.timestamp)}
        </div>
      </div>
      <div className={styles.logContent}>
        <div className={styles.logTitle}>
          <span className={styles.actionText}>
            {log.action === 'CREATE' && '생성함'}
            {log.action === 'UPDATE' && '업데이트함'}
            {log.action === 'DELETE' && '삭제함'}
            {log.action === 'MOVE' && '이동함'}
          </span>
          <span className={styles.entityName}>{log.entityName}</span>
        </div>
        {log.details && <div className={styles.logDetails}>{log.details}</div>}
      </div>
    </li>
  );
};

export default LogItem;

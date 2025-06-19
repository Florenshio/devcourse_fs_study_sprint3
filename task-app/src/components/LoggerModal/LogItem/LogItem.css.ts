import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';

export const logItem = style({
  display: 'flex',
  flexDirection: 'column',
  padding: vars.space.sm,
  borderRadius: vars.radii.default,
  backgroundColor: vars.colors.gray[50],
  border: `1px solid ${vars.colors.gray[200]}`,
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.gray[100],
  },
});

export const logHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.xs,
});

export const logIcons = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
});

export const actionIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  fontSize: vars.fontSizes.md,
});

export const entityIcon = style({
  fontSize: vars.fontSizes.md,
});

export const createAction = style({
  backgroundColor: '#DCFCE7', // 연한 초록색
  color: '#15803D', // 진한 초록색
});

export const updateAction = style({
  backgroundColor: '#DBEAFE', // 연한 파란색
  color: '#1D4ED8', // 진한 파란색
});

export const deleteAction = style({
  backgroundColor: '#FEE2E2', // 연한 빨간색
  color: '#B91C1C', // 진한 빨간색
});

export const moveAction = style({
  backgroundColor: '#F3E8FF', // 연한 보라색
  color: '#7E22CE', // 진한 보라색
});

export const logTime = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.gray[500],
});

export const logContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const logTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
});

export const actionText = style({
  color: vars.colors.gray[700],
});

export const entityName = style({
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.gray[900],
});

export const logDetails = style({
  marginTop: vars.space.xs,
  fontSize: vars.fontSizes.xs,
  color: vars.colors.gray[600],
  lineHeight: 1.4,
});

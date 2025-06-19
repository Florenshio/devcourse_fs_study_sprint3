import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.lg,
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
});

export const modalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.colors.gray[200]}`,
});

export const modalTitle = style({
  margin: 0,
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.gray[900],
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  fontSize: vars.fontSizes.xxl,
  cursor: 'pointer',
  color: vars.colors.gray[500],
  ':hover': {
    color: vars.colors.gray[700],
  },
});

export const modalBody = style({
  padding: vars.space.lg,
});

export const confirmMessage = style({
  margin: 0,
  fontSize: vars.fontSizes.md,
  color: vars.colors.gray[700],
  lineHeight: 1.5,
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.space.md,
  padding: vars.space.md,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
});

export const cancelButton = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  backgroundColor: vars.colors.gray[200],
  color: vars.colors.gray[700],
  border: 'none',
  borderRadius: vars.radii.default,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: 'pointer',
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.gray[300],
  },
});

export const deleteButton = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  backgroundColor: vars.colors.danger,
  color: vars.colors.white,
  border: 'none',
  borderRadius: vars.radii.default,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: 'pointer',
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: '#DC2626', // 더 진한 빨간색
  },
});

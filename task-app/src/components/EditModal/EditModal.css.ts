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
  maxHeight: '90vh',
  overflow: 'auto',
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

export const modalForm = style({
  padding: vars.space.md,
});

export const formGroup = style({
  marginBottom: vars.space.md,
});

export const formLabel = style({
  display: 'block',
  marginBottom: vars.space.xs,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.gray[700],
});

export const formInput = style({
  width: '100%',
  padding: vars.space.sm,
  fontSize: vars.fontSizes.md,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.default,
  ':focus': {
    outline: 'none',
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px rgba(59, 130, 246, 0.3)`,
  },
});

export const formTextarea = style({
  width: '100%',
  padding: vars.space.sm,
  fontSize: vars.fontSizes.md,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.default,
  minHeight: '120px',
  resize: 'vertical',
  ':focus': {
    outline: 'none',
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px rgba(59, 130, 246, 0.3)`,
  },
});

export const modalActions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.space.sm,
  marginTop: vars.space.md,
});

export const actionButton = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radii.default,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: 'pointer',
  transition: vars.transitions.default,
});

export const cancelButton = style({
  backgroundColor: vars.colors.white,
  color: vars.colors.gray[700],
  border: `1px solid ${vars.colors.gray[300]}`,
  ':hover': {
    backgroundColor: vars.colors.gray[100],
  },
});

export const submitButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: 'none',
  ':hover': {
    backgroundColor: vars.colors.primaryHover,
  },
  ':disabled': {
    backgroundColor: vars.colors.gray[300],
    cursor: 'not-allowed',
  },
});

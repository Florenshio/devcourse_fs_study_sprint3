import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  padding: vars.space.md,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.md,
  boxShadow: vars.shadows.md,
  marginBottom: vars.space.md,
});

export const formTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.gray[800],
});

export const formInput = style({
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.default,
  fontSize: vars.fontSizes.md,
  ':focus': {
    outline: 'none',
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px rgba(59, 130, 246, 0.3)`,
  },
});

export const formActions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.space.sm,
});

export const formButton = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radii.default,
  cursor: 'pointer',
  transition: vars.transitions.default,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
});

export const submitButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: 'none',
  ':hover': {
    backgroundColor: vars.colors.primaryHover,
  },
});

export const cancelButton = style({
  backgroundColor: vars.colors.white,
  color: vars.colors.gray[700],
  border: `1px solid ${vars.colors.gray[300]}`,
  ':hover': {
    backgroundColor: vars.colors.gray[100],
  },
});

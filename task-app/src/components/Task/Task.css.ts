import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const taskContainer = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.default,
  padding: vars.space.md,
  boxShadow: vars.shadows.sm,
  cursor: 'pointer',
  transition: vars.transitions.default,
  marginBottom: vars.space.sm,
  ':hover': {
    boxShadow: vars.shadows.md,
  },
});

export const taskContent = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  marginBottom: vars.space.xs,
});

export const taskDescription = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.gray[500],
  marginBottom: vars.space.sm,
});

export const taskFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: vars.space.sm,
});

export const taskActions = style({
  display: 'flex',
  gap: vars.space.xs,
});

export const taskActionButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: vars.radii.sm,
  cursor: 'pointer',
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.gray[100],
  },
});

export const completedTask = style({
  opacity: 0.6,
  textDecoration: 'line-through',
});

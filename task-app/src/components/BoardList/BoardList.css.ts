import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const boardListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: vars.colors.gray[50],
  borderRight: `1px solid ${vars.colors.gray[200]}`,
  padding: vars.space.md,
});

export const boardListHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.space.sm} ${vars.space.md}`,
  marginBottom: vars.space.md,
});

export const boardListTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.gray[800],
});

export const boardListContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  overflowY: 'auto',
  flex: 1,
});

export const boardItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radii.md,
  cursor: 'pointer',
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.gray[200],
  },
});

export const activeBoardItem = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  ':hover': {
    backgroundColor: vars.colors.primaryHover,
  },
});

export const boardItemTitle = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
});

export const boardItemActions = style({
  display: 'flex',
  gap: vars.space.xs,
});

export const boardItemButton = style({
  padding: vars.space.xs,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: vars.radii.sm,
  cursor: 'pointer',
  transition: vars.transitions.default,
  color: 'inherit',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export const addBoardButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.xs,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radii.md,
  backgroundColor: vars.colors.gray[200],
  color: vars.colors.gray[700],
  cursor: 'pointer',
  transition: vars.transitions.default,
  marginTop: vars.space.md,
  ':hover': {
    backgroundColor: vars.colors.gray[300],
  },
});

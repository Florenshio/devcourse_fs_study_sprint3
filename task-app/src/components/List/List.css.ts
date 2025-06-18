import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '280px',
  maxWidth: '280px',
  backgroundColor: vars.colors.gray[100],
  borderRadius: vars.radii.md,
  padding: vars.space.md,
  height: 'fit-content',
  maxHeight: 'calc(100vh - 180px)',
});

export const listHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.md,
  padding: `${vars.space.xs} ${vars.space.sm}`,
});

export const listTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.gray[800],
});

export const listActions = style({
  display: 'flex',
  gap: vars.space.xs,
});

export const listActionButton = style({
  padding: vars.space.xs,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: vars.radii.sm,
  cursor: 'pointer',
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.gray[200],
  },
});

export const listContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  overflowY: 'auto',
  padding: `${vars.space.xs} 0`,
  flex: 1,
});

export const addTaskButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.xs,
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: 'transparent',
  color: vars.colors.gray[600],
  borderRadius: vars.radii.default,
  cursor: 'pointer',
  transition: vars.transitions.default,
  marginTop: vars.space.sm,
  ':hover': {
    backgroundColor: vars.colors.gray[200],
  },
});

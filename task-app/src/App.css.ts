import { style } from '@vanilla-extract/css';
import { vars } from './styles/global.css';

export const appContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  backgroundColor: vars.colors.background,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.md} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  boxShadow: vars.shadows.md,
  zIndex: vars.zIndices.sticky,
});

export const headerTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
});

export const headerActions = style({
  display: 'flex',
  gap: vars.space.md,
});

export const mainContent = style({
  flex: 1,
  padding: vars.space.lg,
  overflowX: 'auto',
});

export const boardContainer = style({
  display: 'flex',
  gap: vars.space.lg,
  height: '100%',
  minHeight: '300px',
});

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
});

export const listTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
});

export const listContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  overflowY: 'auto',
  padding: `${vars.space.xs} 0`,
});

export const taskCard = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.default,
  padding: vars.space.md,
  boxShadow: vars.shadows.sm,
  cursor: 'pointer',
  transition: vars.transitions.default,
  ':hover': {
    boxShadow: vars.shadows.md,
  },
});

export const taskTitle = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  marginBottom: vars.space.xs,
});

export const taskDescription = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.gray[500],
});

export const addButton = style({
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
  ':hover': {
    backgroundColor: vars.colors.gray[200],
  },
});

export const footerActions = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'flex-start',
  padding: `${vars.space.lg} ${vars.space.lg}`,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
});

export const actionButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.gray[200],
  color: vars.colors.gray[700],
  borderRadius: vars.radii.default,
  fontWeight: vars.fontWeights.medium,
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.gray[300],
  },
});

export const dangerButton = style({
  backgroundColor: vars.colors.danger,
  color: vars.colors.white,
  ':hover': {
    filter: 'brightness(0.9)',
  },
});

export const addListButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '280px',
  maxWidth: '280px',
  padding: vars.space.md,
  backgroundColor: vars.colors.gray[100],
  borderRadius: vars.radii.md,
  color: vars.colors.gray[600],
  cursor: 'pointer',
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.gray[200],
  },
});

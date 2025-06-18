import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const boardContainer = style({
  display: 'flex',
  gap: vars.space.lg,
  height: '100%',
  minHeight: '300px',
  padding: vars.space.lg,
  overflowX: 'auto',
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
  alignSelf: 'flex-start',
  height: 'fit-content',
  ':hover': {
    backgroundColor: vars.colors.gray[200],
  },
});

export const emptyBoardMessage = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: vars.space.xxl,
  color: vars.colors.gray[500],
  textAlign: 'center',
});

export const emptyBoardTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
});

export const emptyBoardDescription = style({
  fontSize: vars.fontSizes.md,
  marginBottom: vars.space.lg,
});

export const emptyBoardButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderRadius: vars.radii.md,
  border: 'none',
  cursor: 'pointer',
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  transition: vars.transitions.default,
  ':hover': {
    backgroundColor: vars.colors.primaryHover,
  },
});

import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const actionButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderRadius: vars.radii.default,
  border: 'none',
  cursor: 'pointer',
  transition: vars.transitions.default,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  ':hover': {
    backgroundColor: vars.colors.primaryHover,
  },
});

export const actionButtonSecondary = style({
  backgroundColor: vars.colors.gray[200],
  color: vars.colors.gray[700],
  ':hover': {
    backgroundColor: vars.colors.gray[300],
  },
});

export const actionButtonIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  marginRight: vars.space.xs,
});

export const actionButtonText = style({
  display: 'flex',
  alignItems: 'center',
});

export const actionButtonContainer = style({
  position: 'relative',
});
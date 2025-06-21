import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const overlay = style({
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

export const modal = style({
  backgroundColor: vars.colors.white,
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  overflow: 'hidden',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 20px',
  borderBottom: `1px solid ${vars.colors.gray[200]}`,
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: vars.colors.gray[500],
  ':hover': {
    color: vars.colors.gray[700],
  },
});

export const form = style({
  padding: '20px',
});

export const formGroup = style({
  marginBottom: '16px',
});

export const input = style({
  width: '100%',
  padding: '10px',
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: '4px',
  fontSize: '16px',
  ':focus': {
    outline: 'none',
    borderColor: vars.colors.primary,
  },
});

export const buttons = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  marginTop: '20px',
});

export const cancelButton = style({
  padding: '8px 16px',
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: '4px',
  backgroundColor: vars.colors.white,
  color: vars.colors.gray[700],
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.colors.gray[100],
  },
});

export const loginButton = style({
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const error = style({
  color: '#dc3545',
  marginBottom: '16px',
  padding: '8px',
  backgroundColor: '#f8d7da',
  borderRadius: '4px',
  fontSize: '14px',
});

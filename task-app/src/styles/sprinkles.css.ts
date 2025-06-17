import { style } from '@vanilla-extract/css';
import { vars } from './global.css';

// 미디어 쿼리 정의
export const breakpoints = {
  mobile: 'screen and (max-width: 767px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1023px)',
  desktop: 'screen and (min-width: 1024px)',
};

// 반응형 스타일 생성 헬퍼 함수
export const responsiveStyle = (styleObj: Record<string, any>) => {
  return style(styleObj);
};

// 자주 사용하는 스타일 패턴 정의
export const flexStyles = {
  row: style({
    display: 'flex',
    flexDirection: 'row',
  }),
  column: style({
    display: 'flex',
    flexDirection: 'column',
  }),
  center: style({
    justifyContent: 'center',
    alignItems: 'center',
  }),
  spaceBetween: style({
    justifyContent: 'space-between',
  }),
  alignCenter: style({
    alignItems: 'center',
  }),
  justifyCenter: style({
    justifyContent: 'center',
  }),
  wrap: style({
    flexWrap: 'wrap',
  }),
};

// 마진 스타일 생성 함수
export const margin = {
  xs: style({ margin: vars.space.xs }),
  sm: style({ margin: vars.space.sm }),
  md: style({ margin: vars.space.md }),
  lg: style({ margin: vars.space.lg }),
  xl: style({ margin: vars.space.xl }),
  xxl: style({ margin: vars.space.xxl }),
};

// 패딩 스타일 생성 함수
export const padding = {
  xs: style({ padding: vars.space.xs }),
  sm: style({ padding: vars.space.sm }),
  md: style({ padding: vars.space.md }),
  lg: style({ padding: vars.space.lg }),
  xl: style({ padding: vars.space.xl }),
  xxl: style({ padding: vars.space.xxl }),
};

// 텍스트 스타일
export const text = {
  xs: style({ fontSize: vars.fontSizes.xs }),
  sm: style({ fontSize: vars.fontSizes.sm }),
  md: style({ fontSize: vars.fontSizes.md }),
  lg: style({ fontSize: vars.fontSizes.lg }),
  xl: style({ fontSize: vars.fontSizes.xl }),
  xxl: style({ fontSize: vars.fontSizes.xxl }),
  bold: style({ fontWeight: vars.fontWeights.bold }),
  semibold: style({ fontWeight: vars.fontWeights.semibold }),
  medium: style({ fontWeight: vars.fontWeights.medium }),
  normal: style({ fontWeight: vars.fontWeights.normal }),
  center: style({ textAlign: 'center' }),
  left: style({ textAlign: 'left' }),
  right: style({ textAlign: 'right' }),
};

// 색상 스타일
export const colors = {
  primary: style({ color: vars.colors.primary }),
  secondary: style({ color: vars.colors.secondary }),
  white: style({ color: vars.colors.white }),
  black: style({ color: vars.colors.black }),
  danger: style({ color: vars.colors.danger }),
  success: style({ color: vars.colors.success }),
  warning: style({ color: vars.colors.warning }),
};

// 배경색 스타일
export const bgColors = {
  primary: style({ backgroundColor: vars.colors.primary }),
  secondary: style({ backgroundColor: vars.colors.secondary }),
  white: style({ backgroundColor: vars.colors.white }),
  background: style({ backgroundColor: vars.colors.background }),
  backgroundDark: style({ backgroundColor: vars.colors.backgroundDark }),
  danger: style({ backgroundColor: vars.colors.danger }),
  success: style({ backgroundColor: vars.colors.success }),
  warning: style({ backgroundColor: vars.colors.warning }),
  transparent: style({ backgroundColor: 'transparent' }),
  gray50: style({ backgroundColor: vars.colors.gray[50] }),
  gray100: style({ backgroundColor: vars.colors.gray[100] }),
  gray200: style({ backgroundColor: vars.colors.gray[200] }),
  gray300: style({ backgroundColor: vars.colors.gray[300] }),
  gray400: style({ backgroundColor: vars.colors.gray[400] }),
  gray500: style({ backgroundColor: vars.colors.gray[500] }),
  gray600: style({ backgroundColor: vars.colors.gray[600] }),
  gray700: style({ backgroundColor: vars.colors.gray[700] }),
  gray800: style({ backgroundColor: vars.colors.gray[800] }),
  gray900: style({ backgroundColor: vars.colors.gray[900] }),
};


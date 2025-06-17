import { style } from '@vanilla-extract/css';
import { vars } from './global.css';

// 자주 사용하는 스타일 유틸리티 함수들

/**
 * 플렉스 컨테이너 스타일을 생성하는 함수
 */
export const createFlexContainer = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  gap = 'md',
  wrap = false,
}: {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  gap?: keyof typeof vars.space;
  wrap?: boolean;
} = {}) => {
  return style({
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: vars.space[gap],
    flexWrap: wrap ? 'wrap' : 'nowrap',
  });
};

/**
 * 카드 스타일을 생성하는 함수
 */
export const createCard = ({
  padding = 'md',
  radius = 'default',
  shadow = 'default',
  bgColor = 'white',
}: {
  padding?: keyof typeof vars.space;
  radius?: keyof typeof vars.radii;
  shadow?: keyof typeof vars.shadows;
  bgColor?: 'primary' | 'secondary' | 'white' | 'background' | 'backgroundDark' | 'black' | 'danger' | 'success' | 'warning' | string;
} = {}) => {
  // 배경색 처리 함수
  const getBgColor = () => {
    // 기본 색상 처리
    if (bgColor === 'primary') return vars.colors.primary;
    if (bgColor === 'secondary') return vars.colors.secondary;
    if (bgColor === 'white') return vars.colors.white;
    if (bgColor === 'background') return vars.colors.background;
    if (bgColor === 'backgroundDark') return vars.colors.backgroundDark;
    if (bgColor === 'black') return vars.colors.black;
    if (bgColor === 'danger') return vars.colors.danger;
    if (bgColor === 'success') return vars.colors.success;
    if (bgColor === 'warning') return vars.colors.warning;
    
    // gray 색상 처리
    if (bgColor === 'gray50') return vars.colors.gray[50];
    if (bgColor === 'gray100') return vars.colors.gray[100];
    if (bgColor === 'gray200') return vars.colors.gray[200];
    if (bgColor === 'gray300') return vars.colors.gray[300];
    if (bgColor === 'gray400') return vars.colors.gray[400];
    if (bgColor === 'gray500') return vars.colors.gray[500];
    if (bgColor === 'gray600') return vars.colors.gray[600];
    if (bgColor === 'gray700') return vars.colors.gray[700];
    if (bgColor === 'gray800') return vars.colors.gray[800];
    if (bgColor === 'gray900') return vars.colors.gray[900];
    
    // 그 외 문자열 값은 그대로 반환
    return bgColor;
  };
  
  return style({
    padding: vars.space[padding],
    borderRadius: vars.radii[radius],
    boxShadow: vars.shadows[shadow],
    backgroundColor: getBgColor(),
  });
};

/**
 * 버튼 스타일을 생성하는 함수
 */
export const createButton = ({
  variant = 'primary',
  size = 'md',
  rounded = false,
}: {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
} = {}) => {
  const sizeStyles = {
    sm: {
      padding: `${vars.space.xs} ${vars.space.sm}`,
      fontSize: vars.fontSizes.sm,
    },
    md: {
      padding: `${vars.space.sm} ${vars.space.md}`,
      fontSize: vars.fontSizes.md,
    },
    lg: {
      padding: `${vars.space.md} ${vars.space.lg}`,
      fontSize: vars.fontSizes.lg,
    },
  };

  // 버튼 변형 스타일 정의
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: vars.colors.primary,
          color: vars.colors.white,
          border: 'none',
          ':hover': {
            backgroundColor: vars.colors.primaryHover,
          },
        };
      case 'secondary':
        return {
          backgroundColor: vars.colors.secondary,
          color: vars.colors.white,
          border: 'none',
          ':hover': {
            backgroundColor: vars.colors.gray[600],
          },
        };
      case 'danger':
        return {
          backgroundColor: vars.colors.danger,
          color: vars.colors.white,
          border: 'none',
          ':hover': {
            filter: 'brightness(0.9)',
          },
        };
      case 'success':
        return {
          backgroundColor: vars.colors.success,
          color: vars.colors.white,
          border: 'none',
          ':hover': {
            filter: 'brightness(0.9)',
          },
        };
      case 'warning':
        return {
          backgroundColor: vars.colors.warning,
          color: vars.colors.white,
          border: 'none',
          ':hover': {
            filter: 'brightness(0.9)',
          },
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: vars.colors.primary,
          border: `1px solid ${vars.colors.primary}`,
          ':hover': {
            backgroundColor: vars.colors.gray[50],
          },
        };
      case 'ghost':
      default:
        return {
          backgroundColor: 'transparent',
          color: vars.colors.primary,
          border: 'none',
          ':hover': {
            backgroundColor: vars.colors.gray[50],
          },
        };
    }
  };

  return style({
    ...sizeStyles[size],
    ...getVariantStyles(),
    borderRadius: rounded ? vars.radii.full : vars.radii.default,
    fontWeight: vars.fontWeights.medium,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: vars.transitions.default,
    textAlign: 'center',
    ':disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  });
};

/**
 * 그리드 컨테이너 스타일을 생성하는 함수
 */
export const createGrid = ({
  columns = 1,
  gap = 'md',
}: {
  columns?: number | { mobile?: number; tablet?: number; desktop?: number };
  gap?: keyof typeof vars.space;
} = {}) => {
  const getGridTemplateColumns = () => {
    if (typeof columns === 'number') {
      return `repeat(${columns}, 1fr)`;
    }
    return undefined;
  };

  return style({
    display: 'grid',
    gridTemplateColumns: getGridTemplateColumns(),
    gap: vars.space[gap],
    '@media': {
      'screen and (max-width: 767px)': {
        gridTemplateColumns: typeof columns === 'object' && columns.mobile 
          ? `repeat(${columns.mobile}, 1fr)` 
          : undefined,
      },
      'screen and (min-width: 768px) and (max-width: 1023px)': {
        gridTemplateColumns: typeof columns === 'object' && columns.tablet 
          ? `repeat(${columns.tablet}, 1fr)` 
          : undefined,
      },
      'screen and (min-width: 1024px)': {
        gridTemplateColumns: typeof columns === 'object' && columns.desktop 
          ? `repeat(${columns.desktop}, 1fr)` 
          : undefined,
      },
    },
  });
};

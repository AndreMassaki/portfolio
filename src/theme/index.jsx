import typographyVariants from './typographyVariants';

const colors = {
  primary: {
    main: {
      color: '#fff8e6',
    },
  },
  secondary: {
    main: {
      color: '#e9c46a',
    },
  },
};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export default {
  breakpoints,
  colors,
  typographyVariants,
  fontFamily: '\'Fira Sans\', sans-serif',
};

import Color from 'color';

export default {
  // defaults
  white: '#fff',
  lighter: '#eee',
  light: '#ddd',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',
  transparent: 'transparent',
  darkTransparent: 'rgba(0, 0, 0, 0.6)',
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',

  // system
  primary: '#111',
  primaryDark: Color('#111').darken(0.1),
  secundary: '#222',
  secundaryDark: Color('#222').darken(0.1),

  success: '#9dca83',
  danger: '#e37a7a',
};

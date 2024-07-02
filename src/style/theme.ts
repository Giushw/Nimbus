import {extendTheme,} from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    liquorice: {
      50: '#e6e1de',
      100: '#ccc4bc',
      200: '#b3a89b',
      300: '#998d7a',
      400: '#807259',
      500: '#66593f',
      600: '#4d412e',
      700: '#33291e',
      800: '#1d1712',  // Base color
      900: '#0a0604',
    },
    seasalt: {
      50: '#ffffff',
      100: '#fdfdfd',
      200: '#fcfcfc',
      300: '#fafafa',
      400: '#f9f9f9',
      500: '#f7f7f7',
      600: '#f5f5f5',
      700: '#f3f3f3',
      800: '#fbfafc',  // Base color
      900: '#f1f1f1',
    },
    robin: {
      50: '#e1f8f7',
      100: '#c2f0ef',
      200: '#a4e8e7',
      300: '#86e0df',
      400: '#68d8d7',
      500: '#4ad0cf',
      600: '#2cc8c7',
      700: '#0ec0bf',
      800: '#00b8b7',
      900: '#58d3ce',  // Base color
    },
  },
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Urbanist', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        bg: 'liquorice.800',
        color: 'seasalt.800',
        fontFamily: `'Urbanist', sans-serif`,
      },
    },
  },
});

export default theme;

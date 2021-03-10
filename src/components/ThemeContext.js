import React from 'react';

export const theme = {
  dark: {
    background: 'black',
    color: 'white',
  },

  light: {
    background: 'white',
    color: 'black',
  },
};
export const ThemeContext = React.createContext(theme.light);

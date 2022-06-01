import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import theme from '../src/theme';
import * as nextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }

  img {
    position: relative;
  }
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  backgrounds: {
    default: 'valhalla',
    values: [
      {
        name: 'valhalla',
        value: '#21004B',
      },
      {
        name: 'white',
        value: '#FFF',
      },
    ],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/',
    asPath: '/',
    query: {},
    push() {},
  },
};

// Workaround for Next/Image not working in Storybook
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

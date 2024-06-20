import type { Preview } from "@storybook/react";
import '@/index.css'
// import { withThemeByClassName } from '@storybook/addon-themes';

// export const decorators = [
//   withThemeByClassName({
//     themes: {
//       light: 'light',
//       dark: 'dark',
//     },
//     defaultTheme: 'light',
//   }),
// ];
import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

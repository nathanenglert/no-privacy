import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: { current: "dark", dark: { ...themes.dark } },
  },
};

export default preview;

import type { Preview } from "@storybook/react-vite";

import "../lib/main.css";
import "../playground-shared/focus-ring.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
  },
};

export default preview;

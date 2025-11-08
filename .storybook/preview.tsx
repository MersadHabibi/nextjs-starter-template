import "@/app/globals.css";
import "./storybook-fonts.css";
import React from "react";

import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <div className="font-iranYekan font-normal" dir="rtl" lang="fa">
        <Story />
      </div>
    ),
  ],
};

export default preview;

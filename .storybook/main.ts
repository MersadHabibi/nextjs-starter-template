import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  features: {
    interactions: true,
  },
  staticDirs: ["..\\public"],
};
export default config;

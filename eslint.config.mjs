import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import storybook from "eslint-plugin-storybook";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["**/*.stories.*", "**/*.story.*"],
    ...storybook.configs["flat/recommended"],
  },
  {
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "off",
      // "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],

      // React specific rules
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": "warn",
      // "react/jsx-sort-props": ["warn", {
      //   "callbacksLast": true,
      //   "shorthandFirst": true,
      //   "ignoreCase": true
      // }],

      // General rules
      // "no-console": ["warn", { "allow": ["warn", "error"] }],
      "prefer-const": "warn",
      "no-duplicate-imports": "error",
      "no-unused-expressions": "warn",
      "no-unused-vars": "off", // Using TypeScript's no-unused-vars instead

      // Import rules
      // "import/order": ["warn", {
      //   "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      //   "newlines-between": "always",
      //   "alphabetize": { "order": "asc" }
      // }],
    },
  },
]);

export default eslintConfig;

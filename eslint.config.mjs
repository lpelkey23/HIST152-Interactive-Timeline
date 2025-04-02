// eslint.config.js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+
      "prettier/prettier": "warn", // Run Prettier as part of ESLint
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  js.configs.recommended,
  pluginReact.configs.recommended,
]);

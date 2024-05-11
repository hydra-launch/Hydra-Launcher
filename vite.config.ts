import { resolve } from "path";
import {
  defineConfig,
  loadEnv,
  swcPlugin,
  externalizeDepsPlugin,
} from "electron-vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode
  loadEnv(mode);

  // Initialize Sentry plugin with authentication token and project details
  const sentryPlugin = sentryVitePlugin({
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "hydra-launcher",
    project: "hydra-launcher",
  });

  // Define configuration options for main process
  const mainConfig = {
    build: {
      sourcemap: true,
      rollupOptions: {
        // Externalize better-sqlite3 module
        external: ["better-sqlite3"],
      },
    },
    resolve: {
      alias: {
        // Alias for main process files
        "@main": resolve("src/main"),
        // Alias for locale files
        "@locales": resolve("src/locales"),
        // Alias for resource files
        "@resources": resolve("resources"),
      },
    },
    plugins: [externalizeDepsPlugin(), swcPlugin(), sentryPlugin],
  };

  // Define configuration options for preload process
  const preloadConfig = {
    plugins: [externalizeDepsPlugin()],
  };

  // Define configuration options for renderer process
  const rendererConfig = {
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: {
        // Alias for renderer process files
        "@renderer": resolve("src/renderer/src"),
        // Alias for locale files
        "@locales": resolve("src/locales"),
      },
    },
    plugins: [svgr(), react(), vanillaExtractPlugin(), sentryPlugin],
  };

  // Return combined configuration object
  return {
    main: mainConfig,
    preload: preloadConfig,
    renderer: rendererConfig,
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const production = mode === "production";

  return {
    server: {
      origin: production
        ? "https://eftsoons.github.io/MicroFrontendVite/"
        : "http://localhost:2000",
      port: 2000,
    },
    preview: {
      port: 2000,
    },
    base: "MicroFrontendVite",
    plugins: [
      react(),
      vue(),
      federation({
        name: "react-host",
        remotes: {
          "remote-vue": {
            name: "remote-vue",
            entry: production
              ? "https://eftsoons.github.io/MicroFrontendVite/remote-vue/remoteEntry.js"
              : "http://localhost:2001/remoteEntry.js",
            type: "module",
          },
          "remote-react": {
            name: "remote-react",
            entry: production
              ? "https://eftsoons.github.io/MicroFrontendVite/remote-react/remoteEntry.js"
              : "http://localhost:2002/remoteEntry.js",
            type: "module",
          },
        },
        shared: ["react", "react-dom", "vue"],
      }),
    ],
  };
});

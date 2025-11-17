import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const production = mode === "production";
  return {
    plugins: [
      vue(),
      federation({
        name: "remote-vue",
        filename: "remoteEntry.js",
        exposes: {
          "./VueApp": "./src/App.vue",
        },
        shared: ["vue"],
        library: { type: "module" },
      }),
    ],
    base: production ? "MicroFrontendVite/remote-vue" : "",
  };
});

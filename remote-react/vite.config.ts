import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const production = mode === "production";

  return {
    plugins: [
      react(),
      federation({
        name: "remote-react",
        filename: "remoteEntry.js",
        exposes: { "./App": "./src/App.tsx" },
        shared: ["react", "react-dom"],
        library: { type: "module" },
      }),
    ],
    base: production ? "MicroFrontendVite/remote-react" : "",
  };
});

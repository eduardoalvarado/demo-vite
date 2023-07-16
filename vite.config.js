import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 8090;
  console.log("command", command, mode);
  const env = loadEnv(mode, process.cwd());
  console.log("env", env.VITE_NAME);
  if (mode === "development") {
    console.log("desarrollo");
    return {
      server: {
        port,
      },
    };
  } else {
    console.log("produccion");
    return {
      build: {
        lib: {
          entry: resolve(__dirname, "lib/main.js"),
          name: "demo",
          fileName: (format) => `demo.${format}.js`
        },
      },
    };
  }
});

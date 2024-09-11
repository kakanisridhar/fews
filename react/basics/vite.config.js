import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
    return {
        server: {
            port: 3000,
        },

        base: "/learning-react/",

        build: {
            outDir: "build",
            assetsDir: ".",
            rollupOptions: {
                output: {
                    entryFileNames: "index.js",
                    assetFileNames: "[name]-[hash].[ext]",
                },
            },
        },

        plugins: [
            react(),
            eslint()
        ],
    };
});

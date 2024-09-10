import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cdn from 'vite-plugin-cdn-import';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
});

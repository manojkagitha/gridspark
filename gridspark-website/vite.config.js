import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/gridspark-website/', // Replace with '/<repo-name>/' if different
});

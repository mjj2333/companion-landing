import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/companion-landing/',
  plugins: [tailwindcss()],
});

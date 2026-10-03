import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacyPolicy: 'privacy-policy/index.html',
        dataDeletion: 'data-deletion/index.html',
      },
    },
  },
});

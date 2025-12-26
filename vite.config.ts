import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: "/Portfolio/",  // <-- ADD THIS LINE

      server: {
        port: 3000,
        host: '0.0.0.0',
      },

      plugins: [react()],

      define: {
        'process.env.API_KEY': JSON.stringify(env.AIzaSyDX6SiUbFU7EG9rHf_MAO66zRtqkCzdaPM),
        'process.env.AIzaSyDX6SiUbFU7EG9rHf_MAO66zRtqkCzdaPM': JSON.stringify(env.AIzaSyDX6SiUbFU7EG9rHf_MAO66zRtqkCzdaPM)
      },

      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});


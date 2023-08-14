import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        https: {
            cert: './.certs/tiagocode.test.crt',
            key: './.certs/tiagocode.test.key',
        },
        host: 'website.tiagocode.test',
        hmr: {
            host: 'website.tiagocode.test',
        },
        cors: {
            origin: '*'
        }
    },
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
});

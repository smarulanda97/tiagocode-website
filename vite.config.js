/// <reference types="vitest" />
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        https: {
            cert: './.certs/tiagocode.tests.pem',
            key: './.certs/tiagocode.tests.key',
        },
        host: 'website.tiagocode.tests',
        hmr: {
            host: 'website.tiagocode.tests',
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
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            reporter: ['html'],
            reportsDirectory: './resources/js/tests/coverage'
        },
        setupFiles: ['resources/js/setup.js']
    }
});

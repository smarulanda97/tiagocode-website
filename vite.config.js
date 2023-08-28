/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const appDomain = env.APP_URL.replace(/(http:\/\/)|(https:\/\/)/, '');

    return {
        server: {
            https: {
                cert: `./.certs/${appDomain}.crt`,
                key: `./.certs/${appDomain}.key`,
            },
            host: appDomain,
            hmr: {
                host: appDomain,
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
                reportsDirectory: './resources/js/com/coverage'
            },
            setupFiles: ['resources/js/setup.js']
        }
    }
});

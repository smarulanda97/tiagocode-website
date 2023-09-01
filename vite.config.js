import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const appDomain = env.APP_URL.replace(/(http:\/\/)|(https:\/\/)/, '');

    return {
        plugins: [
            laravel({
                input: 'resources/js/app.jsx',
                ssr: 'resources/js/ssr.jsx',
                refresh: true,
            }),
            react(),
        ],
        resolve: {
            alias: {
                '@/Utils': '/resources/js/Utils',
            },
        },
        server: {
            https: {
                cert: `./.certs/certs/${appDomain}.crt`,
                key: `./.certs/private/${appDomain}.key`,
            },
            host: appDomain,
            hmr: {
                host: appDomain,
            },
            cors: {
                origin: '*',
            },
        },
    };
});

/// <reference types="vitest" />
/// <reference types="vite/client" />
import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig(configEnv =>
    mergeConfig(
        viteConfig(configEnv),
        defineConfig({
            server: false,
            test: {
                globals: true,
                environment: 'jsdom',
                setupFiles: ['resources/js/vitest.setup.js'],
                api: {
                    host: '0.0.0.0',
                },
                coverage: {
                    provider: 'v8',
                    reporter: ['html'],
                    reportsDirectory: './resources/js/Tests/coverage',
                },
            },
        })
    )
);

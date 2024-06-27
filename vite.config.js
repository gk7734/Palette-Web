import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import compression from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        compression({
            include: [/\.(js)$/, /\.(css)$/],
            threshold: 1400,
        })
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            }
        }
    }
})

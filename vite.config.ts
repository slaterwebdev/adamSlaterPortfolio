import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve:{
      alias: {
        '@pages': path.resolve(__dirname, 'src/application/pages'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
        '@components': path.resolve(__dirname, 'src/application/components'),
      },
    }
})

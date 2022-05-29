import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'
import { resolve } from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const projectRootDir = resolve(__dirname)

export default defineConfig({
    plugins: [
        dynamicImport(),
        vue({
            template: { transformAssetUrls },
        }),

        quasar({
            sassVariables: 'src/assets/quasar-variables.sass',
        }),
    ],
    resolve: {
        alias: { '@': resolve(__dirname, 'src') },
    },
})

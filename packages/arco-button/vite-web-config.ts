import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve' || command === 'dev') {
    return {
      plugins: [
        vue({
          template: {
            compilerOptions: {
              // treat all tags with a dash as custom elements
              isCustomElement: tag => tag.includes('-')
            }
          }
        })
      ],
    }
  } else {
    // command === 'build'
    return {
      resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
      },
      plugins: [
        vue({
          customElement: true,
          template: {
            compilerOptions: {
              isCustomElement: tag => tag.includes('-')
            }
          }
        }),
        vueJsx(),
      ],
      build: {
        lib: {
          entry: 'src/index.tsx',
          name: 'ArcoButton',
          fileName: (format) => `arco-button-web.${format}.js`
        },
        outDir: 'dist/',
        /*rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }*/
      }
    }
  }
})

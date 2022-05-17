import { defineCustomElement } from 'vue'
import { Button } from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import Demo from './demo.ce.vue';

console.log('styles', Demo.styles)

export const ArcoButton = defineCustomElement({...Button, styles: Demo.styles})

export function useArcoButton() {
  customElements.define('arco-button', ArcoButton)
}

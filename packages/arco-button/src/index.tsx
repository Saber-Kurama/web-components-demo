import { defineCustomElement, h, renderSlot } from 'vue'
import { Button } from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';
import Demo from './demo.ce.vue';
import DemoTsx from './demo';

// console.log('styles', Demo.styles)
// defineCustomElement({
  
// })
// export const ArcoButton = defineCustomElement({
//   render() {
//     console.log('this.$slots', this.$slots);
//     return [
//       h('div', null, [
//         renderSlot(this.$slots, 'default', undefined, () => [
//           h('div', 'fallback')
//         ])
//       ]),
//       h('div', null, renderSlot(this.$slots, 'named'))
//     ]
//   }
// })
// export const ArcoButton = defineCustomElement(Button)
// export const ArcoButton = defineCustomElement(Demo)
export const ArcoButton = defineCustomElement(DemoTsx)

export function useArcoButton() {
  customElements.define('arco-button', ArcoButton)
}

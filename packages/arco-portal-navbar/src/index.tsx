import { defineCustomElement } from 'vue';
// @ts-ignore
import PortalNavbar from '@dangojs/portal-navbar';
import Demo from './demo.ce.vue';
import '@arco-design/web-vue/dist/arco.css';
import '@dangojs/portal-navbar/dist/css/index.css';
console.log('styles', Demo.styles)

export const ArcoPortalNavbar = defineCustomElement({...PortalNavbar, styles: Demo.styles})

export function useArcoPortalNavbar() {
  customElements.define('arco-portal-navbar', ArcoPortalNavbar)
}

import { defineComponent } from "vue";
import { Button } from '@arco-design/web-vue';
export default defineComponent({
  name: 'XButton',
  setup(props, { slots }) {
    return() => {
      return <div>
      <div>
        <div>标题</div>
        <slot name="title1">xxxx</slot>
      </div>
      <slot></slot>
    </div>
    }
  }
})
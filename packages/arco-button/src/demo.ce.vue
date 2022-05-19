<script lang="ts" setup>
  import {useSlots} from 'vue';
  const slots = useSlots();
  console.log('slots', slots)
</script>
<template>
  <div>
    <div>
      <div>标题</div>
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<style >
  /* @import url('@arco-design/web-vue/dist/arco.css'); */
</style>
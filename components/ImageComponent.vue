<template>
    <img :src="resolvedSrc" :width="width" :height="height" :class="imgClass" loading="lazy" :alt="alt" />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ImageComponent',
    props: {
      src: {
        type: String,
        required: true
      },
      width: {
        type: [String, Number],
        default: null
      },
      height: {
        type: [String, Number],
        default: null
      },
      imgClass: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      }
    },
    computed: {
      resolvedSrc() {
        return new URL(this.src, import.meta.url).href;
      }
    }
  });
  </script>
  
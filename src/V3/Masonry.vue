<template>
  <slot v-for="(obj, index) in data" :index="index" :item="obj"></slot>
</template>

<script setup>
import { watch } from 'vue';
import Masonry from 'masonry-layout';
import ImagesLoaded from 'imagesloaded';

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  options: {
    type: Object
  },
  selector: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['images-loaded', 'loaded']);

const loaded = () => {
  // all images are loaded
  ImagesLoaded(props.selector, { background: true }, () => {
    emit('images-loaded');

    emit('loaded', new Masonry(props.selector, props.options));
  });
};

watch(() => props.data, () => {
  loaded()
});

onMounted(() => {
  loaded();
})
</script>

<template>
  <div>
    <slot v-for="(obj, index) in data" :index="index" :current="obj"></slot>
  </div>
</template>

<script>
import Masonry from 'masonry-layout';
import ImagesLoaded from 'imagesloaded';

export default {
  props: {
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
  },
  methods: {
    loaded() {
      // all images are loaded
      ImagesLoaded(this.selector, () => {
        this.$emit('masonry-images-loaded');
        // activate mansonry grid
        let masonry = new Masonry(this.selector, this.options);

        this.$emit('masonry-loaded', masonry);
      });
    }
  },
  mounted() {
    this.loaded();
  },
  watch: {
    data() {
      this.loaded();
    }
  }
}
</script>

<template functional>
  <v-lazy-image :src="props.src" :src-placeholder="props.srcPlaceholder" alt="Periscope"></v-lazy-image>
</template>
<script>
export default {
  name: 'ZoomIamge'
}
</script>

<style scoped>
.v-lazy-image {
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
  transition: opacity 0.5s, transform 0.5s;
}
.v-lazy-image-loaded {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>

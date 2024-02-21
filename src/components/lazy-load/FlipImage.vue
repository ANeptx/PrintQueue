<template functional>
  <v-lazy-image :src="props.src" :src-placeholder="props.srcPlaceholder" alt="Periscope"></v-lazy-image>
</template>
<script>
export default {
  name: 'FlipIamge'
}
</script>

<style scoped>
.v-lazy-image {
  transition: transform 1s;
}
.v-lazy-image-loaded {
  transform: rotate3d(1, 0, 0, 360deg);
}
</style>

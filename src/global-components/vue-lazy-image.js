import Vue from 'vue'
import VLazyImage from 'v-lazy-image/v2'
// import BlurImage from '@/components/lazy-load/BlurImage'
// import FlipImage from '@/components/lazy-load/FlipImage'
import FadeImage from '@/components/lazy-load/FadeImage'
// import FadeUpImage from '@/components/lazy-load/FadeUpImage'
// import ZoomImage from '@/components/lazy-load/ZoomImage'

// Vue.use(VLazyImage);

Vue.component('VLazyImage', VLazyImage)
// Vue.component(BlurImage.name, BlurImage)
// Vue.component(FlipImage.name, FlipImage)
Vue.component(FadeImage.name, FadeImage)
// Vue.component(FadeUpImage.name, FadeUpImage)
// Vue.component(ZoomImage.name, ZoomImage)

<template>
  <b-link class="navbar-brand" to="/">
    <span class="brand-logo">
      <b-img :src="appLogoImage" alt="logo" />
    </span>
    <h2 class="brand-text mb-0 font-phoenix-gd">
      {{ appName }}
    </h2>
  </b-link>
</template>

<script>
import {} from '@vue/composition-api'
export default {
  setup() {
    // App Name
    const { appName, appLogoImage } = $themeConfig.app
    return {
      appName,
      appLogoImage,
    }
  },
}
</script>

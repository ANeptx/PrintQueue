<template>
  <div id="app" class="h-100" :class="[skinClasses]">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
// This will be populated in `beforeCreate` hook
import { $themeColors, $themeBreakpoints, $themeConfig } from "@themeConfig";
import { provideToast } from "vue-toastification/composition";
import { watch } from "@vue/composition-api";
import useAppConfig from "@core/app-config/useAppConfig";

import { useWindowSize, useCssVar } from "@vueuse/core";

import store from "@/store";

import { mapVuex } from "@/@core/mixins/vuex";


/* eslint-disable */

//const LayoutVertical = () => import("@/layouts/vertical/LayoutVertical.vue");
//const LayoutHorizontal = () =>
//  import("@/layouts/horizontal/LayoutHorizontal.vue");

//const LayoutFull = () => import("@/layouts/full/LayoutFull.vue");

/* eslint-enable */

export default {
  mixins: [mapVuex],
  components: {
    // Layouts
    // LayoutHorizontal,
    // LayoutVertical,
    // LayoutFull,
  },
  // ! We can move this computed: layout & contentLayoutType once we get to use Vue 3
  // Currently, router.currentRoute is not reactive and doesn't trigger any change
  computed: {
    layout() {
      if (this.$route.meta.layout === "full") return "layout-full";
      return `layout-${this.contentLayoutType}`;
    },
    contentLayoutType() {
      return this.$store.state.appConfig.layout.type;
    },
  },
  beforeCreate() {
    // Set colors in theme
    const colors = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "light",
      "dark",
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = colors.length; i < len; i++) {
      $themeColors[colors[i]] = useCssVar(
        `--${colors[i]}`,
        document.documentElement
      ).value.trim();
    }

    // Set Theme Breakpoints
    const breakpoints = ["xs", "sm", "md", "lg", "xl"];

    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = breakpoints.length; i < len; i++) {
      $themeBreakpoints[breakpoints[i]] = Number(
        useCssVar(
          `--breakpoint-${breakpoints[i]}`,
          document.documentElement
        ).value.slice(0, -2)
      );
    }

    // Set RTL
    const { isRTL } = $themeConfig.layout;
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  },
  setup() {
    const { skin, skinClasses } = useAppConfig();

    // If skin is dark when initialized => Add class to body
    if (skin.value === "dark") document.body.classList.add("dark-layout");

    // Provide toast for Composition API usage
    // This for those apps/components which uses composition API
    // Demos will still use Options API for ease
    provideToast({
      hideProgressBar: true,
      closeOnClick: false,
      closeButton: false,
      icon: false,
      timeout: 3000,
      transition: "Vue-Toastification__fade",
    });

    // Set Window Width in store
    store.commit("app/UPDATE_WINDOW_WIDTH", window.innerWidth);
    const { width: windowWidth } = useWindowSize();
    watch(windowWidth, (val) => {
      store.commit("app/UPDATE_WINDOW_WIDTH", val);
    });

    return {
      skinClasses,
    };
  },
  async mounted() {
    const self = this;
    this.$nextTick(async () => {
      setTimeout(() => {
        if (self.$route.query.site) {
          self.$store.dispatch("saveSiteName", self.$route.query.site);
        }
      }, 100);
      await self.pos_fetchMenuFromDjango();
      this.$store.dispatch("pos/fetchMenuFromDjango")
    });
  },
  methods: {},
};
</script>

<style>
:root {
  --light: white;
  --PnGray: rgb(240, 240, 240);
  --dark: #0e0e0e;
  --mainColor: #eee;
  --zoneItem: #eee;
  --zoneItemActive: rgb(19, 133, 153);
  --phoenix-gradient: rgb(15, 162, 254);
  --phoenix-gradient-to: linear-gradient(
    184deg,
    rgba(15, 162, 254, 1) 0%,
    rgba(2, 197, 255, 1) 100%
  );
  --primary: linear-gradient(
    184deg,
    rgba(15, 162, 254, 1) 0%,
    rgba(2, 197, 255, 1) 100%
  );
}

.font-phoenix-gd {
  color: var(--phoenix-gradient-to) !important;
}
.bg-phoenix-gd {
  background: var(--phoenix-gradient-to) !important;
}

.bg-phoenix-gray {
  background-color: var(--PnGray);
}

.swal2-popup {
  display: flex;
  flex-flow: column;
}
.swal2-content {
  display: flex;
  justify-content: center;
}
.swal2-html-container {
  width: 100%;
}

.swal2-input {
  width: 100%;
}

.overflow-scroll {
  overflow: scroll;
}

.clickable {
  cursor: pointer;
}
</style>

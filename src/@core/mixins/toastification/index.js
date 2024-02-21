import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export const mapToast = {
  methods: {
    showToast({
      variant = "danger",
      title = "Incorrect",
      text = "Please try again.",
      icon = "InfoIcon",
    } = {}) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: title,
          icon,
          text: `👋 ${text}`,
          variant,
        },
      });
    },
  },
};

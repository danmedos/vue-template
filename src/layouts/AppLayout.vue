<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import SimpleLayout from "./SimpleLayout.vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "AppLayout",
  setup() {
    const layout = ref(SimpleLayout);
    const route = useRoute();
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default;
        } catch (e) {
          console.log(e);
          layout.value = SimpleLayout;
        }
      },
      { immediate: true }
    );
    return { layout };
  },
};
</script>
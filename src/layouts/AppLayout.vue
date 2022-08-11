<template>
  <div>status: {{ webPageStatus }}</div>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import SimpleLayout from "./SimpleLayout.vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import { mapGetters } from 'vuex'
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
          layout.value = SimpleLayout;
        }
      },
      { immediate: true }
    );
    return { layout };
  },
  computed:{
    ...mapGetters(['webPageStatus'])
  }
};
</script>
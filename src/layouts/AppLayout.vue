<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import SimpleLayout from "./SimpleLayout.vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import { mapState } from 'vuex'
import { ElLoading } from 'element-plus'
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
  data() {
    return {
      loadingDialog: undefined
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  watch: {
    loading(loading) {
      if (loading) {
        this.loadingDialog = ElLoading.service({ fullscreen: true })
      } else if(this.loadingDialog) {
        this.loadingDialog.close()
      }
    }
  }
};
</script>
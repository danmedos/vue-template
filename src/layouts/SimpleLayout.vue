<template>
  <div class="simpleLayout">
    <app-nav />
    <slot />
    <footer>Simple</footer>
  </div>
</template>

<script>
import AppNav from "./parts/AppNav";
export default {
  components: { AppNav },
};
</script>

<style scoped>
.simpleLayout {
  background-color: antiquewhite;
}
</style>

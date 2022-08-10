<template>
  <div class="adminLayout">
    <app-nav />
    <slot />
    <footer>Admin</footer>
  </div>
</template>

<script>
import AppNav from "./parts/AppNav";
export default {
  components: { AppNav },
};
</script>

<style scoped>
.adminLayout {
  background-color: aquamarine;
}
</style>

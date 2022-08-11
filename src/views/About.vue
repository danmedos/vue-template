<template>
  <div>
    <h1>About</h1>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import middleware from '@/middlewares/authenticated'

export default {
  name: "AboutPage",
  layout: "AdminLayout",
  middlewares: { middleware },
  methods: {
    async logout() {
      await this.$store.dispatch("signOut");
      this.$router.go("/")
    },
  },
}
</script>
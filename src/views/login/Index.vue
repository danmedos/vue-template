<template>
  <div>
    <h1>Login Page</h1>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layou: "SimpleLayout",
  methods: {
    async login() {
      await this.$store.dispatch("signIn");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
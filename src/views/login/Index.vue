<template>
  <div class="loginPage">
    <h1>Login Page</h1>
    <el-button type="primary" plain @click="login">login</el-button>
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
.loginPage {
  background-color: aqua;
  padding-top: 60px;
}
</style>
<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script>
import middleware from '@/middlewares/authenticated'
export default {
  name: "AboutPage",
  layout: "AdminLayout",
  middlewares: { middleware }
}
</script>
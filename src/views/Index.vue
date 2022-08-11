<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import middleware from '@/middlewares/authenticated'

export default {
  name: "HomePage",
  layout: 'AdminLayout',
  middlewares: { middleware }
};
</script>
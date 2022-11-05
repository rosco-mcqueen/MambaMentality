<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const quasarUiAuth = require('@vueauth/quasar-ui-auth');
    quasarUiAuth.authenticateRoutes();
  }
})
</script>

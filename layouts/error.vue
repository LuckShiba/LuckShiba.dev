<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    {{ messages[error.statusCode] || 'Unexpected error' }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    messages: {
      404: 'Page not found',
    },
  }),
})
</script>

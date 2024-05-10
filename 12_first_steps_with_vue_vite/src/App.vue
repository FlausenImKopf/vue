<template>
  <TheHeader />
  <TheBookList />
</template>

<!-- Alternative to importing reset.css in main.js: -->
<!-- <style>
@import url('./assets/reset.css');
</style> -->

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheBookList from '@/components/TheBookList.vue'

export default {
  components: {
    TheHeader,
    TheBookList
  }
}
</script>

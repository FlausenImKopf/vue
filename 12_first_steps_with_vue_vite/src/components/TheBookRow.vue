<template>
  <tbody>
    <tr class="table-item__table-row">
      <td>{{ book.title }}</td>
      <td>{{ book.isbn }}</td>
      <td><TheBaseButton variant="secondary" text="Click me" /></td>
    </tr>
  </tbody>
</template>

<script>
import TheBaseButton from '@/components/TheBaseButton.vue'
export default {
  components: { TheBaseButton },
  props: ['book']
}
</script>

<style scoped>
.table-item__table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
}
</style>

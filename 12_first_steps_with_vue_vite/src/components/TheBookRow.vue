<template>
  <tbody>
    <tr class="table-item__table-row">
      <td>{{ book.title }}</td>
      <td>{{ book.isbn }}</td>
      <td>
        <TheBaseButton @bookmarkChanged="sendOn" variant="secondary" :text="buttonText" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import TheBaseButton from '@/components/TheBaseButton.vue'
export default {
  components: { TheBaseButton },
  props: ['book', 'buttonText'],
  methods: {
    sendOn() {
      this.$emit('bookmarkChanged')
    }
  }
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

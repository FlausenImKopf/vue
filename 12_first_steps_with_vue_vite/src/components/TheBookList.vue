<template>
  <section class="table-item">
    <h2 class="table-item__hl">All Books</h2>
    <table class="table-item__table">
      <thead>
        <tr>
          <th class="table-item__table-head-name">Name</th>
          <th class="table-item__table-head--isbn">ISBN</th>
          <th class=".table-item__table-head--actions">Action</th>
        </tr>
      </thead>
      <the-book-row
        v-for="book in books"
        :button-text="changeButtonText(book)"
        @bookmarkChanged="changeBookmarkState(book)"
        :book="book"
        :key="'id-' + book.isbn"
        class="table-item__table-row"
      />
    </table>
  </section>
</template>

<script>
import TheBookRow from '@/components/TheBookRow.vue'

export default {
  components: { TheBookRow },
  data() {
    return {
      books: [
        {
          title: 'Practical Rust Web Projects',
          isbn: '9781484265888',
          author: 'Shing Lyu',
          publisher: 'Apress',
          price: '$28.75',
          numPages: 256,
          isBookmarked: false
        },
        {
          title: 'Using WebPagetest',
          isbn: '9781491902592',
          author: 'Rick Viscomi, Andy Davies, Marcel Duran',
          publisher: "O'Reilly Media",
          price: '$25.80',
          numPages: 214,
          isBookmarked: false
        },
        {
          title: 'Web Scraping with Python',
          isbn: '9781491910290',
          author: 'Ryan Mitchell',
          publisher: "O'Reilly Media",
          price: '$14.00',
          numPages: 256,
          isBookmarked: false
        },
        {
          title: 'High Performance Mobile Web',
          isbn: '9781491912553',
          author: 'Maximiliano Firtman',
          publisher: "O'Reilly Media",
          price: '$7.00',
          numPages: 326,
          isBookmarked: false
        }
      ]
    }
  },
  methods: {
    changeBookmarkState(book) {
      return (book.isBookmarked = !book.isBookmarked)
    },
    changeButtonText(book) {
      return book.isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'
    }
  }
}
</script>

<style scoped>
.table-item__table-head-name {
  width: 65%;
}
.table-item__table-head-isbn {
  width: 20%;
}
.table-item__table-head-actions {
  width: 15%;
}
.table-item__table-row button {
  opacity: 0;
  padding: 5px;
  transition: opacity 500ms;
  cursor: pointer;
  border-radius: 5px;
}

.table-item__table-row:hover button {
  opacity: 1;
}
.table-item__table thead tr {
  background-color: var(--primary);
  color: #ffffff;
  text-align: left;
}
.table-item__table th,
.table-item__table td {
  padding: 12px 15px;
}
.table-item__table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.table-item__table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.table-item__table tbody tr:last-of-type {
  border-bottom: 2px solid var(--primary);
}
.table-item__table tbody tr.active-row {
  font-weight: bold;
  color: var(--primary);
}
.table-item__hl {
  margin-top: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--primary-dark);
}
</style>

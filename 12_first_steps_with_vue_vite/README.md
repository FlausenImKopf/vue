# First Steps with vue vite: Bookmonkey

## 1. Task: Add a reset.css file

We need to normalize some styling

- [ ] Remove all styles from existing files.
- [ ] Add the `src/reset.css` css styles to the application
- [ ] Use one of the techniques you learned before

## Sample Solution

https://codesandbox.io/s/condescending-agnesi-chd28

# 2.Task: Header & Booklist Component

In this task we will practice the handling with single file components in Vue CLI projects.

## Solve the following tasks:

- [ ] Remove the HelloWorld component
- [ ] Remove dummy stuff from App.vue
- [ ] Add global css styles from `src/global.css`
  - [ ] Choose your favorite technique to add css
- [ ] Create a Header Component
  - [ ] Take use of provided resources `src/LayoutHeader`
  - [ ] Register it in the App.vue
- [ ] Create a BookList Component
  - [ ] Take use of provided resources `src/BookList`
  - [ ] Register it in the App.vue

## Sample Solution

https://codesandbox.io/s/blazing-silence-5suyo

# 3.Task: Create a BookListRow and BaseButton Component

In this task we will slice our BookList component into smaller chunks.

## Solve the following tasks:

- [ ] Extend the table head with a column called action
  - [ ] Use the css class for styling `th.table-item__table-head--actions`
  - [ ] Add also an empty column inside of the table body.
- [ ] Create a `BookListRow` component
  - [ ] Split up the current BookList Component
  - [ ] Move `.table-item__table td`styling to `BookListRow` component.
  - [ ] Add a prop title and implement it into the template.
  - [ ] Add a prop isbn and implement it into the template.
  - [ ] Use the `BookListRow` inside of the `BookList` component.
- [ ] Create a `BaseButton` component
  - [ ] Use the styling from `src/BaseButton/styles.css`
  - [ ] Add a required prop `text` to display a text inside the button.
    - [ ] Implement the prop inside the template.
  - [ ] Add a prop variant
    - [ ] Allows only two values primary + secondary
    - [ ] default value is primary.
    - [ ] Implement the prop inside the template.
      - [ ] button should have class `bg--primary` or `bg--secondary`.
  - [ ] Use the `BaseButton` Component inside of the `BookListRow` component.

## Sample Solution

https://codesandbox.io/s/gallant-merkle-n2mk81

# 4. Task: Use custom events

In this task we will use custom events to modify parent state.

## Solve the following tasks:

- [ ] Add a custom event when the `Add Bookmark` button was clicked.
- [ ] Add `isBookmarked` with a value `true` when the `Add Bookmark` button was clicked.
- [ ] When a book has a `isBookmarked` property that is `true`, display the text remove button.
  - [ ] Otherwise show `Add Bookmark` as button text.
- [ ] Implement that the `isBookmarked` state of each book could be changed between true and false.

## Sample Solution

https://codesandbox.io/s/github/coding-bootcamps-eu/vuejs-tech-bookstore/tree/task/06-use-custom-events

// Original vanilla-js solution:

// const btn = document.querySelector("#lumos");

// btn.addEventListener("click", function () {
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.remove("dark");
//     document.title = "Good Morning";
//   } else {
//     document.body.classList.add("dark");
//     document.title = "Good Night";
//   }
// });

// Solution using Vue:
Vue.createApp({
  data() {
    return {
      text: "Good Morning",
      onClassName: "dark",
    };
  },
  methods: {
    active() {
      this.text === "Good Morning"
        ? (this.text = "Good Night") &&
          document.body.classList.add(this.onClassName)
        : (this.text = "Good Morning") &&
          document.body.classList.remove(this.onClassName);
      document.title = this.text;
    },
  },
}).mount("#app");

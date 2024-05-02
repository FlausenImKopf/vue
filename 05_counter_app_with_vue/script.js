Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    cssCounter() {
      return {
        "--counter": this.count,
      };
    },
  },
}).mount("#app");

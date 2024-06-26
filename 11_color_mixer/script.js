// const r = document.querySelector("#r");
// const g = document.querySelector("#g");
// const b = document.querySelector("#b");
// const btn = document.querySelector("#random-color-btn");

// // let state {};

// function getRandomColor() {
//   const p = fetch("https://dummy-apis.netlify.app/api/color");
//   return p
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       r.value = data.rgb.r;
//       g.value = data.rgb.g;
//       b.value = data.rgb.b;
//     });
// }

// //html changes
// function render() {
//   let allColor = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
//   let rgbaColor =
//     "rgba(" + r.value + ", " + g.value + ", " + b.value + ", 0.3)";
//   document.getElementById("rgb-heading").textContent = allColor;
//   document.querySelector("main").style.background = allColor;
//   document.querySelector("header").style.background = rgbaColor;
// }

// //event listeners
// r.addEventListener("input", function () {
//   render();
// });
// g.addEventListener("input", function () {
//   render();
// });
// b.addEventListener("input", function () {
//   render();
// });
// btn.addEventListener("click", function () {
//   getRandomColor().then(render);
// });

//Solution using Vue:
Vue.createApp({
  data() {
    return {
      red: 58,
      green: 134,
      blue: 255,
    };
  },
  methods: {
    changeColor() {
      let allColor =
        "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
      let rgbaColor =
        "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 0.3)";
      document.getElementById("rgb-heading").textContent = allColor;
      document.querySelector("main").style.background = allColor;
      document.querySelector("header").style.background = rgbaColor;
    },
    getRandomColor() {
      const p = fetch("https://dummy-apis.netlify.app/api/color");
      return p
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.red = data.rgb.r;
          this.green = data.rgb.g;
          this.blue = data.rgb.b;
          let allColor =
            "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
          let rgbaColor =
            "rgba(" +
            this.red +
            ", " +
            this.green +
            ", " +
            this.blue +
            ", 0.3)";
          document.getElementById("rgb-heading").textContent = allColor;
          document.querySelector("main").style.background = allColor;
          document.querySelector("header").style.background = rgbaColor;
        });
    },
  },
}).mount("#app");

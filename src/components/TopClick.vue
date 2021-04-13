<template>
  <div class="container">
    <a href="#" @click="scrollTop" v-show="visible" class="bottom-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width="3em"
        height="3em"
        style="
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        "
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            d="M4 15l8-8l8 8"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "TopClick",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.bottom-right {
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 99;
}
a{
    width:20px;
    height: 20px;
}
svg:hover {
  background-color: red;
  border: 3px solid red;
  opacity: 1;
}
svg {
  position: relative;
  background-color: black;
  border-radius: 100%;
  padding: 10px;
}
</style>

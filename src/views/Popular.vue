<template>
  <div></div>
  <most-popular />
</template>

<script>
// @ is an alias to /src
import MostPopular from "@/components/MostPopular.vue";
export default {
  name: "Home",
  components: {
    MostPopular
  },
};
</script>

<style lang="scss" scoped>
div{
    margin-top: 80px;
}
</style>
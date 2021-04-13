<template>
  <div></div>
  <most-recommend />
</template>

<script>
// @ is an alias to /src

import MostRecommend from "@/components/MostRecommend.vue";
export default {
  name: "Home",
  components: {
    MostRecommend,
 
  },
};
</script>
<style lang="scss" scoped>
div{
    margin-top: 80px;
}
</style>
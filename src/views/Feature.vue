<template>
  <div></div>
  <feature-games />>
</template>

<script>
// @ is an alias to /src

import FeatureGames from "@/components/FeatureGames.vue";

export default {
  name: "Home",
  components: {
    FeatureGames,
 
  },
};
</script>
<style lang="scss" scoped>
div{
    margin-top: 80px;
}
</style>
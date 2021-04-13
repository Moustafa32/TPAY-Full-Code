<template>
  <slider-games />
  <feature-games />
  <most-recommend />
  <most-popular />
</template>

<script>
// @ is an alias to /src
import SliderGames from "@/components/SliderGames.vue";
import FeatureGames from "@/components/FeatureGames.vue";
import MostRecommend from "@/components/MostRecommend.vue";
import MostPopular from "@/components/MostPopular.vue";
export default {
  name: "Home",
  components: {
    SliderGames,
    FeatureGames,
    MostRecommend,
    MostPopular
  },
};
</script>

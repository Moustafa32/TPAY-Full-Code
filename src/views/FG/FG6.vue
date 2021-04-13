<template>
    <section class="container">
        <div class="image">
            <img src="@/images/featured/66.jpg" alt="">
        </div>
        <div class="content">
            <h2 class="title">{{title9}}</h2>
            <span>{{body9}}</span>
        </div>
    </section>
    <most-recommend />
</template>
<script>
import MostRecommend from "@/components/MostRecommend.vue";
import axios from "axios";
export default {
    components: {
    MostRecommend,
    },
  data: () => ({
    title9:null,
    body9:null,
  }),
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/9").then((result) => {
        this.title9=result.data.title;
        this.body9=result.data.body;
    });
  }
};
</script>
<style lang="scss" scoped>
.container{
    margin-top: 100px;
    padding:40px 0;
}

.content{
    margin-top: 15px;
}
h2{
    color:red;
    border-bottom: 2px solid rgb(63, 56, 56);
}
.image { 
  overflow: hidden; 
  margin:10px 0; 
}

.image img {
  transition: transform .5s ease;
  width:100%;   
  border: 3px solid rgb(63, 56, 56);
}

.image:hover img {
  transform: scale(1.5);
}
</style>
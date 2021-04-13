<template>
  <div class="recommend">
    <div class="recommend-bg">
      <div class="container">
        <h1>Most Recommended</h1>
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div class="recommend_box" @click="$router.push('/RG1')">
              <img :src="gameImg1" alt="img" class="imgBrand" />
              <span>{{ title10 }}</span>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div class="recommend_box" @click="$router.push('/RG2')">
              <img :src="gameImg2" alt="img" class="imgBrand" />
              <span>{{ title11 }}</span>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div class="recommend_box" @click="$router.push('/RG3')">
              <img :src="gameImg3" alt="img" class="imgBrand" />
              <span>{{ title12 }}</span>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div class="recommend_box" @click="$router.push('/RG4')" >
              <img :src="gameImg4" alt="img" class="imgBrand" />
              <span>{{ title13 }}</span>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div class="recommend_box" @click="$router.push('/RG5')" >
              <img :src="gameImg5" alt="img" class="imgBrand" />
              <span>{{ title14 }}</span>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div class="recommend_box" @click="$router.push('/RG6')">
              <img :src="gameImg6" alt="img" class="imgBrand" />
              <span>{{ title15 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MostRecommended",
  data: () => ({
    gameImg1: require("../images/recommended/1.png"),
    gameImg2: require("../images/recommended/2.png"),
    gameImg3: require("../images/recommended/3.png"),
    gameImg4: require("../images/recommended/4.png"),
    gameImg5: require("../images/recommended/5.png"),
    gameImg6: require("../images/recommended/6.png"),
    title10:null,
    title11:null,
    title12:null,
    title13:null,
    title14:null,
    title15:null,  
  }),
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/10").then((result) => {
        this.title10=result.data.title;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/11").then((result) => {
        this.title11=result.data.title;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/12").then((result) => {
        this.title12=result.data.title;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/13").then((result) => {
        this.title13=result.data.title;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/14").then((result) => {
        this.title14=result.data.title;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/15").then((result) => {
        this.title15=result.data.title;
    });
  }
};

</script>

<style lang="scss" scoped>
.recommend-bg {
  background-color: #ebebeb;
}
.recommend_box {
  background-color: white;
  margin: 8px;
  padding: 8px;
  position: relative;
  top: 0;
  transition: top ease 0.6s;
}
.recommend_box:hover {
  box-shadow: 5px 10px 8px 3px #888888;
  top: -4px;
  cursor: -webkit-grab; 
  cursor: grab;
}
h1{
    font-weight: 700;
    color: red;   
    text-align: center;
    padding: 30px 0;
    font-size: 36px;
    font-family: "Roboto Condensed", sans-serif; 
    letter-spacing: 0.04em;  
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
}

span {
  color: rgb(28, 64, 226);
  display: block;
  padding-top:10px;
}
.imgBrand {
  margin-top: 30px;
}

.recommend {
  background-color: #ebebeb;
  padding-bottom: 42px;
  padding-top: 25px;
}
@media (max-width:500px){
  h1{
    font-size: 18px;
  }
  span{
    font-size: 10px;
  }
}
</style>
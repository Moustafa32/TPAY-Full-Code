<template>
  <div class="most-content">
    <div class="container-fluid">
        <h1>Most Popular</h1>
      <div class="row">
        <div class="imgSection col-lg-6">
          <img src="../images/slider/1.jpg" alt="" />
        </div>
        <div class="content col-lg-6">
          <h2>{{titleOne}}</h2>
          <p>{{bodyOne}}</p>
          <div class="col-md-12">
             <a href="#" class="full-game" @click="$router.push('/PG1')">Full Game</a>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="imgSection col-lg-6">
          <img src="../images/slider/2.jpg" alt="" />
        </div>
        <div class="content col-lg-6">
          <h2>{{titleTwo}}</h2>
          <p>{{bodyTwo}}</p>
          <div class="col-md-12">
             <a href="#" class="full-game" @click="$router.push('/PG2')">Full Game</a>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="imgSection col-lg-6">
          <img src="../images/slider/3.jpg" alt="" />
        </div>
        <div class="content col-lg-6">
          <h2>{{titleThree}}</h2>
          <p>{{bodyThree}}</p>
          <div class="col-md-12">
             <a href="#" class="full-game" @click="$router.push('/PG3')">Full Game</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: () => ({
    titleOne:null,
    bodyOne:null,
    titleTwo:null,
    bodyTwo:null,
    titleThree:null,
    bodyThree:null,
    
  }),
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((result) => {
        this.titleOne=result.data.title;
        this.bodyOne=result.data.body;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/2").then((result) => {
        this.titleTwo=result.data.title;
        this.bodyTwo=result.data.body;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/3").then((result) => {
        this.titleThree=result.data.title;
        this.bodyThree=result.data.body;
    });
  }
};
</script>

<style lang="scss" scoped>
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
.most-content {
  background-color: black;
  color: white;
  border: 4px black solid;
  padding-bottom: 20px;
}

img {
  width: 100%;
  vertical-align: middle;
  border-style: none;
  height: 90%;
}


.content {
  vertical-align: center;
}
.content h2 {
  
  font-weight: 600;
}
@media (max-width:991px){
    .content{
        margin-top: 20px;
        text-align: center;
    }
}
@media (min-width:992px){
    .content{
        margin-top: 40px;
    }
    
}
.full-game {
  font-family: poppins;
  max-width: 110px;
  margin: 0 auto;
  display: block;
  background: rgb(224, 11, 11);
  color: white;
  padding: 8px 0px;
  width: 100%;
  font-size: 14px;
  text-align: center;
  border-radius: 32px;
  margin-top: 25px;
  text-decoration: none;
}
.full-game:hover {
  background-color: #ff3636;
}
hr{
  background: white;
}
@media (max-width:500px){
  h1{
    font-size: 18px;
  }
  h2{
    font-size: 12px;
  }
  p{
    font-size: 10px;
  }
}
</style>

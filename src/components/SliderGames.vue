<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" >
    <div class="carousel-item  active">
      <img class="d-block w-100" src="../images/slider/1.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
          <h1>{{titleOne}}</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../images/slider/2.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
          <h1>{{titleTwo}}</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../images/slider/3.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
          <h1>{{titleThree}}</h1>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    titleOne:null, 
    titleTwo:null,
    titleThree:null,
   
    
  }),
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((result) => {
        this.titleOne=result.data.title;
       
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/2").then((result) => {
        this.titleTwo=result.data.title;
      
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/3").then((result) => {
        this.titleThree=result.data.title;
      
    });
  }
};
</script>
<style lang="scss" scoped>
h1{
    font-weight: 700;
    color: #ffffff;   
    text-align: center;
    padding: 30px 0;
    font-size: 36px;
    font-family: "Roboto Condensed", sans-serif; 
    letter-spacing: 0.04em;  
    transition: all 0.3s ease 0s;
    -webkit-text-stroke: 2px red;
}
@media (max-width:480px){
  .carousel{
    margin-top:60px;
  }
}
</style>
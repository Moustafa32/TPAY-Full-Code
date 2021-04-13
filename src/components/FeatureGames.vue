<template>
<section class="container">
    <h1>Featured Games</h1>
    <div class="row">
    <div class="card col-lg-4 col-md-6 col-sm-6">
    <div class="image">
      <img src="../images/featured/1.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>{{title4}}</h1>
        <p>{{body4}}.</p>
        <div class="col-md-12">
        <a href="#" class="see-more" @click="$router.push('/FG1')">Full Game</a>
      </div>
      </div>
    </div>
    </div>
    <div class="card col-lg-4 col-md-6 col-sm-6">
    <div class="image">
      <img src="../images/featured/2.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>{{title5}}</h1>
        <p>{{body5}}</p>
        <div class="col-md-12">
        <a href="#" class="see-more" @click="$router.push('/FG2')">Full Game</a>
      </div>
      </div>
    </div>
    </div>
    <div class="card col-lg-4 col-md-6 col-sm-6">
    <div class="image">
      <img src="../images/featured/3.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>{{title6}}</h1>
        <p>{{body6}}</p>
        <div class="col-md-12">
        <a href="#" class="see-more" @click="$router.push('/FG3')">Full Game</a>
      </div>
      </div>
    </div>
    </div>
    <div class="card col-lg-4 col-md-6 col-sm-6">
    <div class="image">
      <img src="../images/featured/4.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>{{title7}}</h1>
        <p>{{body7}}</p>
        <div class="col-md-12">
        <a href="#" class="see-more" @click="$router.push('/FG4')">Full Game</a>
      </div>
      </div>
    </div>
    </div>
    <div class="card col-lg-4 col-md-6 col-sm-6">
    <div class="image">
      <img src="../images/featured/5.jpg">
    </div>
    <div class="details">
      <div class="center">
        <h1>{{title8}}e</h1>
        <p>{{body8}}</p>
        <div class="col-md-12">
        <a href="#" class="see-more" @click="$router.push('/FG5')">Full Game</a>
      </div>
      </div>
    </div>
    </div>
    <div class="card col-lg-4 col-md-6 col-sm-6">
    <div class="image">
      <img src="../images/featured/6.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>{{title9}}</h1>
        <p>{{body9}}</p>
        <div class="col-md-12">
        <a href="#" class="see-more" @click="$router.push('/FG6')">Full Game</a>
      </div>
      </div>
    </div>
    </div>

    </div>
    
 </section>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    title4:null,
    body4:null,
    title5:null,
    body5:null,
    title6:null,
    body6:null,
    title7:null,
    body7:null,
    title8:null,
    body8:null,
    title9:null,
    body9:null,
    
    
  }),
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/4").then((result) => {
        this.title4=result.data.title;
        this.body4=result.data.body;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/5").then((result) => {
        this.title5=result.data.title;
        this.body5=result.data.body;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/6").then((result) => {
        this.title6=result.data.title;
        this.body6=result.data.body;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/7").then((result) => {
        this.title7=result.data.title;
        this.body7=result.data.body;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/8").then((result) => {
        this.title8=result.data.title;
        this.body8=result.data.body;
    });
    axios.get("https://jsonplaceholder.typicode.com/posts/9").then((result) => {
        this.title9=result.data.title;
        this.body9=result.data.body;
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



.card {
    padding: 20px;
    background: #000;
}
.card .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.card .image img {
    width: 100%;
    transition: .5s;
}
.card:hover .image img {
    opacity: .5;
    transform: translateX(30%);/*100%*/
}
.card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;/*100%*/
    height: 100%;
    background: #e91818;
    transition: .5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
    padding: 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.card .details .center h1 {
    margin: 0;
    padding: 0;
    color: #ff3636;
    line-height: 20px;
    font-size: 20px;
    text-transform: uppercase;
}
.card .details .center h1 span {
    font-size: 14px;
    color: #262626;
}
.card .details .center p {
    margin: 10px 0;
    padding: 0;
    color: #262626;
}
.card .details .center ul {
    margin: 10px auto 0;
    padding: 0;
    display: table;
}
.card .details .center ul li {
    list-style: none;
    margin: 0 5px;
    float: left;
}
.card .details .center ul li a {
    display: block;
    background: #262626;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    transform: .5s;
}
.card .details .center ul li a:hover {
    background: #ff3636;
}
.see-more {
  font-family: poppins;
  max-width: 110px;
  margin: 0 auto;
  display: block;
  background: black;
  color: white;
  padding: 8px 0px;
  width: 100%;
  font-size: 14px;
  text-align: center;
  border-radius: 32px;
  margin-top: 25px;
  text-decoration: none;
}
.see-more:hover {
  background-color: #ff3636;
}
@media (max-width:500px){
  h1{
    font-size: 18px;
  }
  p{
    font-size: 10px;
  }
}
</style>

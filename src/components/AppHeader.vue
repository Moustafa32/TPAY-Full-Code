<template >
    <div
      id="wrapper"
      class="wrapper"
      v-bind:class="{
        classA: scrollPosition < 100,
        classB: scrollPosition > 100,
      }"
    >
      <nav class="navbar navbar-expand-lg fixed-top">
        <a class="navbar-brand" @click="$router.push('/')" href="#">
          <img src="../images/logoo.png" alt="image" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1.7em"
              height="1.7em"
              style="
                -ms-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              "
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 50 50"
            >
              <path d="M10 12h30v4H10z" fill="#f43866" />
              <path d="M10 22h30v4H10z" fill="#f43866" />
              <path d="M10 32h30v4H10z" fill="#f43866" /></svg
          ></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"><span @click="$router.push('/')" class="items">Home</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#"><span  class="items">Store</span></a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="$router.push('/Feature')">Featured Games</a>
          <a class="dropdown-item" href="#" @click="$router.push('/Recommend')">Most Recommended</a>
          <a class="dropdown-item" href="#" @click="$router.push('/Popular')">Most Popular</a>
        </div>
            </li>
          </ul>
        </div>
        <div class="search-box">
                    <input type="text" class="search-txt" placeholder="Search">
                    <a class="search-btn">
                        <img src="../images/search_icon.png" alt="#" />
                    </a>
                </div>
      </nav>
    </div>
 
</template>

<script>
export default {
  name: "AppHeader",
  data: function () {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style lang="scss" scoped>
.dropdown:hover>.dropdown-menu {
  display: block;
}

.my-dropdown-toggle::after {
    content: none;
}
.dropdown-item:hover{
  color: red;
}
.classB {
  nav {
    background-color: white;
    transition: all 0.7s ease-in-out;
    transform-origin: left right top;
    transform: scaleY(1);
    box-shadow: 0 1px #dbd9d9;
  }
  .search-txt{
    border:1px solid black;
    border-right:none ;
    
  }
}

.items{
  padding: 15px;
  color: black;
  text-transform: uppercase;

    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.04em;
    padding: 12px 25px;
    transition: all 0.3s ease 0s;
}
.items:hover {
  color: red;
}

svg{
  border: 2px solid red;
}
@media (max-width: 991px) {
  nav,
  .navbar-collapse {
    background-color: white;
  }
  
  .signItem {
  padding: 7px 16px;
  background-color: red;
}
.navbar-brand img{
  width:75%;
}
.classA {
  nav ,ul{
    background-color:rgb(229, 232, 233);
}
}
.search-box{
  position: absolute;
	top: 0;
	right: 70px;
	height: auto;
	padding: 0;
  margin-top: 28px;
}
.search-box:hover .search-txt {
  width: 170px;
  height: 34px;
	padding: 0 10px;
}
.search-btn{
  float: right;
	width: 45px;
	height: 34px;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
  background: black;
}
.search-txt {
	border: none;
	outline: none;
	float: left;
  padding: 0; 
	color: black;
	font-size: 14px;
	line-height: 41px;
	width: 0;
	transition: width 400ms;
	background: #fff;
	padding: 0;
  font-weight: 300;
  position: absolute;	
  right: 44px;
  height: 33px;
}
}
@media (max-width: 1115px) and (min-width: 992px){
  .items,
.signUp {
  padding: 10px;
}
}
@media (min-width: 992px){
  ul{
  position: absolute;
	top: 0;
	right: 70px;
	height: auto;
	padding: 0;
	margin-top: 32px;
}
.search-box {
	position: absolute;
	top: 0;
	right: 20px;
	height: auto;
	padding: 0;
  margin-top: 29px;
}
.search-box:hover .search-txt {
  width: 240px;
  height: 47px;
	padding: 0 10px;
}
.search-btn {
	float: right;
	width: 47px;
	height: 47px;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
  background: black;
  
}
.search-txt {
	border: none;
	outline: none;
	float: left;
  padding: 0; 
	color: black;
	font-size: 14px;
	line-height: 41px;
	width: 0;
	transition: width 400ms;
	background: #fff;
	padding: 0;
  font-weight: 300;
  position: absolute;	
	right: 44px;
}
.dropdown-menu{
 	position: absolute;
  left: -40px;
}
}

@media (max-width:321px){
  .search-box{
    display: none;
  }
  .navbar-brand{
    width: 60%;
  }
  nav{
    height:90px;
  }
}

</style>
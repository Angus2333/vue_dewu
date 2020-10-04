<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-crumb></home-crumb>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-award :list="awardList"></home-award>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeCrumb from "./components/Crumb";
import HomeRecommend from "./components/recommend";
import HomeAward from "./components/Award";
import axios from "axios";
//mock
import Mock from "mockjs";
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeCrumb,
    HomeRecommend,
    HomeAward,
  },
  data(){
    return{
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      awardList:[]
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
          const data = res.data
          this.city= data.city 
          this.swiperList=data.swiperList
          this.iconList=data.iconList
          this.recommendList=data.recommendList
          this.awardList=data.awardList
      }
    }
    // getHomeInfo() {
    //   // axios.get("/static/mock/index.json").then(this.getHomeInfoSucc);
    //   this.$http({
    //     method: "get",
    //     url: "/static/mock/index.json",
    //     dataType: "json",
    //     crossDomain: true,
    //     cache: false,
    //   }).then((res) => {
    //     console.log(res);
    //     res = res.data
    //     if(res.ret && res.data){
    //       const data = res.data
    //       this.city= data.city 
    //       this.swiperList=data.swiperList
    //       this.iconList=data.iconList
    //       this.recommendList=data.recommendList
    //       this.awardList=data.awardList
    //     }  
    //   }),
    //     (reject) => {
    //       console.log("请求失败", reject);
    //     };
    // },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
<style lang="stylus" scoped></style>
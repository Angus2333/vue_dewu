<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :list="swiperList"></detail-banner>
    <div class="content">
      <detail-information ></detail-information>
    </div>
    <detail-purchase></detail-purchase>
  </div>
</template>
// 递归组件，组件的自身，去调用组件的自身
<script>
import DetailHeader from "@/pages/detail/components/Header";
import DetailBanner from "@/pages/detail/components/Banner";
import DetailInformation from "@/pages/detail/components/Information";
import axios from "axios";
import DetailPurchase from '@/pages/detail/components/Purchase'
export default {
  name: "Detail",
  components: {
    DetailHeader,
    DetailBanner,
    DetailInformation,
    DetailPurchase
  },
  data() {
    return {
      swiperList: [],
      sightName:'',
     categoryList:'',
     
    };
  },
  methods: {
    getBannerInfo() {
      axios.get("/static/mock/banner.json").then(this.getBannerInfoSucc);
    },
    getBannerInfoSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
      }
    },
    getDetailInfo() {
      axios.get("/static/mock/detail.json", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res=res.data
      if(res.ret&&res.data){
        const data =res.data
        this.categoryList=data.categoryList
      }
    },
  },
  mounted() {
    this.getBannerInfo();
    this.getDetailInfo()
  },
};
</script>
<style lang="stylus" scoped></style>
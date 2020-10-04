<template>
  <div>
    <div class="banner" >
      <!-- <div class="swiper">
      <img src="https://s1.ax1x.com/2020/10/03/01Gny9.jpg" class="banner-img" />
    </div> -->
    <div class="swiper" @click="handleBannerClick">
      <swiper :options="swiperOptions" v-if="showSwiper" >
        <swiper-slide v-for="item in list" :key="item.id">
          <img :src="item.imgUrl" class="banner-img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
      <div class="title">
        <p class="clothes-title">
          Supreme SS20 Week 13 x The northFace 多口袋冲锋衣，连帽休闲夹克，The
          north face联名,限量发售，男女同款
        </p>
      </div>
      <div class="price">￥5416</div>
      <div class="crumb">
        <span class="iconfont">&#xe64a;正品保障</span>
        <span class="iconfont">&#xe632;逐件查询</span>
        <span class="iconfont">&#xe624;多重鉴别</span>
      </div>
    </div>
    <common-gallary :list="list" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from "@/common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
  },
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
       pagination:'.swiper-pagination',
        loop: true,
      },
      showGallary:false
    };
  },
  methods:{
    handleBannerClick(){
      this.showGallary=true
    },
    handleGallaryClose(){
      this.showGallary=false
    }
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
  },
};
</script>
<style lang="stylus" scoped>
// >>>使样式进行穿透，不受scoped限制
.banner >>>.swiper-pagination-bullet-active {
  background: black;
}


.banner {
  height: 0;
  padding-bottom: 55%;
  margin-bottom:4rem
  margin-top:1rem
  .banner-img {
    box-sizing: border-box;
    padding: 1rem 1rem 0.7rem 1rem;
    width: 100%;
  }

  .swiper-pagination {
    backgroundcolor: black !important;
  }

  .title {
    box-sizing: border-box;
    padding: 0rem 0.5rem 0.5rem 0.5rem;
    font-size: 0.31rem;

    .clothes-title {
      text-align: center;
     
    }
  }

  .price {
    font-size: 0.4rem;
    font-weight: 800;
    text-align: center;
  }

  .crumb {
    width: 100%;
    padding-bottom: 5%;
    line-height: 5%;
    display: flex;
    justify-content: space-around;
    font-weight: 900;
    margin-top: 0.6rem;

    .iconfont {
      font-size: 0.3rem !important;
    }
  }
}
</style>
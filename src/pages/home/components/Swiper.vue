<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: "swiper-pagination",
        loop: true,
        autoplay: 2000
      },
    };
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
.wrapper>>>.swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  margin-top:1rem
  height: 0;
  // 高宽比：48.3% 它的高度会相对于它的宽度撑开48.3%
  padding-bottom: 48.3%;

  .swiper-img {
    width: 100%;
  }
}
</style>
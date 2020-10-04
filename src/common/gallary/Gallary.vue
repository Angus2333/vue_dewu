<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in list" :key="item.id">
          <img :src="item.imgUrl" class="gallary-img" />
        </swiper-slide>
        <div class="swiper-pagination " slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: "CommonGallary",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination:'.swiper-pagination',
        // paginationType:'fraction',
        loop: true,
        //监听该元素或者父级元素发生变化时，自动刷新
        observeParents:true,
        observer:true
      },
    };
  },
  methods:{
      handleGallaryClick(){
         this.$emit('close')
      }
  }
};
</script>
<style lang="stylus" scoped>
// >>>使样式进行穿透，不受scoped限制
.wrapper>>>.swiper-pagination-bullet-active {
  background-color:black;
}
.container {
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  boottom: 0;
  height: 100%;
  background-color: black;

  .wrapper {
    background-color: #fff;
    width: 100%;
    height: 0;
    padding: 0% 0 70% 0;
    margin-top:-20%
    .gallary-img{
       width:100%
    }
    .swiper-pagination{
        bottom:0
    }
  }
}
</style>
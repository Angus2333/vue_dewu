<template>
  <div class="icons">
    <swiper :options='swiperOption'>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img
              :src= "item.imgUrl"
              class="icon-img-content"
            />
            <p class="text">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data() {
    return {
        swiperOption: {
        autoplay: false
      },
    };
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang="stylus">
.icons {
  margin-top: 0.1rem;
  width: 100%;
  // padding-bottom: 50%;
  .icon {
    float: left;
    position: relative;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.25rem;

      .icon-img-content {
        width: 100%;
        display: block;
        margin: 0 auto;
        height: 100%;
      }

      .text {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        margin-bottom: -0.4rem;
        text-align: center;
        font-weight:700
        font-size:0.23rem
      }
    }
  }
}
</style>
     
<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">——热门品牌——</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotBrands" :key="item.id">
            <img :src="item.imgUrl" class="img" />
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">——品牌系列——</div>
      </div>
      <div class="area" v-for="(item, key) in Brands" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-topbottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BetterBscroll from "better-scroll";
import PullUp from "@better-scroll/pull-up";
export default {
  name: "ClassifyList",
  props: {
    Brands: Object,
    hotBrands: Array,
    letter: String,
  },
  
  data() {
    return {};
  },

  mounted() {
    this.scroll = new BetterBscroll(this.$refs.wrapper, {
      movable: true,
      zoom: true,
    });

    console.log(this.scroll);
  },
  //侦听器
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.border-topbottom {
  &before {
    border-color: #ccc;
  }

  &after {
    border-color: #ccc;
  }
}

.list {
  // overflow: hidden;
  position: absolute;
  top: 2rem;
  right: 0;
  left: 0;
  bottom: 0;

  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    font-size: 0.3rem;
    font-weight: 700;
    text-align: center;
  }

  .button-list {
    // 触发BFC
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .img {
        width: 100%;
        padding: 0.6rem;
        box-sizing: border-box;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.3rem;
    }
  }
}
</style>
<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        :to= "'/detail/' + item.id "
      >
        <img :src="item.imgUrl" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
    <div class="more">查看更多></div>
  </div>
</template> 
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array,
  },
  data() {
    return {};
  },
};
</script>
<style lang="stylus" scoped>
.recommend-title {
  line-height: 0.4rem;
  margin-top: 0.5rem;
  text-indent: 0.2rem;
  font-weight: 700;
}

.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  margin: 0.6rem;

  .item-img {
    height: 1.7rem;
    width: 1.7rem;
    padding: 0.2rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      font-size: 0.25rem;
      color: gray;
    }

    .item-button {
      background-color: black;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      color: #fff;
      font-size: 0.22rem;
      margin-left: 2.6rem;
    }
  }
}

.more {
  width: 100%;
  text-align: center;
  font-weight: 700;
}
</style>
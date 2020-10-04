<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入商品品牌名称或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item border-bottom">
          {{ item.name }}
        </li>
        <li class="search-item border-bottom " v-show="hasData">
           没找到匹配数据   
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterBscroll from 'better-scroll'
export default {
  name: "ClassifySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  props: {
    Brands: Object,
  },
  computed:{
      hasData(){
          return !this.list.length
      }
  },
  mounted(){
      this.scroll=new BetterBscroll(this.$refs.search,{
          movable: true,
          zoom: true
      })  
  },
  watch: {
    keyword() {
      if (this.master) {
        clearTimeout(this.timer);
      }
      if(!this.keyword){
          this.list=[]
          return
      }
      //节流
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.Brands) {
          this.Brands[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.search {
  position: relative;
  display:block
  height: 0.72rem;
  padding: 0.1rem;
  background-color: $bgColor;

  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.6rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#eee;
  z-index: 2;
  margin-top: 0.2rem;
  .search-item{
      line-height:0.62rem
      padding-left:0.2rem
      color:#666
      background-color:#fff
  }
}
</style>
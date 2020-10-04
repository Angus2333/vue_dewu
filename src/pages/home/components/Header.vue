<template>
  <div class="header">
    
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
  
    <div class="header-input">
      <span class="iconfont">&#xe632;请输入商品</span>
      <span>
        <img src="../../../assets/styles/dewuImg/comera.png">
      </span>
    </div>
    <!-- 页面跳转 -->
    <router-link to='/Classify'>
    <div class="header-right" >
        <img src="../../../assets/styles/dewuImg/all.png" >
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props:{
    city:String
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.header {
  display: flex;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;
  position:fixed
  top:0
  left:0
  width:100%
  z-index:100
  .header-left {
    width: 0.64rem;
    float: left;
  }

  .header-input {
    display:flex
    justify-content:space-between
    flex: 1;
    line-height: 0.64rem;
    height: 0.64rem;
    background: #fff;
    border-radius: 1rem;
    margin: 0.2rem 0.2rem;
    color: gray;
    padding-left: 0.2rem;
    img{
      width:0.4rem
      padding-right:0.2rem
    }
  }

  .header-right {
    width: 1rem;
    box-sizing:border-box
    padding:0.1rem
    float: right;
    text-align: center;
    margin-right:0.2rem
    img{
       width:100%
    }
  }
}
.header-right{
  color:#fff
}

</style>
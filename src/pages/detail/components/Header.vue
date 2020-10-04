<template>
    <div class="header">
        <router-link to="/"><div class="header-back iconfont"> &#xe624; </div></router-link>
        <div class="detail">详情</div>
        <div class="icon">
            <span><img src="../../../assets/styles/dewuImg/share.png"></span>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailHeader'
}
</script>
<style lang="stylus" scoped>
.header{
    position:fixed
    top:0
    left:0
    width:100%
    z-index:20
    overflow:hidden
    height:0.86rem
    line-height:0.86rem
    text-align:center
    color:#fff
    background-color:black
    font-size:0.3rem
    display:flex
    justify-content:space-between
    .header-back{
        position:absolute 
        top:0
        left:0
        width:0.64rem
        font-size:0.4rem
        color:#fff
    }
    .detail{
        margin-left:1rem
    }
    .icon{
         width:0.64rem
         box-sizing:border-box
         margin-right:0.2rem
         padding:0rem 0.1rem 0 0.1rem
         img{
             width:100%
         }
    }
}
</style>
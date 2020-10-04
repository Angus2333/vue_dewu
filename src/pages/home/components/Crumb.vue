<template>
    <div class="crumb">
        <span class="iconfont">&#xe64a;正品保障</span>
        <span class="iconfont">&#xe632;逐件查询</span>
        <span class="iconfont">&#xe624;多重鉴别</span>
    </div>
</template>

<script>
export default {
    name:"HomeCrumb"
}
</script>
<style lang="stylus" scoped>
.crumb{
    width:100%
    padding-bottom:5%;
    line-height:5%;
    display:flex;
    justify-content:space-around
    font-weight:900
    margin-top:0.6rem
    .iconfont{
        font-size:0.3rem!important;
    }
   
}
</style>
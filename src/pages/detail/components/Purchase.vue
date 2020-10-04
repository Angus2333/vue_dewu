<template>
    <div class="wrapper">
       <div class="collect">
           <img src="../../../assets/styles/dewuImg/collect.png" alt="">
       </div>
       <div class="sell">出售</div>
       <div class="purchase">立即购买</div>
    </div>
</template>
<script>
export default {
    name:'DetailPurchase'
}
</script>
<style lang="stylus" scoped>
   .wrapper{
       display:flex
       .collect{
           width:15%
           box-sizing:border-box
           padding:0.2rem
           img{
               width:100%
           }
       }
       .sell{
           margin-top:0.2rem
           box-sizing:border-box
           border-radius:0.1rem
           width:35%
           border:1px solid black
           font-size:0.35rem  
           line-height:0.8rem
           height:0.8rem
           font-weight:600
           text-align:center
       }
       .purchase{
           background-color:#11DBCA
           color:white
           border-radius:0.1rem
           margin:0.2rem 0.1rem 0 0.1rem
           width:50%
           font-size:0.35rem  
           line-height:0.8rem
           height:0.8rem
           font-weight:600
           text-align:center
       }
   }
</style>
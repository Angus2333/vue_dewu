<template>
    <div >
        <div class="wrapper">特价优惠</div>
        <div>
          <div v-for="item in list" :key="item.id" class="img">
            <img :src="item.imgUrl" class="img">
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeAward",
    props: {
       list:Array
    },
    data(){
        return{
            awardList:[
            {id:'1'},
            {id:'2'},
            {id:'3'}
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper{
    margin:0.5rem 0;
    font-weight:700;
    text-indent:0.2rem;
}
.img{
    width:100%;
    margin-bottom:0.3rem
}
</style>
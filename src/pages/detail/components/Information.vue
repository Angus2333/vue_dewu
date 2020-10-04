<template>
    <div class="wrapper">
      <div class="item" v-for="(item,index) of list" :key="index">
          <div class="item-title">
              <span>{{item.title}}</span>
              <span class="desc">{{item.desc}}</span>
              <span class="icon">{{item.icon}}</span>
          </div> 
      </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'DetailInformation',

    data(){
        return{
            list:[{
                title:"规格",
                desc:"已选择粉色/M",
                icon:">"
            },
            {
                title:"服务",
                desc:"超时赔付+防伪",
                icon:">"
            },{
                title:"运费",
                desc:"首单限时包邮",
                icon:">"
            }]
        }
    },
    methods:{
        
    }

}
</script>
<style lang="stylus" scoped>
.wrapper{
    .item-title{
        line-height:0.8rem
        font-size:0.28rem
        padding:0.1rem 0.7rem
        display:flex
        justify-content:space-between
        .desc{
            margin-left:-2rem
        }
        .icon{
            color:gray
        }
    }
   
}
</style>
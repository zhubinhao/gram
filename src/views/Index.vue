<template>
  <div class="about">
    <base-nav title="大牛试玩">
     <div class="withdraw" @click="withdrawal">提现</div>
    </base-nav>
    <!-- 搜索 -->
    <div class="seach_box" @click="seach">
      <div><i class="iconfont icon-seach"></i>请输入搜索内容</div>
    </div>
    <!-- 广告位 -->
    <div class="img_box">
      <base-img class="img" src="1" @click="toWelfare" />
      <base-img class="img" src="2" />
    </div>

     <!-- 导航栏 -->
    <div class="content">
      <div class="bar_box">
        <div v-for="item in barList" :key="item.id" :class="{active:item.id==barId}" @click="changeBar(item.id)">{{item.name}}</div>
      </div>
      <index-list></index-list>
    </div>

  </div>
</template>
<script>
import IndexList from "@/components/IndexList.vue"
import tableBar from "@/mixins/tableBar.js"

export default {
  mixins:[tableBar],
  components:{
    "index-list": IndexList
  },
  data(){
    return {
    }
  },
  created(){
  },
  methods:{
    // 去搜索页面
    seach(){
      this.$router.push({name:"Seach"})
    },
    // 改变导航栏
    changeBar(id){
      this.barId = id
    },
    // 跳转提现页面
    withdrawal() {
      this.$router.push({name: 'Withdrawal'});
    //去每日福利
    },
    toWelfare(){
      this.$router.push({name:"Welfare"})
    }
  }
  
}
</script>
<style lang="scss" scoped>
.about{
  background: #F1F1F1;
  .seach_box{
    padding: 0.2rem 0.3333rem 0.2667rem 0.3333rem;
    >div{
      background: #ffffff;
      height: 1.04rem;
      border-radius: 0.52rem;
      line-height: 1.04rem;
      padding-left: 0.2667rem;
      color: #A4A4A4;
      font-size: 0.3733rem;
    }
    .icon-seach{
      margin-right: 0.1333rem;
    }
  }
  .withdraw{
    width: 1.5467rem;
    height: 0.7733rem;
    background: #FF8239;
    border-radius: 0.5067rem;
    color: white;
    font-size: 0.3733rem;
    text-align: center;
    line-height: 0.7733rem;
  }
  .img_box{
    padding: 0 0.3333rem 0.2667rem 0.3333rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .img{
      width: 4.5333rem;
      height: 2.96rem;
      border-radius: 0.2667rem;
      overflow: hidden;
    }
  }
  .content{
    border-radius: 0.2667rem  0.2667rem 0 0;
    background: #ffffff;
    padding: 0 0.4rem;
    .bar_box{
      border-bottom: 1px solid #E8E8E8;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      height: 1.0133rem;
      padding-top: 0.1867rem;
      font-size: 0.4267rem;
      line-height: 1.0133rem;
      color: #616161;
      div{
        text-align: center;
        position: relative;
        top: 1px;
        padding: 0 0.4rem;
      }
      .active{
        color:#FD8822 ;
        font-size: 0.4533rem;
        font-weight: 600;
        border-bottom: 2px solid #FD8822;
      }
    }
  }
}
</style>

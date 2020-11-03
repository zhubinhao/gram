<template>
  <div class="BaseNav">
    <i class="iconfont icon-zuo" @click="back"></i>
    <i class="iconfont icon-seach" v-if="seach"/>
    <input type="text" class="seach_input" :value="keyworld" v-if="seach" placeholder="请输入搜索内容" @input="$emit('change',$event.target.value)">
    <img :src="require('@/assets/img/clear.png')" @click="clear" v-if="seach&&keyworld" class="clear">
    <div class="content"  v-if="!seach">{{title||"大牛试玩"}}</div>
    <div class="Base_btn"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'BaseNav',
  model:{
    prop: 'keyworld',
    event: 'change'
  },
  props: {
    title: String,
    seach:{
      type:Boolean,
      default: false
    },
    keyworld:String
  },
  
  methods:{
    // 返回上一页
    back(){
      this.$router.go(-1)
    },
    clear(){
      this.$emit('change','')

    }
  }
}
</script>

<style scoped lang="scss">
.BaseNav{
  position: fixed;
  height: 1.0667rem;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  .icon-zuo{
    font-size: 0.4rem !important;
    padding: 0.1333rem;
    color: #4A4A4A;
    position: absolute;
    left: 0.2667rem;
  }
  .content{
    font-size: 0.48rem;
    color: #4A4A4A;
    width: 6rem;
    margin-left: 2rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon-seach{
    position: absolute;
    left: 1.3333rem;
    color: #A4A4A4;
  }
  .clear{
    position: absolute;
    right: 1.68rem;
    width: 0.56rem;
    height: 0.56rem;


  }
  .seach_input{
    width: 7.6rem;
    height: 0.8rem;
    margin-left: 0.9867rem;
    background: #F3F3F3;
    border-radius: 0.4533rem;
    padding: 0 0.4rem 0 0.96rem;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 0.3733rem;
  }
  .Base_btn{
    position: absolute;
    right: 0.3333rem;
  }
}

</style>

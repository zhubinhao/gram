<template>
  <van-image lazy-load :src="src" :error-icon="loading" class="BaseImg" :loading-icon="loading" :fit="fit"/>
</template>

<script>
export default {
  name: 'BaseImg',
  props: {
    src:String,
    loading:{
        type:String,
        default: require("@/assets/img/advertising.png")
    },//加载中或者加载错误的图片
    fit:{
        type:String,
        default: "cover"
    },//填充模式
  },
 
}
</script>

<style scoped lang="scss">
/deep/ .van-icon__image{
    width: 100%;
    height: 100%;
}


</style>

<template>
  <div class="NoResult">
    <base-img :src="imgSrc" class="img"></base-img>
    <p>没有搜索到相关内容，我们将为你</p>
    <p>推荐更好的游戏～</p>
  </div>
</template>

<script>
export default {
  name: "NoResult",
  props: {},
  data() {
    return {
      imgSrc: require("@/assets/img/NoResult.png")
    };
  }
};
</script>

<style scoped lang="scss">
.NoResult {
  .img {
    width: 4.4rem;
    height: 2.6667rem;
    display: block;
    margin: 0.8267rem auto 0.4667rem auto;
  }
  p {
      font-size: 0.32rem;
      font-weight: 500;
      color: #9c9c9c;
      line-height: 0.44rem;
      text-align: center
    }
}
</style>

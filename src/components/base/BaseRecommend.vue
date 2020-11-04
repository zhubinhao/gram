<template>
  <div class="BaseRecommend">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseRecommend",
  props: {
    title: String
  },
};
</script>

<style scoped lang="scss">
.BaseRecommend {
  border-radius: 0.2667rem 0.2667rem 0 0;
  background: #ffffff;
  padding: 0.4rem 0 0 0;
  .title {
    font-size: 0.4267rem;
    font-weight: bold;
    color: #4a4a4a;
    line-height: 0.6rem;
    position: relative;
    padding-left: 0.2667rem;
    margin-bottom: 0.2667rem;
    margin-left: 0.4rem;
    &::after {
      content: "";
      width: 0.08rem;
      height: 0.4rem;
      background: #ff8239;
      border-radius: 0.0667rem;
      position: absolute;
      left: 0;
      top: 0.0933rem;
    }
  }
}
</style>

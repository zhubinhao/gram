<template>
  <div class="Welfare">
    <base-nav title="每日福利"></base-nav>
    <!-- 头部三张图片 -->
    <div class="header">
      <div class="img_box">
        <base-img src="1" class="img" :loading="require('@/assets/img/welfare.png')" />
        <div class="btn1" @click="receive">领奖</div>
      </div>
      <div class="img_box">
        <base-img src="1" class="img" :loading="require('@/assets/img/welfare.png')" />
        <div class="btn2">已过期</div>
      </div>
      <div class="img_box">
        <base-img src="1" class="img" :loading="require('@/assets/img/welfare.png')" />
        <div class="btn2">未领取</div>
      </div>
    </div>

    <!-- 中间一张图片 -->
    <base-img src="1" class="banner" :loading="require('@/assets/img/welfare1.png')" />

    <!-- 每日任务列表 -->
    <base-recommend title="每日任务">
      <div v-for="item in taskList" :key="item.id" class="list_box">
        <welfare-list  :inner="item"></welfare-list>
      </div>
    </base-recommend>

    <!-- 弹窗 -->
    <welfare-alert ref="WelfareAlert"></welfare-alert>
  </div>
</template>
<script>
import WelfareList from "@/components/WelfareList.vue";
import WelfareAlert from "@/components/WelfareAlert.vue";

export default {
  components: {
    "welfare-list": WelfareList,
    "welfare-alert": WelfareAlert
  },
  data() {
    return {
      taskList: [
        {
          id: 1,
          title: "玩5款游戏领奖",
          imgSrc: "1",
          status: "1", //0未完成 1已完成 2已领取
          progress: "100" //进度
        },
        {
          id: 2,
          title: "玩5款游戏领奖",
          imgSrc: "1",
          status: "2",
          progress: "100"
        },
        {
          id: 3,
          title: "玩5款游戏领奖",
          imgSrc: "1",
          status: "0",
          progress: "60"
        }
      ]
    };
  },
  created() {},
  methods: {
    // 领奖
    receive() {
      this.$refs.WelfareAlert.open({});
    }
  }
};
</script>
<style lang="scss" scoped>
.Welfare {
  background: #f1f1f1;
  padding-top: 0.2667rem;
  .header {
    height: 4.6rem;
    border-radius: 0.2667rem;
    background: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 0.3333rem;
    .img_box {
      position: relative;
      height: 4.0667rem;
    }
    .img {
      width: 2.9733rem;
      height: 4.0667rem;
      margin-right: 0.2rem;
      border-radius: 0.2667rem;
    }
    .btn1,
    .btn2 {
      position: absolute;
      bottom: 0.1333rem;
      width: 1.8667rem;
      height: 0.8rem;
      left: 0.5333rem;
      z-index: 1;
      font-size: 0.3733rem;
      font-weight: 600;
      line-height: 0.8rem;
      text-align: center;
      border-radius: 0.4rem;
    }
    .btn1 {
      background: #ff8239;
      color: #ffeb77;
    }
    .btn2 {
      background: #c8c8c8;
      color: #ffffff;
    }
  }
  .banner {
    display: block;
    width: 9.3333rem;
    height: 2.4rem;
    margin: 0.2667rem 0.3333rem;
    border-radius: 0.2667rem;
  }
  .list_box{
      margin: 0 .4rem;
  }
 
}
</style>

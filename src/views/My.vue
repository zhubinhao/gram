<template>
  <div class="about">
    <base-nav title="大牛试玩">
      <div class="withdraw">提现</div>
    </base-nav>
    <div class="interval"></div>
    <!-- 导航栏 -->
    <div class="content">
      <div class="bar_box">
        <div
          v-for="item in barList"
          :key="item.id"
          :class="{active:item.id==barId}"
          @click="changeBar(item.id)"
        >{{item.name}}</div>
      </div>
      <play-list></play-list>
    </div>
    <div class="interval_box">
      <div class="left"></div>

      <div class="msg" v-html="msg"></div>
      <div class="right"></div>
    </div>
    <!-- 猜你喜欢 -->
    <base-recommend title="猜你喜欢">
      <div class="advertising_box">
        <div class="advertising">
          <base-img src class="img" :loading="loadingImg" />
          <span class="titles">口袋电玩捕</span>
          <span class="massage">人均赚50元</span>
        </div>
        <div class="advertising">
          <base-img src class="img" :loading="loadingImg" />
          <span class="titles">口袋电玩捕</span>
          <span class="massage">人均赚50元</span>
        </div>
        <div class="advertising">
          <base-img src class="img" :loading="loadingImg" />
          <span class="titles">口袋电玩捕</span>
          <span class="massage">人均赚50元</span>
        </div>

        <div class="advertising noAfter">
          <base-img src class="img" :loading="loadingImg" />
          <span class="titles">口袋电玩捕</span>
          <span class="massage">人均赚50元</span>
        </div>
      </div>
    </base-recommend>
  </div>
</template>
<script>
import PlayList from "@/components/PlayList.vue";
import tableBar from "@/mixins/tableBar.js";
export default {
  mixins: [tableBar],
  components: {
    "play-list": PlayList
  },
  data() {
    return {
      msg: "以上是你正在参与的任务<br>已结束的任务将不再显示",
      loadingImg: require("@/assets/img/listerr.png")
    };
  },
  created() {},
  methods: {
    // 去搜索页面
    seach() {
      this.$router.push({ name: "Seach" });
    },

    //去每日福利
    toWelfare() {
      this.$router.push({ name: "Welfare" });
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  background: #f1f1f1;
  .interval {
    height: 0.2667rem;
  }
  .content {
    border-radius: 0.2667rem 0.2667rem 0 0;
    background: #ffffff;
    padding: 0 0.4rem;
    .bar_box {
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      height: 1.0133rem;
      padding-top: 0.1867rem;
      font-size: 0.4267rem;
      line-height: 1.0133rem;
      color: #616161;
      div {
        text-align: center;
        position: relative;
        top: 1px;
        padding: 0 0.4rem;
      }
      .active {
        color: #fd8822;
        font-size: 0.4533rem;
        font-weight: 600;
        border-bottom: 2px solid #fd8822;
      }
    }
  }
  .interval_box {
    padding: 0.6933rem 0.4rem 0.4rem 0.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left,
    .right {
      flex: 1;
      height: 1px;
      background: #c8c8c8;
    }
    .msg {
      width: 3.6rem;
      font-size: 0.2933rem;
      color: #a4a4a4;
      position: relative;
      margin: 0 0.4rem;
    }
  }
  .advertising_box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: 0.2rem;
    .noAfter {
      &::after {
        background: #ffffff !important;
      }
    }
    .advertising {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 2.4133rem;
      position: relative;
      padding-left: 0.1333rem;
      box-sizing: border-box;
      margin-bottom: 0.2667rem;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        height: 2.6667rem;
        background: #d8d8d8;
        top: 0.2667rem;
      }
      .img {
        width: 2.1333rem;
        height: 2.1333rem;
        border-radius: 0.2667rem;
        overflow: hidden;
      }
      .titles {
        font-size: 0.3733rem;
        font-weight: bold;
        color: #4a4a4a;
        line-height: 0.5333rem;
        margin-bottom: 0.04rem;
        margin-top: 0.1333rem;
      }
      .massage {
        font-size: 0.32rem;
        font-weight: bold;
        color: #ff8239;
        line-height: 0.4rem;
      }
    }
  }
}
</style>

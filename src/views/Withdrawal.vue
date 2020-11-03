<template>
  <div class="withdrawal">
    <base-nav title="提现"></base-nav>
    <div class="container">
      <div class="current_amount">
        <div class="current_amount_text">当前金币：（1000金币=1元）</div>
        <div class="current_amount_c">
          <div class="amount_title">905,272</div>
          <div class="amount_sub_text">提现记录 》</div>
        </div>
      </div>
      <div class="module way">
        <div class="module_title_c">
          <div class="module_title_dot"></div>
          <div class="module_title">提现方式</div>
        </div>
        <div class="module_content">
          <div class="wx_way"><img :src="require('@/assets/img/withdrawal_checked.png')" class="withdrawal_checked"></div>
        </div>
      </div>
      <div class="module amount">
        <div class="module_title_c">
          <div class="module_title_dot"></div>
          <div class="module_title">提现金额</div>
        </div>
        <div class="module_content">
          <div class="amount_list">
            <div class="amount_item amount_item_checked">0.3元</div>
            <div class="amount_item">10元</div>
            <div class="amount_item">30元</div>
            <div class="amount_item">100元</div>
            <div class="amount_item">200元</div>
          </div>
        </div>
      </div>
      <div class="submit_btn">立即提现</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.withdrawal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  .container {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background-color: #ffffff;
    border-radius: 0.2667rem 0.2667rem 0.1333rem 0.1333rem;
    padding: 0 0.3333rem;
    box-sizing: border-box;
    margin-top: 0.2667rem;
    .current_amount {
      width: 100%;
      background: url("~@/assets/img/withdrawal_bg.png") no-repeat;
      background-size: 100% 100%;
      padding: 0 0.4667rem;
      box-sizing: border-box;
      height: 2.8267rem;
      margin-top: 0.2667rem;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .current_amount_text {
        font-size: 0.3733rem;
      }
      .current_amount_c {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        margin-top: 0.4rem;
        margin-bottom: 0.2rem;
        .amount_title {
          font-size: 0.7467rem;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #ffffff;
          line-height: 0.88rem;
        }
        .amount_sub_text {
          font-size: 0.3467rem;
        }
      }
    }
    .module {
      margin-top: 0.4667rem;
      .module_title_c {
        display: flex;
        flex-direction: row;
        align-items: center;
        .module_title_dot {
          width: 0.0667rem;
          height: 0.4rem;
          background: #ff8239;
          border-radius: 0.0533rem;
        }
        .module_title {
          font-size: 0.4267rem;
          font-weight: bold;
          color: #4a4a4a;
          margin-left: 0.2rem;
        }
      }
      .module_content{
        margin-top: 0.4rem;
        .wx_way{
          width: 3.08rem;
          height: 1.6rem;
          background: url("~@/assets/img/withdrawal_wx.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 0.3333rem;
          position: relative;
          .withdrawal_checked{
            width: 0.28rem;
            height: 0.28rem;
            position: absolute;
            right: 0.1333rem;
            top: 0.1333rem;
          }
        }
      }
    }
    .amount{
      .amount_list{
        .amount_item{
          width: 2.7rem;
          height: 1.6667rem;
          background-color:#F1F1F1;
          border-radius: 0.2667rem;
          text-align: center;
          line-height: 1.6667rem;
          color: #4A4A4A;
          font-size: 0.5333rem;
          display: inline-block;
          margin-left: 0.3333rem;
          margin-bottom: 0.3333rem;
        }
        .amount_item_checked{
          background-color: #FF8239;
          color: #ffffff;
        }
      }
    }
    .submit_btn{
      width: 100%;
      height: 1.04rem;
      color: #ffffff;
      font-size: 0.4267rem;
      background-color: #FF8239;
      border-radius: 0.52rem;
      text-align: center;
      line-height: 1.04rem;
      margin-top: 2.6667rem;
    }
  }
}
</style>
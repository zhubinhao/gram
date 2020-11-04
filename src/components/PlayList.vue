<template>
    <div class="PlayList">
        <base-img class="img" :loading="loadingImg" />
        <div class="main">
            <div class="title">口袋电玩捕鱼</div>
            <div class="info">玩游戏领红包</div>
            <div class="play">你已累计赚取<span>999.00</span>元</div>
        </div>
        <div class="right">
            <span>+0.60元</span>
            <div class="btn">继续赚</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayList',
    props: {
        msg: String
    },
    data() {
        return {
            loadingImg: require("@/assets/img/listerr.png")
        }
    }
}
</script>

<style scoped lang="scss">
.PlayList {
    height: 2.6533rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    .img {
        width: 2rem;
        height: 2rem;
        border-radius: 0.2667rem;
        overflow: hidden;
    }
    .main {
        height: 2rem;
        flex: 1;
        margin-left: 0.2rem;
        margin-right: 0.4rem;
        .title {
            margin-top: 0.0533rem;
            font-size: 0.4267rem;
            font-weight: bold;
            color: #4a4a4a;
            line-height: 0.6rem;
        }
        .info {
            font-size: 0.32rem;
            font-weight: 500;
            color: #a4a4a4;
            line-height: 0.44rem;
            margin: 0.1067rem 0 0.2rem 0;
        }
        .play {
            font-size: 0.32rem;
            font-weight: 500;
            color: #a4a4a4;
            line-height: 0.44rem;
            span {
                color: #fd8822;
            }
        }
    }
    .right {
        span {
            display: inline-block;
            width: 2.3733rem;
            text-align: center;
            font-size: 0.4533rem;
            font-weight: 500;
            color: #ff8239;
            line-height: 0.5467rem;
            margin-bottom: 0.2267rem;
        }
        .btn {
            width: 2.3733rem;
            height: 0.9067rem;
            border:1px solid #ff8239;
            border-radius: 0.52rem;
            font-size: 0.3733rem;
            font-weight: 500;
            color: #ff8239;
            line-height: 0.9067rem;
            text-align: center;
            box-sizing: border-box;
        }
    }
}
</style>

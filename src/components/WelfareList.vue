<template>
    <div class="WelfareList">
        <base-img class="img" :loading="loadingImg" :src="inner.imgSrc" />
        <div class="main">
            <div class="info">{{inner.title}}</div>
            <div class="progress">
                <div :style="{width:inner.progress+'%'}"></div>
                <span>{{inner.progress}}%</span>
            </div>
        </div>
        <div class="btn btn1" v-if="inner.status==='0'">未完成</div>
        <div class="btn" v-if="inner.status==='1'">已完成</div>
        <div class="btn btn2" v-if="inner.status==='2'">已领取</div>
    </div>
</template>

<script>
export default {
    name: 'WelfareList',
    props: {
        inner:{
            type:Object,
            default:function(){
                return {
                    title:"玩5款游戏领奖",
                    imgSrc:"1",
                    status:"1",//0未完成 1已完成 2已领取
                    progress:"60",//进度
                }
            }
        }
    },
    data() {
        return {
            width: "60",
            loadingImg: require("@/assets/img/WelfareList.png")
        }
    }
}
</script>

<style scoped lang="scss">
.WelfareList {
    height: 1.76rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    .img {
        width: 1.1333rem;
        height: 1.3467rem;
        margin-left: 0.3467rem;
    }
    .main {
        flex: 1;
        margin-left: 0.2rem;
        margin-right: 0.4rem;
        .progress {
            width: 2.6667rem;
            height: 0.4rem;
            background: #c8c8c8;
            border-radius: 0.2rem;
            position: relative;
            div {
                position: absolute;
                z-index: 1;
                left: 0;
                top: 0;
                bottom: 0;
                background: #ff8239;
                border-radius: 0.2rem;
            }
            span {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                z-index: 2;
                text-align: center;
                line-height: 0.46rem;
                font-size: 0.2667rem;
                font-weight: bold;
                color: #ffffff;
            }
        }
        .info {
            font-size: 0.32rem;
            font-weight: 500;
            color: #a4a4a4;
            line-height: 0.44rem;
            margin: 0.1067rem 0 0.2rem 0;
        }
    }

    .btn {
        width: 2.1067rem;
        height: 0.9067rem;
        background: #ff8239;
        border-radius: 0.52rem;
        font-size: 0.3733rem;
        font-weight: 500;
        color: #ffffff;
        line-height: 0.9067rem;
        text-align: center;
    }
    .btn1 {
        background: #c8c8c8;
    }
    .btn2 {
        background: transparent;
        color: #ff8239;
    }
}
</style>

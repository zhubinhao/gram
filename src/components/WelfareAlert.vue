<template>
    <div class="WelfareAlert" v-if="show">
        <div class="content">
            <div class="title">恭喜你!</div>
            <div class="msg">{{cntent}}</div>
            <base-img class="img" :src="imgSrc"  />
            <div class="btn">继续赚钱</div>
        </div>
        <img src="~@/assets/img/close1.png" class="close" @click="close" />
    </div>
</template>

<script>
export default {
    name: 'WelfareAlert',
    props: {
    },
    data() {
        return {
            bgImg: require("@/assets/img/welfareAlert.png"),
            show:false,
            imgSrc:"",
            cntent:"获得¥100现金红包"

        }
    },
    methods:{
        open(e={}){
            this.imgSrc = e.imgSrc
            this.cntent = e.cntent
            this.show = true
        },
        close(){
            this.show = false
        }

    },
}
</script>

<style scoped lang="scss">
.WelfareAlert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .content{
        width: 6.8533rem;
        height: 8.4533rem;
        background: url("~@/assets/img/welfareAlert.png");
        background-size: 100%,100%;
        background-position: center;
        .title{
            text-align: center;
            font-size: 0.6933rem;
            font-weight: bold;
            color: #F83019;
            line-height: 0.9733rem;
            margin-top: 1.0533rem; 
            margin-bottom: 0.2933rem;
        }
        .msg{
            text-align: center;
            font-size: 0.3733rem;
            font-weight: bold;
            color: #F83019;
            line-height: 0.5333rem;
        }
        .img{
            width: 4.8267rem;
            height: 2.72rem;
            margin-top: 1.4rem;
            margin-left: 0.88rem;
            overflow: hidden;
            border-radius: 0.2667rem;
        }
        .btn{
            width: 3.4667rem;
            height: 0.8533rem;
            text-align: center;
            border-radius: 0.4267rem;
            line-height: 0.8533rem;
            background: #FF8239;
            color: #FFEB77;
            font-size: 0.4267rem;
            margin: 0.2rem auto;
        }
    }
    .close{
        width: 1rem;
        height: 1rem;
        margin-top: 0.1733rem;
    }
}
</style>

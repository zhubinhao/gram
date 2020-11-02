<template>
    <div class="SeachHistory">
        <div class="title">搜索历史<base-img :src="require('@/assets/img/delete.png')" class="delete" @click="clearHistory"/></div>
        <div class=content> 
            <span @click="seach('夺宝奇兵')">夺宝奇兵</span>
            <span @click="seach('夺宝奇兵2')">夺宝奇兵2</span>
            <span @click="seach('夺宝奇兵3')">夺宝奇兵3</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeachHistory',
    props: {
    },
    data() {
        return {
        }
    },
    methods:{
        // 清除历史记录
        clearHistory(){

        },
        // 搜索
        seach(value){
            this.$emit("seach",{value})
        }
    }
}
</script>

<style scoped lang="scss">
.SeachHistory {
    padding-top: 0.6rem;
    padding: 0.6rem 0 0 0.4rem;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.4267rem;
        font-weight: bold;
        color: #4a4a4a;
        line-height: 0.6rem;
        margin-bottom: 0.2667rem;
        .delete{
            width: 0.4267rem;
            height: 0.44rem;
            margin-right: 0.4rem;
        }
    }
    .content{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        span{
            height: 0.9067rem;
            border-radius: 0.2667rem;
            background: #F3F3F3;
            color: #A4A4A4;
            text-align: center;
            line-height: 0.9067rem;
            margin-right: 0.5333rem;
            padding: 0 0.4rem;
            margin-bottom: 0.2667rem;

        }
    }
}
</style>

<template>
    <div class="Seach">
        <base-nav title="大牛试玩" :seach="true" v-model="keyworld">
            <div class="seach_btn">搜索</div>
        </base-nav>
        <div class="main">
            <!-- 搜索历史 -->
            <seach-history @seach="seach"></seach-history>
        </div>
        <div class="recommend">
            <div class="title">推荐给你</div>
            <index-list></index-list>
        </div>
    </div>
</template>
<script>
import IndexList from "@/components/IndexList.vue"
import SeachHistory from "@/components/SeachHistory.vue"

export default {
    components: {
        "index-list": IndexList,
        "seach-history": SeachHistory
    },
    data() {
        return {
            keyworld:"1",
        }
    },
    created() {
    },
    methods: {
        seach(e){
            const { value } = e
            console.log(value)
        }
    }

}
</script>
<style lang="scss" scoped>
.Seach {
    background: #f1f1f1;
    .seach_btn {
        font-size: 0.3733rem;
        font-weight: 500;
         color: #A4A4A4;
         padding: 0.1333rem 0;
    }
    .main {
        background: #ffffff;
        min-height: 5.5467rem;
        margin-bottom: 0.2667rem;
        border-radius: 0 0 0.2667rem 0.2667rem;
    }
    .recommend {
        border-radius: 0.2667rem 0.2667rem 0 0;
        background: #ffffff;
        padding: 0.1867rem 0.4rem 0 0.4rem;
        .title {
            font-size: 0.4267rem;
            font-weight: bold;
            color: #4a4a4a;
            line-height: 0.6rem;
            position: relative;
            padding-left: 0.2667rem;
            &::after{
                content: "";
                width: 0.08rem;
                height: 0.4rem;
                background: #FF8239;
                border-radius: 0.0667rem;
                position: absolute;
                left: 0;
                top: 0.0933rem;
            }
        }
    }
}
</style>

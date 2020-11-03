<template>
  <div class="Seach">
    <base-nav title="大牛试玩" :seach="true" v-model="keyworld">
      <div class="seach_btn" @click="seach">搜索</div>
    </base-nav>
    <div class="main">
      <!-- 搜索历史 -->
      <seach-history @seach="setKeyworld" v-if="!keyworld"></seach-history>
      <!-- 搜索无数据 -->
      <no-result v-if="keyworld&&seachData.length===0"></no-result>
      <!-- 有数据 -->
      <div v-if="keyworld&&seachData.length!==0" class="seach_list">
        <index-list></index-list>
      </div>
    </div>
    <base-recommend title="推荐给你">
      <div class="list_box">
        <index-list></index-list>

      </div>
    </base-recommend>
  </div>
</template>
<script>
import IndexList from "@/components/IndexList.vue";
import SeachHistory from "@/components/SeachHistory.vue";
import NoResult from "@/components/NoResult.vue";

export default {
  components: {
    "index-list": IndexList,
    "seach-history": SeachHistory,
    "no-result": NoResult
  },
  data() {
    return {
      keyworld: "",
      seachData: []
    };
  },
  created() {},
  methods: {
    setKeyworld(e) {
      const { value } = e;
      this.keyworld = value;
      this.seach();
    },
    seach() {
      if (!this.keyworld) {
        this.$dialog.alert({
          message: "请输入搜索词"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.Seach {
  background: #f1f1f1;
  .seach_btn {
    font-size: 0.3733rem;
    font-weight: 500;
    color: #a4a4a4;
    padding: 0.1333rem 0;
  }
  .main {
    background: #ffffff;
    min-height: 5.3467rem;
    margin-bottom: 0.2667rem;
    border-radius: 0 0 0.2667rem 0.2667rem;
    .seach_list {
      padding: 0 0.4rem;
    }
  }
  .list_box{
    margin: 0 .4rem
  }
}
</style>

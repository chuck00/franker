<template>
  <div>首页</div>
</template>
<script>
import { useStore } from "vuex";
import './a.scss'

export default {
  setup() {
    const store = useStore();
    console.log(store.state.demo);
    store.commit("demo", { payload: "小文" });
    console.log(store.state.demo);
  },
};
</script>
<style lang="scss" scoped>
div {
  font-size: 10px;
  display: flex;
  height: 80px;
}
</style>

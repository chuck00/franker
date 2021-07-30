<template>
  <div id="app">
    <router-view  v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
    <van-tabbar route>
        <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item replace to="/category" icon="cart">菜单</van-tabbar-item>
        <van-tabbar-item replace to="/order" icon="bill">订单</van-tabbar-item>
        <van-tabbar-item replace to="/about" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
  export default {
    setup() {
      const router = useRouter()
      const state = reactive({
        transitionName: 'slide-left'
      })
      router.beforeEach((to, from) => {
        if (to.meta.index > from.meta.index) {
          state.transitionName = 'slide-left' // 向左滑动
        } else if (to.meta.index < from.meta.index) {
          // 由次级到主级
          state.transitionName = 'slide-right'
        } else {
          state.transitionName = ''   // 同级无过渡效果
        }
      })

      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style lang="scss" src="./assets/scss/reset.scss"></style>
<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;

}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    height: 100%;
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}
</style>

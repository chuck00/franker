<template>
    <van-nav-bar title="首页" safe-area-inset-top />
    <HelloWorld msg="Hello Vite" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '../../components/HelloWorld.vue';

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld
    },
    setup: () => {
        const active = ref(0);
        return { active };
    }
});
</script>
<style lang="scss"></style>

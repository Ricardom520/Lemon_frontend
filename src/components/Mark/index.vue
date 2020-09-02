<template>
    <div class="mask" @click="close"></div>
</template>

<script>
export default {
    name: 'wk-mask',
    props: {
        close: {
            type: Function,
            default: () => {}
        }
    },
}
</script>


<style lang="less" scoped>
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
}
</style>

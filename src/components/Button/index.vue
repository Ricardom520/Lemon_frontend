<template>
    <button class="wk-button" @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'wk-button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        onClick: {
            type: Function,
            default: () => {}
        }
    },
    mounted() {
        console.log(this)
    }
}
</script>

<style lang="less" scoped>
.wk-button {
    display: inline-block;
    outline: none;
    box-sizing: border-box;
    color: #606266;
    border: 1px solid #dcdfe6;
    border-radius: 2rem;
    padding: .7rem 1.4rem;
    background: #fff;
}
</style>
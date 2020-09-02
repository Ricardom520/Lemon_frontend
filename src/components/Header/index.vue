<template>
    <div class="header">
      <img src="@/assets/images/common/self.jpg" class="self_img"/>
      <span class="title">{{title}}</span>
      <span class="tools_btn">+</span>
    </div>
</template>

<script>
export default {
    name: 'wk-header',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    top: 0;
    color: #fff;
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    background: linear-gradient(to right, #01D9FE, #00A8FC);
.self_img {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    border: 1px solid #efefef;
}
.tools_btn {
    font-size: 2rem;
}
}
</style>


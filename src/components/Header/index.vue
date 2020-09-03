<template>
    <div class="header" :class="[align === 'center' && 'center',
                                 align === 'between' && 'between']">
        <i class="iconfont wk-icon-arrow-left wk-back" v-if="back"></i>
      <img src="@/assets/images/common/self.jpg" class="self_img" v-if="self"/>
      <span class="title">{{title}}</span>
      <span class="tools_btn" v-if="setting">+</span>
    </div>
</template>

<script>
export default {
    name: 'wk-header',
    props: {
        title: {
            type: String,
            default: ''
        },
        self: {
            type: Boolean,
            default: false
        },
        setting: {
            type: Boolean,
            default: false
        },
        align: {
            type: String,
            default: ''
        },
        back: {
            type: Boolean,
            default: false
        }
    },
    created() {
        console.log(this)
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
    .wk-back {
        position: absolute;
        left: 1rem;
    }
    .tools_btn {
        font-size: 2rem;
    }
}
.header.center {
    justify-content: center;
}
</style>


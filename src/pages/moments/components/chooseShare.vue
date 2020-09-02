<template>
    <div class="chooseShare" v-if="show">
        <wk-mask :close="close"></wk-mask>
        <div class="box" :class="[show ? 'active' : '']">
            <p>文本分享</p>
            <p><label for="file" class="file_label">图文分享</label><input type="file" id="file" class="file_input"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chooseShare',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        close: {
            type: Function,
            default: () => {}
        }
    }
}
</script>

<style lang="less" scoped>
.chooseShare {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .box {
        position: absolute;
        z-index: 100;
        width: 100%;
        bottom: 0rem;
        background-color: #fff;
        animation: show linear .3s;
        p {
            text-align: center;
            padding: 1rem 0;
            border-bottom: 1px solid #F0F0F0;
            .file_input {
                display: none;
            }
        }
        p:last-child {
            padding: 0;
            border-bottom: none;
            .file_label {
                display: block;
                width: 100%;
                height: 100%;
                padding: 1rem 0;
            }
        }
    }
    .box.active {
        bottom: 0;
    }
}
@keyframes show {
    from {
        bottom: -10rem;
    }
    to {
        bottom: 0;
    }
}
</style>

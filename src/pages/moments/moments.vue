<template>
    <div class="momentsContainer">
        <div class="header">
            <img src="../../assets/images/common/moments_bg.jpg" class="bg">
            <h4 class="selfName">Ricardom</h4>
            <img src="../../assets/images/common/self.jpg" class="self">
            <i class="iconfont wk-icon-arrow-left goback" @click="goBack"></i>
            <i class="iconfont wk-icon-camera moment_camera" @click="showShare"></i>
        </div>
        <div class="bodyer">
            <LineItem />
        </div>
        <choose-share :show="ChooseShare" :close="closeShare"/>
    </div>
</template>

<script>
import LineItem from './components/line.vue';
import ChooseShare from './components/chooseShare.vue';

export default {
    name: 'moments',
    data() {
        return {
            ChooseShare: false
        }
    },
    components: {
        LineItem,
        ChooseShare
    },
    methods: {
        showShare() {
            this.ChooseShare = true
        },
        closeShare() {
            this.ChooseShare = false
        },
        goBack() {
            this.$router.back(-1)
        }
    }
}
</script>


<style lang="less" scoped>
.momentsContainer {
    .header {
        position: relative;
        width: 100%;
        height: 15rem;
        .bg {
            width: 100%;
            height: 100%;
        }
        .selfName {
            position: absolute;
            bottom: .5rem;
            right: 6.5rem;
            color: #fff;
            font-size: 1rem;
        }
        .self {
            position: absolute;
            right: 1rem;
            bottom: -1.5rem;
            width: 5rem;
            height: 5rem;
            border-radius: 8px;
        }
        .goback {
            position: absolute;
            top: .8rem;
            left: .8rem;
            color: #fff;
        }
        .moment_camera {
            position: absolute;
            top: .5rem;
            right: .8rem;
            font-size: 2rem;
        }
    }
    .bodyer {
        margin-top: 3rem;
    }
}
</style>
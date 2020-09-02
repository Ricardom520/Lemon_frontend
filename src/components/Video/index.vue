<template>
    <div class="videoContainer" v-if="showVideo" @touchstart="touchstart" @touchend="touchend">
        <div v-if="ReqVideo" class="ReqVideo">
            <div class="title" v-if="!linkSuc">
                <img src="@/assets/images/common/self.jpg">
                <div class="right">
                    <h3>冰冰</h3>
                    <p>等待对方接受邀请...</p>
                </div>
            </div>
            <div class="hideP">
                <img src="@/assets/images/common/hideP.png" @click="closeVideo">
            </div>
        </div>
        <div v-if="ResVideo" class="ResVideo">
            <div class="title" v-if="!linkSuc">
                <div class="left">
                    <h3>钊钊</h3>
                    <p>邀请你进行视频通话...</p>
                </div>
                <img src="@/assets/images/common/self.jpg">
            </div>
            <div class="hideP">
                <img src="@/assets/images/common/hideP.png" @click="closeVideo">
                <img src="@/assets/images/common/acVideo.png" @click="acceptVideo" class="hand">
            </div>
        </div>
        <video ref="video1" autoplay class="yours" id="video1" style="width= 100%; height=100%; object-fit: fill"></video>
        <video ref="video2" autoplay class="theirs" id="video2" style="width= 100%; height=100%; object-fit: fill"></video>
    </div>
</template>

<script>
export default {
    name: 'wk-video',
    data() {
        return {
            showVideo: false,
            connectedUser: '',
            connection: '',
            stream: '',
            yourConnection: '',
            otherId: '',
            socket: '',
            ReqVideo: false,
            ResVideo: false,
            hasCon: false,
            otherStream: '',
            linkSuc: false,
        }
    },
    mounted() {
        
    },
    updated() {
     
    },
    methods: {
        
    }
}
</script>


<style lang="less" scoped>
.videoContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9000;
    .ReqVideo {
        position: absolute;
        width: 100%;
        height: 100%;
        .title {
            position: absolute;
            display: flex;
            color: #fff;
            margin: 4rem 1rem;
            z-index: 9121;
            img {
                width: 4rem;
                height: 4rem;
                margin-right: .5rem;
            }
            h3 {
                font-size: 1.5rem;
            }
            p {
                margin-top: .5rem;
            }
        }
        .hideP {
            position: absolute;
            width: 100%;
            text-align: center;
            bottom: 3rem;
            z-index: 9999;
            img {
                padding: .7rem;
                border-radius: 100%;
                background: #F45454;
                z-index: 9999;
            }
        }
    }
    .ResVideo {
        position: absolute;
        width: 100%;
        height: 100%;
        .title {
            position: absolute;
            display: flex;
            color: #fff;
            width: 100%;
            margin: 4rem 1rem;
            z-index: 9121;
            img {
                width: 4rem;
                height: 4rem;
                margin-left: .5rem;
                border-radius: .5rem;
            }
            .left {
                width: 75%;
                text-align: right;
                h3 {
                    font-size: 1.5rem;
                }
                p {
                    margin-top: .5rem;
                }
            }
        }
        .hideP {
            position: absolute;
            display: flex;
            width: 100%;
            bottom: 3rem;
            z-index: 9999;
            padding: 0 2.5rem;
            justify-content: space-between;
            img {
                padding: .7rem;
                border-radius: 100%;
                background: #F45454;
                z-index: 9999;
            }
            .hand {
                padding: .7rem;
                border-radius: 100%;
                background: #0EB108;
                z-index: 9998;
            }
        }
    }
    .yours {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 10rem;
        height: 12rem;
    }
    .theirs {
        width: 100%;
        height: 100%;
    }
}
</style>


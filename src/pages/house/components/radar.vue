<template>
    <div class="radarContainer">
        <div class="L_transform">
            <div class="trans_bg">
                <div class="header_box" ref="radar">
                    <span ref="bot" class="bot"></span>
                    <div class="heart"></div>
                    <div class="shan"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Radar',
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        this.createStar()
    },
    methods: {
        createStar() {
            let that = this;
            console.log(Math.random()*190+10)
            let timer = setInterval(function() {
                let x = Math.random()*190+10;
                let y = Math.random()*190+10;
                that.show = true;
                if (that.$refs.bot) {
                    that.$refs.bot.style.left = x + 'px';
                    that.$refs.bot.style.top = y + 'px';
                } else {
                    clearInterval(timer);
                }
            },3000)
        }
    }
}
</script>


<style lang="less" scoped>
.radarContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(59, 58, 58, .8);
    .L_transform {
        position: absolute;
        width: 100%;
        height: 100%;
        .trans_bg {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 15rem;
            height: 15rem;
            transform: translateX(-8rem) translateY(-8rem);
            .header_box {
                display: inline-block;
                width: 100%;
                height: 100%;
                .bot {
                    display: block;
                    position: absolute;
                    width: .5rem;
                    height: .5rem;
                    border-radius: 100%;
                    background: red;
                    transform: scale(0);
                    -webkit-transition-property: -webkit-transform;
                    -webkit-transition-duration: 10s;
                    -moz-transition-property: -moz-transform;
                    -moz-transition-duration: 10s;
                    -o-transition-property: -o-transform;
                    -o-transition-delay: 10;
                    transition-property: transform;
                    transition-delay: 10s;
                    -webkit-animation: scale 3.5s ease-in-out infinite;
                    -moz-animation: scale 3.5s ease-in-out infinite;
                    -o-animation: scale 3.5s ease-in-out infinite;
                    animation: scale 3.5s ease-in-out infinite;
                }
                .heart {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 10rem;
                    height: 10rem;
                    background: url('../../../assets/images/common/quan_circle.png') no-repeat center;
                    transform: translateX(-5rem) translateY(-5rem);
                }
                .shan {
                    position: absolute;
                    left: -1%;
                    top: -10%;
                    width: 15rem;
                    height: 15rem;
                    background: url('../../../assets/images/common/quan_rotate.png') no-repeat center top;
                    -webkit-transform-origin: 107px 124px;
                    transform-origin: 108px 124px;
                    transform: rotate(0deg);
                    animation: radar 5s linear infinite; 
                }
            }
        }
    }
}
@keyframes radar {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes scale {
    0% {
        transform: scale(0)
    }
    50% {
        transform: scale(1)
    }
    100% {
        transform: scale(0)
    }
}
</style>

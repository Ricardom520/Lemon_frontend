<template>
    <div class="storeContainer" :style="show ? '' : 'display: none;'">
        <wk-mask :close="close"/>
        <div 
            class="chooseBox" 
        >
            <div class="title">
                <span class="title_name">厘米商店</span>
            </div>
            <div 
                class="menus"
                :style="{left: `${menusL}px`}" 
                @touchstart="slidesstart($event)" 
                @touchmove="slidesmove($event)"
                @touchend="slidesend($event)"
                ref='menus'
            >
                <ul class="stores">
                    <div class="modal">
                        <li>
                            <img src="@/assets/images/gif/user_0.gif">
                            <span class="ellipse"></span>
                            <span class="name">森碟公主</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_1.gif">
                            <span class="ellipse"></span>
                            <span class="name">鱼精</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_2.gif">
                            <span class="ellipse"></span>
                            <span class="name">棒球王子NO.1</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_3.gif">
                            <span class="ellipse"></span>
                            <span class="name">名侦探</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_4.gif">
                            <span class="ellipse"></span>
                            <span class="name">棒球王子NO.2</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_5.gif">
                            <span class="ellipse"></span>
                            <span class="name">棒球王子NO.3</span>
                        </li>
                    </div>
                    <div class="modal">
                        <li>
                            <img src="@/assets/images/gif/user_6.gif">
                            <span class="ellipse"></span>
                            <span class="name">秦始皇</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_7.gif">
                            <span class="ellipse"></span>
                            <span class="name">月亮湾</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_8.gif">
                            <span class="ellipse"></span>
                            <span class="name">李白</span>
                        </li>
                        <li>
                            <img src="@/assets/images/gif/user_9.gif">
                            <span class="ellipse"></span>
                            <span class="name">古董家</span>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="nag_footer">
                <ul>
                    <li class="nag" :class="acIndex === 0 && 'active'"></li>
                    <li class="nag" :class="acIndex === 1 && 'active'"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'store',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        close: {
            type: Function,
            default: ''
        }
    },
    data() {
        return {
            x1: '',
            menusL: 0,
            l1: '',
            isDown: false,
            acIndex: 0,
        }
    },
    methods: {
        slidesstart(e) {
            this.isDown = true
            this.x1 = e.changedTouches[0].clientX
            this.l1 = this.menusL
        },
        slidesmove(e) {
            if (!this.isDown) {
                return
            }
            let menus = this.$refs.menus
            let width = menus.offsetWidth

            if (this.menusL > 0) {
                this.menusL = 0  
                this.slidesend() 
            } else if (this.menusL < -width / 2) {
                this.menusL = -width /2 
                this.slidesend() 
            } 
            else {
                this.menusL = e.changedTouches[0].clientX - this.x1 + this.l1
            }
        },
        slidesend(e) {
            let menus = this.$refs.menus
            let width = menus.offsetWidth

            if (Math.abs(e.changedTouches[0].clientX) < width / 4) {
                this.acIndex === 1 ? 1 : this.acIndex +=1
                this.menusL = -width / 2 * this.acIndex
            } else {
                this.acIndex === 0 ? 0 : this.acIndex -= 1
                this.menusL = width / 2 * this.acIndex
            }
            this.isDown = false
        }
    }
}
</script>

<style lang="less" scoped>
.storeContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .chooseBox {
        position: fixed;
        z-index: 200;
        bottom: 0;
        width: 100%;
        height: 26.6rem;
        box-shadow: 5px 0px 5px #eeeeee;
        background-color: #fff;
        animation: show linear .3s;
        .title {
            margin-top: 1rem;
            .title_name {
                position: relative;
                display: block;
                color: #fff;
                width: 5rem;
                height: 2rem;
                line-height: 2rem;
                padding-left: .5rem;
                background: linear-gradient(to right, #01D9FE, #00A8FC);
            }
            .title_name::before {
                position: absolute;
                content: '';
                display: block;
                top: -.8rem;
                right: -.8rem;
                width: 0;
                height: 0;
                border-top: .8rem solid transparent;
                border-left: .8rem solid transparent;
                border-right: .8rem solid transparent;
                border-bottom: .8rem solid #00A8FC;
                transform: rotate(-45deg);
            }
            .title_name::after {
                position: absolute;
                content: '';
                display: block;
                top: 1.2rem;
                right: -.8rem;
                width: 0;
                height: 0;
                border-top: .8rem solid transparent;
                border-left: .8rem solid transparent;
                border-right: .8rem solid transparent;
                border-bottom: .8rem solid #00A8FC;
                transform: rotate(-135deg);
            }
        }
        .menus {
            position: absolute;
            width: 200%;
            bottom: 1rem;
            padding: 1rem 0;
            background-color: #fff;
            transition: left ease-in-out .4s;
            .stores {
                display: flex;
                width: 100%;
                .modal {
                    display: flex;
                    flex-wrap: wrap;
                    width: 50%;
                    li {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        font-size: .8rem;
                        width: 33.33333%;
                        img {
                            position: relative;
                            width: 5rem;
                            height: 8rem;
                            z-index: 100;
                        }
                        .ellipse {
                            position: absolute;
                            top: 5.5rem;
                            width: 5rem;
                            height: 5rem;
                            opacity: .8;
                            border: 1px solid #E4E4E4;
                            background-color: #E4E4E4;
                            border-radius: 50px;
                            transform: rotateX(70deg); 
                        }
                        .name {
                            margin-top: 1.2rem;
                        }
                    }
                }
            }
        }
        .nag_footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: .3rem 0;
                .nag {
                    width: .8rem;
                    height: .8rem;
                    margin: 0 .2rem;
                    border: 1px solid #eeeeee;
                    border-radius: 50%;
                    box-shadow: 0 0 5px #eee; 
                    background-color: #F7F7F8;
                    transition: all ease-in-out .3s;
                }
                .nag.active {
                    border: 1px solid #90C3F6;
                    box-shadow: 0 0 5px #90C3F6;
                    background-color: #59A7F5;
                }
            }
        }
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

<template>
    <div class="wk-list-item">
        <div class="wk-list-header" @click="onClick" :class="[fold ? 'active' : '']">
            <div class="wk-list-item-left">
                <span class="leftArrow" v-if="leftArrow"></span><span class="title">{{title}}</span>
            </div>
            <div :class="[ rightArrow ? 'wk-list-item-right' : '']"></div>
        </div>
        <div class="wk-list-bodyer" v-for="item in dataSource" :key="item.userId" :class="[fold ? 'active' : '']">
            <div class="line">
                <div class="left">
                    <img :src="item.imgUrl">
                </div>
                <div class="right">
                    <p class="username">{{item.username}}</p>
                    <p class="desc">{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wk-list',
    data() {
        return {
            fold: false
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        leftArrow: {
            type: Boolean,
            default: false
        },
        rightArrow: {
            type: Boolean,
            default: false
        },
        dataSource: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        onClick() {
            this.fold = !this.fold
        }
    }
}
</script>

<style lang="less" scoped>
.wk-list-item {
    .wk-list-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .8rem .2rem;
        .wk-list-item-left {
            .leftArrow {
                display: inline-block;
                width: 0;
                height: 0;
                border-left: .4rem solid #B3B1BE;
                border-top: .3rem solid transparent;
                border-right: .3rem solid transparent;
                border-bottom: .3rem solid transparent;
                transform-origin: left center;
                transition: all ease-in-out .3s;
            }
            .title {
                font-weight: bold;
                font-size: .9rem;
                color: #02010E;
                letter-spacing: 2px;
            }
        }
        .wk-list-item-right {
            width: .5rem;
            height: .5rem;
            border-top: 1px solid #B9B8C1;
            border-right: 1px solid #B9B8C1;
            transform: rotate(45deg);
        }
    }
    .wk-list-header.active {
        .leftArrow {
            transform: rotate(90deg) translateX(-.2rem) translateY(-.2rem);
        }
    }
    .wk-list-bodyer {
        height: 0;
        overflow: hidden;
        .line {
            display: flex;
            align-items: center;
            .left {
                margin: 0 .5rem;
                img {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                }
            }
            .right {
                p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .username {
                    color: #02010E;
                    font-size: 1rem;
                }
                .desc {
                    color: #C6C6CC;
                    font-size: .8rem;
                }
            }
        }
    }
    .wk-list-bodyer.active {
        height: auto;
    }
}
</style>

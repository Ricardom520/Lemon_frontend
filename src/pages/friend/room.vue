<template>
    <div class="roomContainer">
        <header>
            <div class="back" @click="back"></div>
            {{username}}
            <span :class="!friend?'none':'add'" @click="addFriend">+</span>
            <img src="@/assets/images/common/video.png" :class="!friend?'video':'none'" @click="sendVideo">
        </header>
        <div class="content" @click="hideEmoji" ref="content">
            <ul>
                <li :class="item.self ? 'user' : 'friend'" v-for="(item,index) in newsList" :key="item.userid">
                    <img :src="item.self ?'../../static/images/user.jpg' : '../../static/images/user1.jpg'" :class="item.self ? 'userPhoto' : 'friendPhoto'" :style="item.self ? 'display: none': 'display:block'">
                    <div class="news">
                        <div>{{item.msg}}</div>
                    </div>
                    <img :src="item.self ?'../../static/images/user.jpg' : '../../static/images/user1.jpg'" :class="item.self ? 'userPhoto' : 'friendPhoto'" :style="item.self ? 'display: block': 'display:none'">
                </li>
            </ul>
        </div>
        <div :class="showEmoji?'emoji active':'emoji'">
            <ul>
                <li v-for="(item,index) in faceList" :key="index" @click="getBrow(index)">
                    {{item}}
                </li>
            </ul>
        </div>
        <footer>
            <input ref="txt" v-model="txtContent"/>
            <img src="@/assets/images/icon/stick.svg" @click="faceContent">
            <button @click="submit">发送</button>
        </footer>
        <wk-video ref="video"/>
    </div>
</template>

<script>
// 导入JSON格式的表情库
const appData = require("@/assets/jsons/emojis.json");

import axios from '@/utils/request';
export default {
    name: 'Room',
    components: {
        
    },
    data() {
        return {
            
        }
    },
    created() {
    
    },
    mounted() {
        this.initEmoji();
    },
    methods: {
        initEmoji() { // 初始化标情况
            for (let i in appData) {
                this.faceList.push(appData[i].char);
            }
        },
    }
}
</script>


<style lang="less" scoped>
.roomContainer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url('../../assets/images/common/bg.jpg') no-repeat center;
    background-size: cover;
    header {
        position: relative;
        display: flex;
        height: 1rem;
        line-height: 1rem;
        font-size: 1.5rem;
        padding: 1rem 1.1rem;
        letter-spacing: 2px;
        color: #fff;
        background: linear-gradient(to right, #01D9FE, #00A8FC);
        justify-content: center;
        z-index: 8888;
        .back {
            position: absolute;
            left: 15px;
            width: .8rem;
            height: .8rem;
            border-left: 4px solid #fff;
            border-bottom: 4px solid #fff;
            transform: rotate(45deg);
        }
        .video {
            position: absolute;
            right: 1.5rem;
            top: 20%;
        }
    }
    .content {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 3rem 0;
        overflow-y: scroll;
        ul {
            display: block;
            width: 100%;
            margin-bottom: 3.8rem;
        }
        li {
            display: flex;
            width: 100%;
            padding: .5rem 1rem;
            img {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
            }
            .news {
                width: 90%;
                div {
                    position: relative;
                    max-width: 20rem;
                    margin-top: .2rem;
                    padding: .5rem;
                    border-radius: .5rem;
                }
            }
        }
        li.user {
            .userPhoto {
                margin-left: .8rem;
            }
            .news {
                width: 90%;
                div {
                    position: relative;
                    float: right;
                    width: auto;
                    max-width: 80%;
                    padding: .5rem;
                    border-radius: .5rem;
                    background: #9EEA6A;
                }
                div::after {
                    position: absolute;
                    content: ' ';
                    right: -1rem;
                    top: .5rem;
                    width: 0;
                    height: 0;
                    border-left: .6rem solid #9EEA6A;
                    border-top: .6rem solid transparent;
                    border-right: .6rem solid transparent;
                    border-bottom: .6rem solid transparent;
                }
            }
        }
        li.friend {
            .friendPhoto {
                margin-right: .8rem;
            }
            .news {
                width: 90%;
                div {
                    position: relative;
                    float: left;
                    width: auto;
                    max-width: 80%;
                    padding: .5rem;
                    border-radius: .5rem;
                    background: #fff;
                }
                div::after {
                    position: absolute;
                    content: ' ';
                    left: -1rem;
                    top: .5rem;
                    width: 0;
                    height: 0;
                    border-right: .6rem solid #fff;
                    border-top: .6rem solid transparent;
                    border-left: .6rem solid transparent;
                    border-bottom: .6rem solid transparent;
                }
            }
        }
    }
    .emoji {
        position: absolute;
        width: 100%;
        height: 11rem;
        bottom: -8rem;
        overflow-y: scroll;
        border-top: 1px solid #eee;
        box-shadow: 3px 0 5px #eee;
        transition: all .5s ease-in-out;
        background: #fff;
        ul {
            display: flex;
            flex-wrap: wrap;
            padding: .5rem .2rem;
            li {
                width: 10%;
                font-size: 2rem;
                margin: .3rem;
            }
        }
    }
    .emoji.active {
        bottom: 3rem;
    }
    footer {
        position: fixed;
        display: flex;
        align-items: center;
        width: 100%;
        bottom: 0;
        padding: .5rem 1.5rem;
        box-shadow: 5px 0 5px #B3AFAE;
        background: #fff;
        input {
            width: 60%;
            outline: none;
            color: #B3AFAE;
            border-radius: .5rem;
            border: 1px solid #C6C3C2;
            padding: .3rem .5rem;
        }
        img {
            margin: 0 .8rem;
        }
        button {
            width: 5rem;
            border: none;
            color: #fff;
            outline: none;
            padding: .4rem 0;
            letter-spacing: 2px;
            border-radius: .5rem;
            background: #58B0E3;
        }
    }
}
.none {
  display: none;
}
.add {
  position: absolute;
  right: 10px;
}
</style>
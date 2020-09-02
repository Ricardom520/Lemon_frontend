<template>
    <div class="Moment_news">
        <div class="left">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" class="friImg">
        </div>
        <div class="right">
            <p class="friendName">芳芳</p>
            <p class="desc">好吃呀</p>
            <div class="photos" :class="[photosNums === 1 ? 'one' : 'more']">
                <img src="../../../assets/images/common/self.jpg" class="photo">
            </div>
            <div class="timesTools">
                <p class="tools" :class="[tools ? 'active' : '']"><span>赞</span><span>评论</span></p>
                <span class="times">2分钟前</span>
                <span class="toolsBtn" @click="openTools">··</span>
            </div>
            <div class="commentsLikes">
                <p class="likes">
                  <i class="iconfont wk-icon-like wk-like"></i>
                  Ricardom,魔幻华
                </p>
                <div class="comments" :style="allHas && 'border-top: 1px solid #F0F0F0'">
                    <p><span class="userName">娃哈哈：</span>666</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Line',
    data() {
        return {
            photosNums: 1,
            tools: false,
            allHas: true
        }
    },
    methods: {
        openTools() {
            this.tools = !this.tools
        }
    }
}
</script>

<style lang="less" scoped>
.Moment_news {
    display: flex;
    padding: 1rem .5rem;
    border-bottom: 1px solid #F5F5F5;
    .left {
        padding: 0 .1rem;
        .friImg {
            width: 3rem;
            height: 3rem;
            border-radius: 5px;
        }
    }
    .right {
        display: flex;
        flex: 1;
        flex-direction: column;
        .friendName {
            color: #546186;
        }
        .desc {
            font-size: .9rem;
            margin: .3rem 0;
        }
        .photos {
            display: flex;
            flex-wrap: wrap;
        }
        .photos.one {
            .photo {
                width: 10rem;
                height: auto;
            }
        }
        .photos.more {
            .photo {
                flex: 1;
                width: 31%;
                min-width: 31%;
                max-width: 31%;
                height: 5rem;
                margin: .2rem;
            }
        }
        .timesTools {
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: center;
            margin-top: .2rem;
            .times {
                font-size: .6rem;
                color: #838383;
            }
            .toolsBtn {
                display: block;
                font-size: 2rem;
                color: #546186;
                width: 1rem;
                height: 1rem;
                line-height: 1rem;
                padding: 0 .2rem;
                background: #F3F3F3;
            }
            .tools {
                position: absolute;
                right: 2rem;
                color: #838383;
                font-size: .8rem;
                width: 0;
                height: 1.5rem;
                overflow: hidden;
                background: #F3F3F3;
                transition: all ease-in-out .3s;
            }
            .tools.active {
                width: 4rem;
                padding: .2rem .3rem;
                span {
                    padding: 0 .2rem;
                }
            }
            .tools.active::after {
                position: absolute;
                content: '';
                right: -.8rem;
                width: 0;
                height: 0;
                border-left: .6rem solid #F3F3F3;
                border-top: .5rem solid transparent;
                border-right: .5rem solid transparent;
                border-bottom: .5rem solid transparent;
            }
        }
        .commentsLikes {
            font-size: .8rem;
            margin-top: .5rem;
            border: .5rem;
            background-color: #F7F7F7;
            .likes {
                color: #546193;
                padding: .5rem;
                .wk-like {
                    font-size: .9rem;
                }
            }
            .comments {
                padding: .5rem;
                .userName {
                    color: #546193;
                }
            }
        }
    }
}
</style>

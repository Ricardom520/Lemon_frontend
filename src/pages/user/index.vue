<template>
    <div class="userContainer">
        <div class="header">
            <img src="@/assets/images/common/self.jpg" class="left"/>
            <div class="right">
                <p class="username">Ricardom</p>
                <p class="desc">
                    <router-link to="/"><i class="iconfont wk-icon-editor"></i>Everything is possible</router-link>
                </p>
            </div>
        </div>
        <div class="bodyer">
            <div class="content">
                <ul>
                    <li>
                        <router-link to="/">
                            <i class="iconfont wk-icon-car"></i>
                            出行一下，你就知道
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="footer_lists">
                <ul>
                    <li>
                        <router-link to="/user/setting">
                            <i class="iconfont wk-icon-setting"></i>
                            设置
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <i class="iconfont wk-icon-dark"></i>
                            夜间
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <i class="iconfont wk-icon-talent"></i>
                            达人
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <span>36.5°</span>
                            海珠
                        </router-link>
                    </li>
                    <li>
                        <img src="@/assets/images/gif/user_8.gif" class="userCM"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.userContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .header {
        display: flex;
        align-items: center;
        padding: 1rem .8rem;
        background-image: url('../../../static/img/self_bg.jpg');
        .left {
            width: 4rem;
            height: 4rem;
            border: 2px solid #fff;
            border-radius: 50%;
        }
        .right {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: .2rem 0;
            margin-left: .5rem;
            .username {
                color: #D0D0D0;
                font-size: 1.5rem;
            }
            .desc {
                a {
                    display: block;
                    color: #D9D7D7;
                    width: 100%;
                    i {
                        font-size: .8rem;
                        margin-right: .4rem;
                    }
                }
            }
        }
    }
    .bodyer {
        flex: 1;
        .content {
            margin-top: 3rem;
            ul {
                li {
                    a {
                        position: relative;
                        display: flex;
                        align-items: center;
                        color: #000;
                        font-size: 1rem;
                        padding: .5rem 1rem;
                        i {
                            color: #9A9EB9;
                            font-size: 2rem;
                            margin-right: 1rem;
                        }
                    }
                    a::after {
                        position: absolute;
                        content: ' ';
                        right: 1rem;
                        width: .5rem;
                        height: .5rem;
                        border-top: 1px solid #9A9EB9;
                        border-right: 1px solid #9A9EB9;
                        transform: rotate(45deg);
                    }
                }
            }
        }
        .footer_lists {
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: .5rem 0;
            ul {
                display: flex;
                li {
                    display: flex;
                    flex: 1;
                    justify-content: center;
                    a {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-end;
                        color: #000;
                        font-size: .8rem;
                        i {
                            color: #9A9EB9;
                            font-size: 1.4rem;
                            margin-bottom: .1rem;
                        }
                        span {
                            color: #9A9EB9;
                            font-size: 1.4rem;
                            margin-bottom: .1rem;
                        }
                    }
                    .userCM {
                        width: 8rem;
                    }
                }
            }
        }
    }
}
</style>
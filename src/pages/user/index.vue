<template>
    <div class="userContainer">
        <div class="header">
            <img src="@/assets/images/common/self.jpg" class="left"/>
            <div class="right">
                <p class="username">Ricardom</p>
                <p class="desc">
                    <router-link to="/">Everythin is possible</router-link>
                </p>
            </div>
        </div>
        <div class="bodyer">
            <div>
                <ul>
                    <li>
                        <router-link to="/">
                            <img>
                            设置
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img>
                            夜间
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img>
                            达人
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img>
                            海珠
                        </router-link>
                    </li>
                    <li>
                        <img src="@/assets/images/gif/user_9.gif"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.userContainer {
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
                    color: #D9D7D7;
                }
            }
        }
    }
}
</style>
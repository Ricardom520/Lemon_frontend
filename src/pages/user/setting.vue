<template>
    <div class="setting">
        <wk-header title="设置" align="center" back />
        <div class="bodyer">
            <ul>
                <li>
                    <router-link to="/">
                        <span>个人信息</span>
                        <img src="@/assets/images/common/self.jpg" />
                    </router-link>
                </li>
                <li class="arrow">
                    <router-link to="/">
                        <span>账号安全</span>
                    </router-link>
                </li>
            </ul>
            <ul>
                <li class="arrow">
                    <router-link to="/">
                        <span>关于Lemon与帮助</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'setting'
}
</script>

<style lang="less" scoped>
.setting {
    width: 100%;
    height: 100%;
    .bodyer {
        height: 100%;
        padding-top: 3rem;
        background: #ECECEC;
        ul {
            margin-top: .8rem;
            background: #fff;
            li {
                position: relative;
                padding: 0 .5rem;
                a {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #000;
                    padding: .8rem 0;
                    border-bottom: 1px solid #ececec;
                    img {
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 50%;
                    }
                }
            }
            li.arrow {
                a::after {
                    position: absolute;
                    content: ' ';
                    right: 0;
                    width: .5rem;
                    height: .5rem;
                    border-top: 1px solid #9A9EB9;
                    border-right: 1px solid #9A9EB9;
                    transform: rotate(45deg);
                }
            }
            li:last-child {
                a {
                    border-bottom: none;
                }
            }
        }
    }
}
</style>
<template>
    <div class="momentsContainer">
        <wk-header title="动态分享" self setting />
        <div class="bodyer">
            <ul class="lists">
                <li class="list">
                    <router-link to="/moments">
                        <img src="@/assets/images/common/moments.png">朋友圈
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
.momentsContainer {
    width: 100%;
    height: 100%;
    .bodyer {
        width: 100%;
        height: 100%;
        background-color: #f1f1f1;
        .lists {
            background-color: #fff;
            .list {
                a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    padding: .8rem;
                    img {
                        margin-right: .5rem;
                    }
                }
                a::after {
                    position: absolute;
                    content: '';
                    right: 3rem;
                    width: .8rem;
                    height: .8rem;
                    border-right: 1px solid #D7D9DA;
                    border-top: 1px solid #D7D9DA;
                    transform: rotate(45deg);
                }
            }
        }
    }
}
</style>

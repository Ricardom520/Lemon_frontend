<template>
    <div class="friendContainer">
        <wk-header title="联系人" />
        <div class="friend">
            <div class="header">
                <wk-search></wk-search>
                <wk-list title="新朋友" rightArrow></wk-list>
            </div>
            <div class="bodyer">
                <wk-list title="特别关心" :dataSource="data1" leftArrow></wk-list>
                <wk-list title="我的好友" leftArrow></wk-list>
                <wk-list title="朋友" leftArrow></wk-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'friend',
    data() {
        return {
            data1: [
                {
                    userId: '12354',
                    username: 'MX.CF',
                    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    desc: 'lalala'
                }
            ]
        }
    }
}
</script>


<style lang="less" scoped>
.friendContainer {
    width: 100%;
    height: 100%;
    background-color: #eee;
    .friend {
        .header {
            padding: .8rem .5rem .5rem .5rem;
            background-color: #fff;
        }
        .bodyer {
            margin-top: .8rem;
            padding: .3rem .5rem .5rem .5rem;
            background-color: #fff;
        }
    }
}
</style>

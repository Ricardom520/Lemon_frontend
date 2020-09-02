<template>
  <div class="main">
    <div class="bodyer">
      <router-view></router-view>
    </div>
    <div class="footer">
      <ul>
        <li :class="[houseFlag && 'active']">
          <router-link to="/house">
            <img src="@/assets/images/icon/house.svg" v-if="!houseFlag"/>
            <img src="@/assets/images/icon/house_active.svg" v-if="houseFlag"/>
            我的世界
          </router-link>
        </li>
        <li :class="[friendFlag && 'active']">
          <router-link to="/friend">
            <img src="@/assets/images/icon/friends.svg" v-if="!friendFlag"/>
            <img src="@/assets/images/icon/friends_active.svg" v-if="friendFlag"/>
            联系人
          </router-link>
        </li>
        <li :class="[momentsFlag && 'active']">
          <router-link to="/dynamic">
            <img src="@/assets/images/icon/moments.svg" v-if="!momentsFlag"/>
            <img src="@/assets/images/icon/moments_active.svg" v-if="momentsFlag"/>
            好友动态
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'main',
    data() {
        return {
            houseFlag: true,
            friendFlag: false,
            momentsFlag: false
        }
    },
    created() {
        let path = this.$route.path;

        switch(path) {
            case '/house':
                this.houseFlag = true;
                this.friendFlag = false;
                this.momentsFlag = false;
                break;
            case '/friend':
                this.friendFlag = true;
                this.houseFlag = false;
                this.momentsFlag = false;
                break;
            case '/dynamic':
                this.momentsFlag = true;
                this.houseFlag = false;
                this.friendFlag = false;
                break;
        }
    },
    watch: {
        $route(to, from) {
            let path = to.path;

            switch(path) {
                case '/house':
                    this.houseFlag = true;
                    this.friendFlag = false;
                    this.momentsFlag = false;
                    break;
                case '/friend':
                    this.friendFlag = true;
                    this.houseFlag = false;
                    this.momentsFlag = false;
                    break;
                case '/dynamic':
                    this.momentsFlag = true;
                    this.houseFlag = false;
                    this.friendFlag = false;
                    break;
            }
        }
    }
}
</script>


<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .bodyer {
    flex: 1;
    padding: 3rem 0 4rem 0;
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    ul {
        display: flex;
        li {
            flex: 1;
            a {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #B5AFAF;
                padding: .5rem 0;
                width: 100%;
                img {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-bottom: .2rem;
                }
            }
        }
        li.active {
            a {
                color: #468FDD;
            }
        }
    }
  }
}
</style>

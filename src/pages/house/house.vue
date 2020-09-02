<template>
    <div class="houseContainer">
        <wk-header title="house"/>
        <div class="house">
            <img src="@/assets/images/common/bg.jpg" class="bg">
            <img src="@/assets/images/icon/radar.svg" class="radar" @click="showRadar">
            <img src="@/assets/images/common/news.png" class="news">
            <img src="@/assets/images/gif/user_9.gif" class="people">
            <img src="@/assets/images/gif/house.gif" class="store" @click="openStore">
            <Radar v-if="radar"/>
            <Store :show="store" :close="closeStore"/>
        </div>
    </div>
</template>

<script>
import Radar from './components/radar';
import Store from './components/store';
import service from '@/utils/request';

export default {
  name: 'house',
  components: {
    Radar,
    Store
  },
  data() {
    return {
      radar: false,
      store: false
    }
  },
  created() {
    service.get(`/user/init?uid=1`)
  },
  methods: {
    showRadar() {
      this.radar = true;
      setTimeout(()=>{
        this.radar = false;
      }, 5000)
    },
    openStore() {
        this.store = true
    },
    closeStore() {
        this.store = false
    }
  }
}
</script>


<style lang="less" scoped>
.houseContainer {
    width: 100%;
    height: 100%;
    .house {
        position: relative;
        width: 100%;
        height: 100%;
        .bg {
            width: 100%;
            height: 100%;
        }
        .radar {
            position: absolute;
            right: 1rem;
            top: 1rem;
            z-index: 10;
            transition-property: transform;
            transition-delay: 5s;
            animation: rotate 7s ease-in-out infinite;
        }
        .news {
            position: absolute;
            left: 1.5rem;
            top: 1.5rem;
            z-index: 10;
        }
        .people {
            position: absolute;
            bottom: 0px;
            left: 50%;
            width: 10rem;
            height: 10rem;
            transform: translateX(-4rem);
        }
        .store {
            position: absolute;
            right: .5rem;
            top: 5.5rem;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            z-index: 10;
        }
    }
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg)
  }
}
</style>
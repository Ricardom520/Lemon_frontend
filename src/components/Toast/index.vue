<template>
  <div class="wk-toast-container">
    <div class="wk-toast-box">
      <div class="wk-toast">
        <i :class="[type === 'success' && 'wk-icon-success',
                    type === 'warning' && 'wk-icon-sigh',
                    type === 'fail' && 'wk-icon-fail']" class="iconfont wk-toast-icon"></i>
        <p class="wk-toast-name">{{message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wk-toast',
  data() {
    return {
      duration: 2000,
      type: '',
    }
  },
  mounted() {
    if (this.duration) {
      console.log(this.$el)
      this.$el.classList.add('active')
      setTimeout(() => {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      }, this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
.wk-toast-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  .wk-toast-box {
    position: absolute;
    top: 40%;
    width: 100%;
    .wk-toast {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 8rem;
      margin: 0 auto;
      padding: 1rem;
      border-radius: 8px;
      background: rgba(0, 0, 0, .7);
      .wk-toast-icon {
        font-size: 2.5rem;
      }
      .wk-toast-name {
        text-align: center;
        margin-top: .2rem;
      }
    }
  }
}
.wk-toast-container.active {
  .wk-toast {
    animation: show .3s ease-in-out;
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
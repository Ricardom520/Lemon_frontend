import Vue from 'vue';
import WkToast from './index.vue';

let ToastContainer = Vue.extend(WkToast);
let instance;

const Toast = function(options = {}) {
  instance = new ToastContainer({
    data: typeof options === 'object' ? options : { message: options, type: this.type ? this.type : ''}
  }).$mount();

  document.body.appendChild(instance.$el);
}

Vue.prototype.$toast = Toast;
Vue.prototype.$toast.success = Toast.bind({type: 'success'});
Vue.prototype.$toast.warning = Toast.bind({type: 'warning'});
Vue.prototype.$toast.error = Toast.bind({type: 'error'});

WkToast.install = (Vue) => {
  Vue.component(WkToast.name, WkToast);
};

export default WkToast;
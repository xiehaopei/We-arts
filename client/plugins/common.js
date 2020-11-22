import Vue from 'vue';

const common = {
  install () {
    const throttle= (func, time) => {
      let activeTime = 0;
      return () => {
        const current = Date.now();
        if (current - activeTime > time) {
          func.apply(this, arguments);
          activeTime = Date.now();
        }
      }
    }
    Vue.prototype.$throttle = throttle;
  }

}

Vue.use(common);

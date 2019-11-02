import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Carousel3d from 'vue-carousel-3d';

Vue.use(Vuetify);
Vue.use(Carousel3d);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});

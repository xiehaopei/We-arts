import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Icon from '@/components/Icon.vue'
import Nav from '@/components/Nav.vue'

Vue.use(VueCompositionApi);
Vue.component('Icon', Icon)
Vue.component('Nav', Nav)

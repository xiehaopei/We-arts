import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Icon from '@/components/Icon.vue'
import Nav from '@/components/Nav.vue'
import BackTop from '@/components/BackTop.vue'
import Tags from '@/components/Tags.vue'
import ArticleList from '@/components/ArticleList.vue'

Vue.use(VueCompositionApi);
Vue.component('Icon', Icon)
Vue.component('Nav', Nav)
Vue.component('BackTop', BackTop)
Vue.component('Tags', Tags)
Vue.component('ArticleList', ArticleList)

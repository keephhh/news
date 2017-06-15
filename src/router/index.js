import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '../components/NewsList/newslist.vue';
import News from '../components/News/news.vue';
import Msg from '../components/ShowMsg/showmsg.vue';
import Focus from '../components/Focus/focus.vue';
import Talk from '../components/Talk/talk.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/focus',
      name: 'Focus',
      component: Focus
    },
    {
      path: '/talk',
      name: 'Talk',
      component: Talk
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Gulu/index.vue'
import Tabbar from './components/Gulu/common/tabbar.vue'
// import Header from './components/Gulu/common/header.vue'
import  TransitionGroup from './views/transition-group.vue'
import tabbar from './components/Gulu/common/tabbar.vue'
import Carou from './components/Gulu/common/carou.vue'
import play from './components/Gulu/common/play.vue'
import ranking from './components/Gulu/ranking'
import videoPlay from './components/Gulu/common/videoPlay.vue'
Vue.use(Router)

export default new Router({  
  mode:'history',  
  routes: [
    {
      path:'/videoPlay',
      component:videoPlay
    },
    {
      path:'/ranking',
      component:ranking      
    },
    {
      path:'/play',
      component:play
    }, 
    {
      path:'/carou',
      component:Carou
    },
    {
      path:'/transition-group',
      component:TransitionGroup
    },
    // {
    //   path:'/header',
    //   component:Header
    // },
    {
      path:'/tabbar',
      component:Tabbar
    },
    {
      path:'/index', 
      component:Index
    },{
      path:'**',
      component:Index
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

// const Tab = () => import('views/tab/Tab')
const NewSong = () => import('views/newsong/NewSong')
const Rank = () => import('views/rank/Rank')
const Plist = () => import('views/plist/Plist')
const Singer = () => import('views/singer/Singer')
const RankList = () => import('components/rank-list/rank-list')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'NewSong',
    component: NewSong
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank,
    children: [
      {
        name: 'rank-list',
        path: 'info/:id',
        component: RankList
      }
    ]
  },
  {
    path: '/plist',
    name: 'Plist',
    component: Plist
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  }
]

const router = new VueRouter({
  routes
})

export default router

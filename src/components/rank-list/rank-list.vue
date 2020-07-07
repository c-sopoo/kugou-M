<template>
  <transition name='ranklist'>
    <div class="rank-list" v-if="rankItems.songs">
      <div class="top">
        <Header></Header>
        <back class="title">
          <span>{{rankItems.info.rankname}}</span>
        </back>
      </div>
      
      <!-- 包裹容器 -->
      <div class="wrapper">
        <div class="bg-img">
          <img :src="rankItems.info.imgurl | imgFilter" alt="">
        </div>
        <div class="song-list">
          <song :song-list='rankItems.songs.list'></song>
        </div>
      </div>
      
      
    </div>
  </transition>
  
</template>

<script>
import Back from 'components/back/back'
import Song from 'components/song/song'
import Header from 'views/header/Header'
import {getRankItem} from 'api/request'

export default {
  name: 'rank-list',
  data() {
    return {
      rankItems: {}
    }
  },
  async created() {
    // let res = await getRankItem(this.$route.params.id)
    // console.log(res)
    // this.rankItems = res
    this._getRankItemSong()
    console.log('create')
  },
  mounted() {
    
  },
  methods: {
    async _getRankItemSong() {
      let res = await getRankItem(this.$route.params.id)
      // console.log(res)
      // .then(res => {
        console.log(res)
        this.rankItems = res
      // })
      
    }
  },
  components: {
    Back,
    Song,
    Header
  }
}
</script>

<style lang='scss' scoped>
.ranklist-enter-active,.ranklist-leave-active {
  transition: all 0.2s;
}
.ranklist-enter,.ranklist-leave-to {
  transform: translate3d(100%,0,0);
}
  .rank-list {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: #fff;
    overflow-y: auto;
    .top {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
    .wrapper {
      .bg-img {
        // margin-bottom: -40px;
        width: 100%;
        img {
          width: 100%;
        }
      }
      .song-list {
        background: #fff;
        // margin-top: -40px;
      }
    }
  }
</style>
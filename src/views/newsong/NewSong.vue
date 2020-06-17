<template>
  <div class="new-song">
    <div class="swipe">
      <van-swipe class="my-swipe" 
                :autoplay="3000" 
                indicator-color="white"
                @change='onChange'
                ref='swipe'
                :initial-swipe='currentSwipeIndex || 0'
      >
        <van-swipe-item class="swipe-item" v-for='banner in banners' :key='banner.id'>
          <img v-lazy='banner.imgurl'>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="song-list">
      <song :song-list='newsongList' @slectSong='slectSong'></song>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Lazyload } from 'vant';
import { getNewSong, getSongInfo } from 'api/request'
import Song from 'components/song/song'
import {mapActions} from 'vuex'

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  name:'NewSong',
  data() {
    return {
      banners: [],
      newsongList: [],
      currentSwipeIndex:'',
    }
  },
  created() {
    this._getNewSong()
  },
  methods: {
    // 请求数据
    _getNewSong() {
      getNewSong().then(res => {
        console.log(res)
        this.banners = res.banner
        // console.log(this.banners)
        this.newsongList = res.data
      })
    },
    // swipe
    onChange(index) {
      this.swipeIndex = index
    },
    // 获取歌曲详情
    async slectSong(song, index) {
      this.currentSong = await getSongInfo(song)
      console.log(this.currentSong)
      // 提交actions
      this.selectSong({
        list: this.newsongList,
        index: index,
        currentSong: this.currentSong
      })
    },
    ...mapActions([
      'selectSong'
    ])
  },
  computed: {
    // 通过计算属性改变vant swipe组件initial-swipe
    currentIndex() {
      return this.currentSwipeIndex
    }
  },
  activated() {
    this.currentSwipeIndex = this.swipeIndex
  },
  deactivated() {
    // console.log('un激活')
  },
  components: {
    Song
  }
}
</script>

<style lang='scss' scoped>
  .new-song {
    .swipe{
      height: 154px;
      .my-swipe {
        height: 100%;
        .swipe-item {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
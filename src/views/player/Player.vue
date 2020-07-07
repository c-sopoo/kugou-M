<template>
  <div class="player" v-show='playingList.length'>
    <!-- 全屏 -->
    <div class="normal-container"  v-show='!fullScreen' >
      <div class="top">
        <Header></Header>
      </div>
      <div class="normal-player" :style='{"background-image": "url("+ currentSongImgUrl +")"}'>
        <div class="wrapper">
          <back @back='back'>
            <span>{{ currentSong.songName }}</span>
          </back>
          <img :src="currentSongImgUrl" alt="">
          <div class="lyric" v-if="currentLyric">
            <swipe :data='currentLyric.lines' :currentLineNum='currentLineNum'></swipe>
          </div>
          <div class="progress-wrapper">
            <span class="time time-l">{{ format(currentTime) }}</span>
            <div class="progress-bar-wrapper">
              <progress-bar :percent='percent'
                            :bufferedPercent='buffered'
                            @progressChanging='progressChanging'
              ></progress-bar>
            </div>
            <span class="time time-r">{{ format(currentSong.timeLength) }}</span>
          </div>
          <div class="control">
            <span class="btn btn-prev" @click="prev"></span>
            <span class="play-pause" 
                  :style="{'background-image':'url('+ normalIcon +')'}" 
                  @click.stop='changePlaying'
            ></span>
            <span class="btn btn-next" @click="next"></span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 迷你 -->
    <div class="mini-player" v-show="fullScreen" @click.stop='open'>
      <img :src="currentSongImgUrl" alt="">
      <div class="song-name">
        <p class="name">{{ currentSong.songName}}</p>
        <p class="singer">{{ currentSong.singerName }}</p>
      </div>
      <div class="controler">
        <span class="pause" :style="{'background-image':'url('+ miniIcon +')'}" @click.stop='changePlaying'></span>
        <span class="next" @click.stop='next'></span>
        <span class="download"></span>
      </div>
    </div>
    <audio ref="audio"
            @playing="ready"
            @error="error"
            @ended="end"
            @timeupdate="updateTime"
    ></audio>
  </div>
</template>

<script>
import Header from 'views/header/Header'
import Back from 'components/back/back'
import ProgressBar from 'components/progress-bar/progress-bar'
import Lyric from 'lyric-parser'
import Swipe from 'components/swipe/swipe'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Player',
  data() {
    return {
      songReady: false,
      currentTime: 0,
      alreadyLoad: 0,
      currentLyric: null,
      currentLineNum: 0
    }
  },
  computed: {
    normalIcon() {
      return this.playing ? require('assets/image/play_pause.png'):require('assets/image/play_play.png')
    },
    miniIcon() {
      return this.playing ? require('assets/image/pause_icon.png'):require('assets/image/play_icon.png')
    },
    currentSongImgUrl() {
      if(!this.currentSong.imgUrl) return './kg-bg.jpg'
      return this.currentSong.imgUrl.replace(/{size}/, '400')
    },
    percent() {
      return this.currentTime / this.currentSong.timeLength
    },
    buffered() {
      return this.alreadyLoad / this.currentSong.timeLength
    },
    ...mapGetters([
      'fullScreen',
      'playingList',
      'currentSong',
      'playing',
      'currentIndex',
      'currentItemSong'
    ])
  },
  watch: {
    currentSong(newSong, oldSong) {
      if(newSong.hash === oldSong.hash) return
      this.$refs.audio.src = newSong.url
      this.$refs.audio.play()
      this.getLyric()
      console.log(this.currentLyric)
    },
    playing(newPlaying) {
      console.log(newPlaying)
      if(this.songReady && newPlaying) {
        this.$refs.audio.play()
      }
    }
  },
  methods: {
    back() {
      this.setFullScreen(true)
    },
    open() {
      this.setFullScreen(false)
    },
    // 上一首
    prev() {
      if(!this.songReady) return
      this.currentLyric.stop()

      if(this.currentIndex <= 0) {
        this.changeSong({
          index: this.playingList.length -1
        })
        return
      }
      this.changeSong({
        index: this.currentIndex -1 
      })
    },
    // 暂停or播放
    changePlaying() {
      this.$refs.audio.pause()
      this.setPlaying(!this.playing)
      this.currentLyric.togglePlay()
    },
    // 下一首
    next() {
      if(!this.songReady) return
      this.currentLyric.stop()
      if(this.currentIndex >= this.playingList.length-1) {
        this.changeSong({
          index: 0
        })
        return
      }
      this.changeSong({
        index: this.currentIndex +1
      })
    },
    // audio事件
    // 当音频/视频已开始或不再暂停时触发
    ready() {
      this.songReady = true
    },
    error() {
      console.log('error')
    },
    end() {

    },
    updateTime(ev) {
      if(!this.songReady) return
      if(this.$refs.audio && this.$refs.audio.buffered.length !== 0) {
        this.alreadyLoad = this.$refs.audio.buffered.end(0) | 0
        this.currentTime = ev.target.currentTime
      }
      
    },
    format(interval) {
      interval = interval | 0
      const minute = (interval/60 | 0).toString().padStart(2, '0')
      const second = (interval%60).toString().padStart(2,'0')
      return `${minute}:${second}`
    },
    // 进度条变化
    progressChanging(progressPercent) {
      // 改变当前播放时间
      const currentTime = this.currentSong.timeLength * progressPercent
      console.log(currentTime)
      this.currentTime = this.$refs.audio.currentTime = currentTime
    },
    getLyric() {
      let lyric = this.currentSong.lyric
      if(!lyric)return
      this.currentLyric = new Lyric(lyric,this.handleLyric)
      this.currentLyric.play()
    },
    handleLyric({lineNum}) {
      this.currentLineNum = lineNum
    },
    ...mapMutations({
      setFullScreen: 'SET_FULLSCREEN',
      setPlaying: 'SET_PLAYING'
    }),
    ...mapActions([
      'changeSong'
    ])
  },
  components: {
    Header,
    Back,
    ProgressBar,
    Swipe
  }
}
</script>

<style lang='scss' scoped>
@import 'assets/scss/_variable';
.player {
  .normal-container {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }
    .normal-player {
      position: absolute;
      width: 100%;
      top: 58px;
      right: 0;
      left: 0;
      bottom: 0;
      background-position: center;
      background-size: cover;
      z-index: 1;
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(8px);
        z-index: 2;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        background: rgba(0,0,0,0.7);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        overflow: hidden;
        img {
          width: 193px;
          height: 193px;
          margin: 30px 0;
        }
        .lyric {
          width:100%;
          height: 104px;
          text-align: center;
          overflow: hidden;
        }
        .progress-wrapper {
          width: 90%;
          display: flex;
          align-items: center;
          margin: 20px;
          .time {
            flex: 0 0 30px;
            color: #fff;
            font-size: 12px;
          }
          .progress-bar-wrapper {
            flex: 1;
            margin: 0 5px;
          }
        }
        .control {
          width: 60%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .btn {
            width: 42px;
            height: 42px;
          }
          span {
            background-position: center;
            background-size: cover;
          }
          .btn-prev {
            background-image: url('../../assets/image/play_prev.png');
          }
          .btn-next {
            background-image: url('../../assets/image/play_next.png');
          }
          .play-pause {
            width: 58px;
            height: 58px;
          }
        }
      }
    }
  }

  // 迷你
  .mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 76px;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    padding: 0 4px;
    img {
      width: 67.5px;
      height: 67.5px;
      border-radius: 4px;
    }
    .song-name {
      margin-left: 10px;
      color: #fff;
      width: 158px;
      p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .name {
        font-size: $font-size-m;
      }
      .singer {
        font-size: $font-size-sm;
        color: #888;
      }
    }
    .controler {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        width: 32px;
        height: 32px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .next {
        background-image: url('../../assets/image/next_icon.png');
      }
      .download {
        background-image: url('../../assets/image/download_icon.png');
      }
    }
  }
}
  
</style>
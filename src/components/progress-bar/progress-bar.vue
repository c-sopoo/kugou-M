<template>
  <div class="progress-bar" ref="progressBar" @click="progressBar">
    <div class="inner">
      <div class="progress already-progress" ref="progress"></div>
      <div class="progress buffered" ref="buffered"></div>
      <div class="progress-btn" ref="progressBtn"
            @touchstart.prevent='progressTouchStart'
            @touchmove.prevent='progressTouchMove'
            @touchend='progressTouchEnd'
      ></div>
    </div>
  </div>
</template>

<script>
// 进度条小点宽度
const progressBtnWidth = 14

export default {
  props: {
    // 接收一个百分比，控制progress变化
    percent: {
      type: Number,
      default: 0
    },
    // 已缓冲部分
    bufferedPercent: {
      type: Number,
      default: 0
    }
  },
  created() {
    this.touch = {}
  },
  watch: {
    percent(newPercent) {
      if(newPercent > 0 && !this.touch.begin) {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const offsetWidth = newPercent * barWidth
        this._offset(offsetWidth)
      }
    },
    bufferedPercent(newBuffered) {
      const barWidth = this.$refs.progressBar.clientWidth
      const offsetWidth = newBuffered * barWidth
      this.$refs.buffered.style.width = offsetWidth +'px'
    }
  },
  methods: {
    progressTouchStart(ev) {
      this.touch.begin = true
      this.touch.startX = ev.touches[0].pageX
      this.touch.left = this.$refs.progress.clientWidth
      console.log(this.touch)
    },
    progressTouchMove(ev) {
      console.log(ev)
      let moveX = ev.touches[0].pageX - this.touch.startX
      console.log(moveX)
      let offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0,this.touch.left + moveX))
      console.log(this.$refs.progressBar.clientWidth)
      this._offset(offsetWidth)

      // this._getProgressPercent() 派发到player组件
      this.$emit('progressChanging', this._getProgressPercent())
    },
    progressTouchEnd() {
      this.touch.begin = false
    },
    progressBar() {
      
    },
    // 改变偏移
    _offset(offsetWidth) {
      this.$refs.progress.style.width = offsetWidth +'px'
      this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,-50%,0)`
    },
    // 获取progress宽度百分比
    _getProgressPercent() {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const progressWidth = this.$refs.progress.clientWidth
      // console.log(progressWidth / barWidth)
      return progressWidth / barWidth
    }
  },
}
</script>

<style lang='scss' scoped>
@import 'assets/scss/_variable';
  .progress-bar {
    height: 30px;
    position: relative;
    .inner {
      height: 4px;
      width: 100%;
      border-radius: 2px;
      background: #000;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      .progress {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      }
      .already-progress {
        background: $color-blue;
        z-index: 3;
        border-radius: 2px;
      }
      .buffered {
        // width: 40%;
        background: rgba(255,255,255,0.4);
        z-index: 2;
        border-radius: 2px;
      }
      .progress-btn {
        position: absolute;
        top: 50%;
        width: 14px;
        height: 14px;
        border: 1px solid #fff;
        border-radius: 50%;
        background: $color-blue;
        transform: translate3d(0,-50%,0);
        z-index: 4;
      }
    }
  }
</style>
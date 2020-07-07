<template>
  <div class="myswiper-wrapper">
    <swiper ref="mySwiper" 
            :options="swiperOptions"
    >
      <swiper-slide v-for="(lyric, index) in data"
                    :key="lyric.time">
        <p class="text"
            :class="{current: currentLineNum === index}"
        >
          {{lyric.txt}}
        </p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper,SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Swipe',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    currentLineNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        slidesPerView : 3,
        centeredSlides : true,
        centeredSlidesBounds: true,
      }
    }
  },
  mounted() {
    this._refresh()
    // console.log(this.swiper)
  },
  updated() {
    // setTimeout(() => {
    //   console.log('updated')
    //   console.log(this.swiper)
    //   this._refresh()
    // }, 200)
    
  },
  methods: {
    _refresh() {
      console.log(this.$refs.mySwiper)
    }
  },
  computed: {
    swiper() {
      console.log('refresh')
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {
    data() {
      
    },
    currentLineNum(newNum) {
      console.log(newNum)
      this.$refs.mySwiper.$swiper.update(true)

      if(newNum > 2 ) {
        this.swiper.slideTo(newNum, 1000, false)
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang='scss' scoped>
  .myswiper-wrapper {
    height: 100%;
    .swiper-container {
      height: 100%;
    }
    .swiper-slide {
      height: auto;
    }
    .text {
      font-size: 14px;
      color: rgba(255,255,255,.6);
      margin: 3px 0;
    }
    p.current {
      font-size: 14px;
      color: #fff;
    }
  }
</style>
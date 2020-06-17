<template>
  <div class="song">
    <ul>
      <li class="song-item" 
          v-for="(song, index) in songList"
          :key='song.hash'
          @click='clickSong(song, index)'
      >
        <!-- <span :class="rank "></span> -->
        <span class="song-name" >{{ song.filename}}</span>
        <span class="download"></span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    songList: {
      type: Array,
      default () {
        return []
      }
    },
  },
  created() {
    
  },
  methods: {
    clickSong(song, index) {
        console.log(song.hash)
        this.$emit('slectSong', song, index)
    }
  },
  mounted() {
  },
}
</script>

<style lang='scss' scoped>
@import 'assets/scss/_variable.scss';
.song {
  ul {
    padding-left: 13px;
    li {
    box-sizing: border-box;
      width: 100%;
      height: 73px;
      padding: 0 8px 0 6px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      span {display: inline-block;}
      .song-name {
        width: 300px;
        font-size: 18px;
        word-break: break-all;
        color:$color-font;
      }
      .download {
        width: 24px;
        height: 24px;
        background-image: url('./download.png');
        background-position: center;
        background-size: cover;
      }
      &:not(:last-child) {
        border-bottom: 1px solid $color-item;
      }
    }
  }
}
</style>
import {playMode} from 'assets/js/config'

const state = {
  // 当前是否在播放
  playing: false,
  // 播放器是否全屏
  fullScreen: false,
  // 歌单列表
  sequenceList: [],
  // 播放列表
  playingList: [],
  // 播放模式，默认顺序播放
  mode: playMode.sequence,
  // 当前歌曲索引
  currentIndex: -1,
  // 点击排行或歌单列表跳转时传递参数
  listItem: [],
  // // 当前歌曲
  currentSong: {}
}
export default state
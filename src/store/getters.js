export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const sequenceList = state => state.sequenceList

export const playingList = state => state.playingList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const listItem = state => state.listItem
// 当前播放的那首歌
export const currentSong = state => state.currentSong
// 当前currenIndex下的那首歌，上一首下一首获取详细信息
export const currentItemSong = state => {
  return state.playingList[state.currentIndex] || {}
}
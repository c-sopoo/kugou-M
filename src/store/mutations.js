import * as types from './mutation-type'

const mutations = {
  [types.SET_PLAYING] (state, flag) {
    return state.playing = flag
  },
  [types.SET_FULLSCREEN] (state, flag) {
    return state.fullScreen = flag
  },
  [types.SET_SETQUENCE_LIST] (state, list) {
    return state.sequenceList = list
  },
  [types.SET_PLAYING_LIST] (state, list) {
    return state.playingList = list
  },
  [types.SET_MODE] (state, mode) {
    return state.mode = mode
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    return state.currentIndex = index
  },
  [types.SET_LISTITEM] (state, list) {
    return state.listItem = list
  },
  [types.SET_CURRENTSONG] (state, song) {
    return state.currentSong = song
  }
}
export default mutations
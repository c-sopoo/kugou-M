import * as types from './mutation-type'
import {getSongInfo} from 'api/request'

// 点击一首歌时
export const selectSong = function ({commit}, {list, index, currentSong}) {
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULLSCREEN, true)
  commit(types.SET_PLAYING, true)
  commit(types.SET_SETQUENCE_LIST, list)
  commit(types.SET_PLAYING_LIST, list)
  commit(types.SET_CURRENTSONG, currentSong)
}

// 切换歌曲
export const changeSong = async function ({commit, getters}, {index}){
  commit(types.SET_CURRENT_INDEX, index)
  let currentSong = await getSongInfo(getters.currentItemSong)
  commit(types.SET_CURRENTSONG, currentSong)
}
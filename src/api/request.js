import axios from 'axios'
// 新歌
//  http://m.kugou.com/
// axios.defaults.baseURL = '/api/'

export function getNewSong () {
  return axios.get('/api/?json=true').then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    console.error('newsong err', err)
  })
}

// 点击歌曲获取详细信息带歌词

export function getSongInfo (song) {
  return axios.get(`/api/app/i/getSongInfo.php?cmd=playInfo&hash=${song.hash}`).then(res => {
    // console.log(res)
    return getLyric(res.data).then(value => {
      // console.log(value)
      res.data.lyric = value.data
      return res.data
    })
  })
}
// 歌词
export function getLyric (song) {
  return axios.get('/api/app/i/krc.php', {
    params: {
      cmd: 100,
      keyword: song.filename,
      hash: song.hash,
      timelength: song.timeLength*1000
    }
  })
}

// 排行
export function getRank () {
  return axios.get('/api/rank/list&json=true').then(res => {
    return Promise.resolve(res.data.rank)
  }).catch(err => {
    console.error('getRank err', err)
  })
}
// 排行每一项的歌曲列表
export function getRankItem (rankid) {
  return axios.get(`/api/rank/info/?rankid=${rankid}&page=1&json=true`).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    console.error('getRankItem err', err)
  })
}

// 歌单
export function getPlist () {
  return axios.get('/api/plist/index&json=true').then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    console.error('getPlist err', err)
  })
}

// 歌手
export function getSinger () {
  return axios.get('/api/singer/class&json=true').then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    console.error('getSinger err', err)
  })
}


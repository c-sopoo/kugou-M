<template>
  <div class="singer">
    <ul class="category" v-for="singer in singers" :key='singer.title'>
      <li class="item" v-for="item in singer.items" :key="item.classid" @click='singerItem(item)'>
        <span class="title">{{ item.classname }}</span>
        <van-icon name="arrow"/>
      </li>
      
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { getSinger } from 'api/request'

Vue.use(Icon);

export default {
  name: 'Singer',
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSinger()
  },
  methods: {
    _getSinger() {
      getSinger().then(res => {
        console.log(res)
        this.singers = this._normalizeSinger(res.list)
      })
    },
    // 格式化singer列表
    _normalizeSinger(list) {
      let map = {}
      let singerList = []
      list.forEach(item => {
        let title = item.classname.substring(0,2)
        if(!map[title]) {
          map[title] = {
            items: []
          }
        }
        map[title].items.push(item)
      })

      for(let key in map) {
        let obj = {}
        obj.title = key
        obj.items = map[key].items
        singerList.push(obj)
      }
      console.log(singerList)
      return singerList
    },
    singerItem(item) {
      console.log(item.classid)
    }
  },
}
</script>

<style lang='scss' scoped>
@import 'assets/scss/_variable';
  .singer {
    width: 100%;
    .category {
      margin: 16px 14px;
      background: #fbfbfb;
      border: 1px solid #e4e4e4;
      border-radius: 5px;
      overflow: hidden;
      .item {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        font-size: $font-size-l;
        &:not(:last-child) {
          border-bottom: 1px solid #e4e4e4;
        }
        .title {
          color: $color-font;
        }
        i {
          color: #e4e4e4;
        }
      }
      
    }
  }
</style>
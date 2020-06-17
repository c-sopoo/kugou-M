<template>
<!-- 歌单和排行共用 -->
  <div class="list-cart">
    <ul>
      <li class="cart-item" 
          v-for="(item) in data"
          :key="item.rankid || item.specialid"
          @click='clickItem(item)'
      >
        <img v-lazy='imgFilter(item.imgurl)'>
        <div class="desc">
          <span class="title">{{ item.rankname || item.specialname }}</span>
          <div class="playcount" v-show="item.specialid">
            <van-icon name='audio'></van-icon>
            <span class="num">{{ item.playcount }}</span>
          </div>
        </div>

        <van-icon name="arrow" color='#e5e5e5' class="van-icon"></van-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    clickItem(item) {
      // console.log(item)
      // 派发事件
      this.$emit('slectItem', item)
    },
    imgFilter(url) {
      return url = url.replace(/{size}/,'400')
    }
  },
}
</script>

<style lang='scss' scoped>
@import 'assets/scss/_variable';
  .list-cart {
    width: 100%;
    ul {
      margin-left: 13px;
      li {
        &:not(:last-child) {
          border-bottom: 1px solid $color-item;
        }
        height: 124px;
        width: 100%;
        padding-right: 13px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        img {
          width: 96px;
          height: 96px;
        }
        .desc {
          display: flex;
          flex-direction: column;
          width: 208px;
          .title {
            color: $color-font;
            font-size: $font-size-l;
          }
          .playcount {
            margin-top: 2px;
            display: flex;
            align-items: center;
            font-size: $font-size-s;
            color: #9b9b9b;
            .num {
              margin-left: 3px;
            }
          }
        }
        .van-icon {
          font-size: 18px;
        }
      }
    }
  }
</style>
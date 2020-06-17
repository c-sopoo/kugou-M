<template>
  <div class="header">
    <div class="logo">
      <a href="javascript:;" title="酷狗音乐"></a>
      <div class="title">下载酷狗</div>
    </div>
    <div class="search">
      <van-icon name='search'  color='#fff' tag="i"></van-icon>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  components: {
  }
}
</script>

<style lang='scss' scoped>
  @import 'assets/scss/_variable.scss';
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 58px;
    padding: 0 12px;
    background: $color-blue;
    .logo {
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      a{
        width: 132px;
        height: 100%;
        background-image: url('./kugou-logo.png');
        background-position: center;
        background-size: cover;
      }
      .title {
        margin-left: 13px;
        width: 105px;
        height: 33px;
        border: 1px solid #fff;
        border-radius: 6px;
        text-align: center;
        line-height: 2;
        color: #fff;
      }
    }
    .search {
      i {
        font-weight: 800;
        font-size: 26px;
      }
    }
    
  }
</style>
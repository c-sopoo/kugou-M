<template>
  <div class="tab">
    <router-link to="/" tag="div" class="tab-item" exact>
      <span>新歌</span>
    </router-link>
    <router-link to="/rank" tag="div" class="tab-item" exact>
      <span>排行</span>
    </router-link>
    <router-link to="/plist" tag="div" class="tab-item" exact>
      <span>歌单</span>
    </router-link>
    <router-link to="/singer" tag="div" class="tab-item" exact>
      <span>歌手</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang='scss' scoped>
@import '~assets/scss/_variable.scss';
.tab {
  display: flex;
  flex-direction: row;
  padding: 0 13px;
  background: #fff;
  color: $color-font;
  width: 100%;
  height: 62px;
  font-size: $font-size-l-x;
  // box-shadow: 0 4px 4px #faf7f7;
  // box-sizing: content-box;
  border-bottom: 4px solid #e9e5e5;
  & > .tab-item {
    flex: 1;
    width: 87px;
    height: 58px;
    text-align: center;
    line-height: 58px;
    &.router-link-active {
      border-bottom: 4px solid $color-bottom;
    }
  }
}
</style>
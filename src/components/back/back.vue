<template>
  <div class="back">
    <van-icon name="arrow-left" class="left" @click='back'/>
    <div class="title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  methods: {
    back() {
      this.$router.back()
    }
  },
}
</script>

<style lang='scss' scoped>
  .back {
    width: 100%;
    height: 54px;
    padding: 0 38px;
    position: relative;
    background: linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
    .left {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      font-size: 38px;
      color: #fff;
    }
    .title {
      height: 100%;
      font-size: 18px;
      color: #fff;
      text-align: center;
      line-height: 54px;
    }
  }
</style>
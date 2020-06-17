<template>
  <div class="rank">
    <rank-plist :data='ranks' @slectItem='slectItem'></rank-plist>
    <router-view></router-view>
  </div>
</template>

<script>
import RankPlist from 'components/rankPlist/rankPlist'
import { getRank } from 'api/request'

export default {
  name: 'Rank',
  data() {
    return {
      ranks: []
    }
  },
  created() {
    this._getRank()
  },
  methods: {
    _getRank() {
      getRank().then(res => {
        console.log(res)
        this.ranks = res.list
      })
    },
    slectItem(item) {
      this.$router.push({name: 'rank-list', params: {id: item.rankid}})
    }
  },
  components: {
    RankPlist
  }
}
</script>

<style>

</style>
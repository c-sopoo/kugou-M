<template>
  <div class="plist">
    <rank-plist :data='pLists'></rank-plist>
  </div>
</template>

<script>
import RankPlist from 'components/rankPlist/rankPlist'
import { getPlist } from 'api/request'

export default {
  name: 'Plist',
  data() {
    return {
      pLists: []
    }
  },
  created() {
    this._getPlist()
  },
  methods: {
    _getPlist() {
      getPlist().then(res => {
        console.log(res)
        this.pLists = res.plist.list.info
      })
    }
  },
  components: {
    RankPlist
  }
}
</script>

<style>

</style>
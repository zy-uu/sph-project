<template>
<div>
  <typeNav/>
  <listContainer/>
  <recommend/>
  <rank/>
  <like/>
  <floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"/>
  <brand/>
</div>
  
</template>

<script>
import {mapState} from 'vuex'
import listContainer from '../home/listContainer'
import recommend from '../home/recommend'
import rank from '../home/rank'
import like from '../home/like'
import floor from '../home/floor'
import brand from '../home/brand'

export default {
  components: {
    recommend,
    listContainer,
    rank,
    like,
    floor,
    brand
  },
  name: 'Home',
  mounted() {
    this.$store.dispatch("getFloor");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList
    })

  }
}

</script>
<template>
<div>
  <typeNav/>
  <listContainer/>
  <recommend/>
  <rank/>
  <like/>
  <floor/>
  <brand/>
</div>
  
</template>

<script>
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
  name: 'Home'
}

</script>
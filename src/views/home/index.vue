<template>
<div>
  <typeNav/>
  <recommend/>
  <rank/>
  <like/>
  <floor/>
  <brank/>
</div>
  
</template>

<script>
import recommend from '../home/recommend'
import rank from '../home/rank'
import like from '../home/like'
import floor from '../home/floor'
import brand from '../home/brand'

export default {
  components: {
    recommend,
    rank,
    like,
    floor,
    brand
  },
  name: 'Home'
}

</script>
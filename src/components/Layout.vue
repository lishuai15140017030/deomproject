/*
 * @Author: Chanh Wang
 * @Date: 2018-11-02 18:51:30
 * @Last Modified by: liujb-b
 * @Last Modified time: 2019-04-27 16:28:03
 */
<template>
  <div class="layout">
    <div class="header">我是头部</div>
    <div class="left-side"><left-side></left-side></div>
    <div class="right-side"><router-view></router-view></div>
  </div>
</template>

<script>
import LeftSide from './LeftSide.vue'
export default {
  name: 'Layout',
  components: {
    LeftSide
  },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {}

}

</script>
<style lang="scss" scoped>
.layout{
  height: 100%;
  position: relative;
  .header{
    height: 80px;
    background: #000;
  }
  .left-side{
    position: absolute;
    left: 0;
    top: 80px;
    bottom: 0;
    width: 280px;
  }
  .right-side{
    position: absolute;
    left: 280px;
    top: 80px;
    bottom: 0;
    right: 0;
  }
}
</style>

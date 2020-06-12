<template>
<div>
<div class="header">
  <div class="header-left">
    <div class="iconfont icon-left">&#xe6bc;</div>
  </div>
  <div class="header-input">
     <span class="iconfont">&#xe647;</span>
    请输入城市景点/地区</div>
  <router-link to='/city'>
  <div class="header-right">
    {{this.currentcity}}
    <span class="iconfont">&#xe60a;</span>
  </div>
  </router-link>
</div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentcity: 'city'
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
{
  height:.86rem;
  background :$Bgcolor;
  display :flex;
  line-height .86rem;
  color:#fff;
}
.header-left
{
 width :.64rem;
 float:left;
 .icon-left
 {
   font-size:.4rem;
   text-align :center;
 }
}
 .header-right
 {
  min-width :1.04rem;
  padding:0 .2rem;
  float:right;
  color:#fff;
  text-align :center;
 }
 .header-input
 {
   flex:1;
   background :#fff;
   padding-left :.1rem;
   height .64rem;
   color:#ccc;
   line-height .64rem;
   border-radius:.1rem;
   margin:.12rem;
 }
</style>

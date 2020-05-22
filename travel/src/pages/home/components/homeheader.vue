<template>
<div>
<div class="header">
  <div class="header-left">
    <div class="iconfont icon-left">&#xe6bc;</div>
  </div>
  <div class="header-input">
     <span class="iconfont">&#xe647;</span>
    请输入城市景点/地区</div>
  <div class="header-right">
    城市
    <span class="iconfont">&#xe60a;</span>
  </div>
</div>
</div>
</template>
<script>
export default{
  name: 'HomeHeader'
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
  width :1.23rem;
  float:right;
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

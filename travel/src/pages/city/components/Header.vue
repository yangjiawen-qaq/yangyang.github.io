<template>
<div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont header-left">&#xe6bc;</div>
    </router-link>
</div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header{
     position relative;
     height $Height;
     line-height $Height;
     background $Bgcolor;
     text-align center;
     color #fff;
     font-size .32rem;
     .header-left
     {
         position:absolute;
         left:0;
         top:0;
         color:#fff;
         font-size:.42rem;
     }
}
</style>

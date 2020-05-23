<template>
<div>
<home-header></home-header>
<home-swiper></home-swiper>
<icon-font></icon-font>
</div>
</template>
<script>
import HomeHeader from './components/homeheader'
import HomeSwiper from './components/Swiper'
import IconFont from './components/iocnfont'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    IconFont
  }
}
</script>
<style>
</style>

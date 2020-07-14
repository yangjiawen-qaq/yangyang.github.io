<template>
    <div>
      <router-link tag="div" to="/" class="header-abs" v-show="showabs">
          <div class="iconfont header-icon">&#xe6bc;</div>
      </router-link>
      <div class="header-fixed" v-show="!showabs" :style="opacitystyle">
        景点详情
          <router-link to="/">
            <div class="iconfont header-back">&#xe6bc;</div>
          </router-link>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      showabs: true,
      opacitystyle: {
        opacity: 0
      }
    }
  },
  methods: {
    headerscroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacitystyle = {opacity}
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.headerscroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.headerscroll)
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/variable.styl'
.header-abs
  position: absolute;
  top:.2rem;
  left:.2rem;
  width:.8rem;
  height:.8rem;
  border-radius: .4rem;
  background:#333;
  text-align: center;
  line-height: .8rem;
  .header-icon
     color:#fff;
.header-fixed
     z-index: 2;
     position fixed;
     top 0;
     left 0;
     height $Height;
     width 100%;
     line-height $Height;
     background $Bgcolor;
     text-align center;
     color #fff;
     font-size .32rem;
     .header-back
         position:absolute;
         left:0;
         top:0;
         color:#fff;
         font-size:.42rem;
</style>

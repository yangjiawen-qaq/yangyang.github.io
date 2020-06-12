<template>
<div>
<ul class="item-list">
   <li class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="slideclick"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    >
    {{item}}
    </li>
</ul>
</div>
</template>
<script>
export default {
  name: 'CityAlpha',
  props: {
    cities: Object
  },
  data () {
    return {
      istouched: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    slideclick (e) {
      this.$emit('change', e.target.innerText)
    },
    touchstart () {
      this.istouched = true
    },
    touchmove (re) {
      if (this.istouched) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setTimeout(() => {
          const Nowtop = re.touches[0].clientY - 79
          const index = Math.floor((Nowtop - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    touchend () {
      this.istouched = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.item-list
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  display: flex
  flex-direction column
  justify-content center
  width .4rem
  .item
    text-align center
    line-height .4rem
    color $Bgcolor
</style>

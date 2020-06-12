<template>
<div class="list" ref="wrapper">
  <div>
    <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
                <div class="button">{{this.currentcity}}</div>
            </div>
        </div>
    </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper"
            @click="handleclick(item.name)"
             v-for="item of hotcities" :key="item.id">
                <div class="button">{{item.name}}</div>
            </div>
        </div>
    </div>
     <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
         @click="handleclick(inneritem.name)"
         v-for="inneritem of item" :key="inneritem.id">
            <div class="item border-bottom">{{inneritem.name}}</div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotcities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentcity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const target = this.$refs[this.letter][0]
        this.scroll.scrollToElement(target)
      }
    }
  },
  methods: {
    handleclick (city) {
      this.changecity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changecity'])
  }
}
</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>

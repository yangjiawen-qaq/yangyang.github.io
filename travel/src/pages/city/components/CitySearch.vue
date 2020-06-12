<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleclick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配城市
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'citysearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
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
@import '~styles/variable.styl'
.search
    height:.72rem;
    background:$Bgcolor;
    padding:0 .1rem;
    .search-input
        box-sizing:border-box;
        height:.62rem;
        width:100%;
        border-radius:.3rem;
        color:#666;
        text-align:center;
        padding:0 .2rem;
.search-content
   position: absolute
   overflow hidden
   z-index 1
   left: 0
   bottom: 0
   right: 0
   top: 1.58rem
   background: #eee
   .search-item
     color: #666
     line-height .62rem
     padding-left .2rem
     background #fff
</style>

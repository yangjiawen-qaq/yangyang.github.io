<template>
<div>
<home-header></home-header>
<home-swiper :List="Swiperlist"></home-swiper>
<icon-font :List="iconList"></icon-font>
<home-recommand :List="recommendlist"></home-recommand>
<home-weekend :List="weekendlist"></home-weekend>
</div>
</template>
<script>
import HomeHeader from './components/homeheader'
import HomeSwiper from './components/Swiper'
import IconFont from './components/iocnfont'
import HomeRecommand from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    IconFont,
    HomeRecommand,
    HomeWeekend
  },
  data () {
    return {
      lastcity: '',
      Swiperlist: [],
      iconList: [],
      recommendlist: [],
      weekendlist: []
    }
  },
  methods: {
    getinfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getinfosucc)
    },
    getinfosucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.Swiperlist = data.swiperList
        this.iconList = data.iconList
        this.recommendlist = data.recommendList
        this.weekendlist = data.weekendList
      }
    }
  },
  mounted () {
    this.lastcity = this.city
    this.getinfo()
  },
  activted () {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getinfo()
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style>
</style>

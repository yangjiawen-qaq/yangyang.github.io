<template>
<div>
<Header></Header>
<citysearch :cities="cities"></citysearch>
<List :cities="cities" :hotcities="hotcities" :letter="letter"></List>
<city-alpha :cities="cities" @change="changeclick"></city-alpha>
</div>
</template>
<script>
import axios from 'axios'
import Header from './components/Header'
import citysearch from './components/CitySearch'
import List from './components/list'
import CityAlpha from './components/alpha'
export default{
  name: 'City',
  components: {
    Header,
    citysearch,
    List,
    CityAlpha
  },
  data () {
    return {
      cities: {},
      hotcities: [],
      letter: ''
    }
  },
  mounted () {
    this.getinfo()
  },
  methods: {
    getinfo () {
      axios.get('/api/city.json').then(this.getinfocitysucc)
    },
    getinfocitysucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotcities = data.hotCities
        this.cities = data.cities
      }
    },
    changeclick (letter) {
      this.letter = letter
    }
  }
}
</script>
<style>
</style>

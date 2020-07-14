<template>
<div>
    <banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :bannerImgs="gallaryImgs"
    >
    </banner>
    <Header ></Header>
    <div class="content">
      <List :list="list"></List>
    </div>
</div>
</template>
<script>
import banner from './components/banner'
import Header from './components/header'
import List from './components/list'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    banner,
    Header,
    List
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getdetail () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.data && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getdetail()
  }
}
</script>
<style scoped>
.content{
  height:50rem;
}
</style>

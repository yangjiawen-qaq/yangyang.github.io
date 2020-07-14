<template>
<div>
    <div class="banner" @click="showclick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-bottom">
        <div class="banner-text">{{this.sightName}}</div>
        <div class="banner-number">
         <span class="iconfont">&#xe635;</span>
         {{this.bannerImgs.length}}
          </div>
      </div>
    </div>
   <Fade>
   <CommonGallary
   :imgs="bannerImgs"
    v-show="showgallary"
    @close="closegallary"
    >
   </CommonGallary>
   </Fade>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/fade'
export default {
  name: 'banner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showgallary: false,
      imgs: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1390533595,2685057191&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1390533595,2685057191&fm=26&gp=0.jpg']
    }
  },
  methods: {
    showclick () {
      this.showgallary = true
    },
    closegallary () {
      this.showgallary = false
    }
  },
  components: {
    CommonGallary,
    Fade
  }
}
</script>
<style scoped>
.banner{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom:55%;
}
.banner-text{
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  margin-bottom:2%;
  color:#ccc;
  font-weight: bolder;
}
.banner-number{
  position: absolute;
  bottom:0;
  right:0;
  margin-bottom:2%;
  color:#333;
  font-weight: bolder;
}
</style>

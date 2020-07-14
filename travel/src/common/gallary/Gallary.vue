<template>
   <div class="container" @click="gallaryclose">
     <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img class="img-swiper" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
     </div>
   </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    gallaryclose () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>
<style scoped>
.container >>> .swiper-container
{
  overflow: inherit;
}
.container{
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:99;
  background:#333;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrapper{
  width:100%;
  height: 0;
  padding-bottom:100%;
}
.img-swiper{
  width:100%;
}
.swiper-pagination{
  color:#fff;
  bottom: -1rem;
}
</style>

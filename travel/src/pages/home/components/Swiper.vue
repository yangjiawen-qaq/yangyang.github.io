<template>
<div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showswiper">
    <swiper-slide v-for="item of List" :key="item.id">
        <img class="img-swiper" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    List: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: 5000,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showswiper () {
      return this.List.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
{
    background:#fff;
}
.wrapper
{
    overflow:hidden ;
    width:100%;
    height:0;
    padding-bottom:31%;
    background:green;
    .img-swiper
    {
    width:100%;
    }

}
</style>

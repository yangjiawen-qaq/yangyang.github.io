<template>
<div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item of swiperlist" :key="item.id">
        <img class="img-swiper" :src="item.imgurl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperlist:[{
        id: '001',
        imgurl: 'https://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_256x160_14e8c382.jpg'
      },{
        id: '002',
        imgurl: 'https://imgs.qunarzz.com/sight/p0/1504/4f/4f7ada6deb2b5949.water.jpg_256x160_21ad6df6.jpg'
      }
      ]
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
    width:100%;
    heigth:0;
    overflow:hidden ;
    padding-bottom:31.25%;
    .img-swiper
    {
    width:100%;
    }

}

</style>

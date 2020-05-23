<template>
<div class="icons">
   <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
         <div class="icon"  v-for="item of page" :key="item.id">
            <div class="icon-img">
            <img class="ico" :src="item.iconurl">
            </div>
            <div class='text' v-text="item.text"></div>
         </div>
      </swiper-slide>
   </swiper>
</div>
</template>
<script>
export default {
  name: 'IconFont',
  data () {
    return {
      iconlist: [{
        id: '01',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: '滑雪'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      },
      {
        id: '02',
        iconurl: 'http://img1.imgtn.bdimg.com/it/u=289000593,52298680&fm=26&gp=0.jpg',
        text: 'bilibili'
      }]
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    pages () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/ellisips'
.icons>>>.swiper-container
{
   height 0;
   overflow hidden;
   padding-bottom 50%;
}
.icons
{
    height :0;
    overflow:hidden;
    padding-bottom :50%;
    background:#ccc;
    .icon
    {
        position relative;
        float:left;
        width:25%;
        height :0;
        padding-bottom:25%;
          .icon-img
          {
              left:0;
              right:0;
              bottom:.44rem;
              position :absolute;
              overflow: hidden;
              .ico
              {
                  height 100%;
                  width 90%;
                  display block;
                  margin 0 auto;
              }
          }
          .text
          {
              position absolute;
              left:0;
              right:0;
              bottom:0;
              text-align center;
              ellisips();
          }
 }
}
</style>

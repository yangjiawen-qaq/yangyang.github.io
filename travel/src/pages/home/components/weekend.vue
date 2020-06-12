<template>
<div>
<div class="title">周末去哪儿</div>
<div class="item border-bottom" v-for="item of List" :key="item.id">
    <div class='item-img-wrapper'>
     <img class="item-img" :src="item.imgUrl">
    </div>
    <div class="item-slide">
        <p class="item-text">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
    </div>
</div>
</div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    List: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/ellisips'
.title
{
    margin-top .06rem;
    background #ccc;
    text-indent .04rem;
}
.item
{
    heigth 1.9rem;
    overflow hidden;
    .item-img-wrapper
    {
        overflow hidden;
        height 0;
        padding-bottom 37.09%;
        .item-img
        {
           width 100%;
        }
    }
    .item-slide
    {
        padding .1rem;
        min-width 0;
        .item-text
        {
            font-size .32rem;
            line-height .32rem;
            ellisips();
        }
        .item-desc
        {
            line-height .6rem;
            color #ccc;
            ellisips();
        }
    }
}
</style>

<template>
<div>
<div class="title">热景推销</div>
<router-link class="item border-bottom"
                   tag='li'
                   v-for="item of List"
                   :key="item.id"
                   :to="'/detail/' + item.id">
    <img class="item-img" :src="item.imgUrl">
    <div class="item-slide">
        <p class="item-text">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
    </div>
</router-link>
</div>
</template>
<script>
export default {
  name: 'HomeRecommand',
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
    display flex;
    .item-img
    {
        width 1.7rem;
        height 1.7rem;
        padding .1rem;
    }
    .item-slide
    {
        flex 1;
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
        .item-button
        {
            margin-top .2rem;
            background #f08a5d;
            color #fff;
            border-radius .1rem;
        }
    }
}
</style>

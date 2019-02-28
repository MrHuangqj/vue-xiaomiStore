<template>
    <div class="bottom-navigation-bar">
      <ul class="bar-wrapper">
        <li class="bar-item">
          <router-link to="/">
            <img src="./icon1.svg"/>
            <p>首页</p>
          </router-link>
        </li>
        <li class="bar-item">
          <img src="./icon2.svg"/>
          <p>分类</p>
        </li>
        <li class="bar-item">
          <div class="label">智能特惠</div>
          <p>发现</p>
        </li>
        <li class="bar-item">
          <img src="./icon3.svg"/>
          <p>购物车</p>
        </li>
        <router-link to="/order">
          <li class="bar-item">
              <img src="./icon4.svg"/>
              <p>我的</p>
          </li>
        </router-link>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.bottom-navigation-bar
  position fixed
  bottom 0rem
  width 37.5rem
  height 5.7rem
  background-color rgba(255, 255, 255, 1)
  .bar-wrapper
    list-style none
    margin 0.9rem 0 0 0
    display flex
    justify-content space-around
    .bar-item
      display inline-block
      width 4.3rem
      height 4.8rem
      position relative
      img
        margin 0 auto
        display block
        height 2.8rem
        width 2.8rem
        font-size 2.8rem
      p
        font-size 1.3rem
      .label
        margin 0 auto
        background-color rgba(245, 87, 78, 1)
        border-radius 50%
        text-align center
        height 2.8rem
        width 2.8rem
        color rgba(255, 255, 255, 1)
        font-weight bold
</style>

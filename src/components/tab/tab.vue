<template>
  <div class="tab">
    <ul id="tab-wrapper">
      <li class="tab-item">推荐</li>
      <li class="tab-item">手机</li>
      <li class="tab-item">全面屏</li>
      <li class="tab-item">智能</li>
      <li class="tab-item">电视</li>
      <li class="tab-item">电脑</li>
      <li class="tab-item">生活周边</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    height 3rem
    overflow hidden
    width 37.5rem
    #tab-wrapper
      font-size 0
      width 100%
      display inline
      white-space nowrap
      overflow-x scroll
      float left
      overflow-y hidden
      padding 0 1.1rem
      .tab-item
        padding 0 0.5rem
        list-style none
        font-size 1.4rem
        display inline-block
        height 4rem
        margin 0 0.7rem
        line-height 2.56rem
        color rgba(255, 255, 255, 1)
</style>

<template>
    <div class="m-header">
      <div id="icon"></div>
      <form id="search" class="search" method="get">
        <input type="submit" class="search-button" value=""/>
        <input class="search-text" type="text" name="search"  placeholder="小米MAX2">
      </form>
      <div id="scan"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .m-header
    height 5.16rem
    width 37.5rem
    display flex
    justify-content space-around
    align-items center
    #icon
      flex-grow: 0
      height 100%
      width 4.63rem
      background no-repeat center
      background-image url("icon.svg")
      background-size 2.34rem
    #search
      flex-grow: 1
      height 3.3rem
      width 28.2rem
      display flex
      background-color rgba(255, 255, 255, 1)
      .search-button
        width 3.4rem
        height 3.3rem
        background #fff url("search.svg") no-repeat left
        background-size 1.88rem
        background-position 0.7rem
        border none
        outline none
      .search-text
        height 3.3rem
        font-size 1.4rem
        width 24.8rem
        border none
        color #a6a6a6
        outline none
    #scan
      flex-grow: 0
      height 100%
      width 4.75rem
      background  no-repeat center
      background-image url("scan.svg")
      background-size: 2.34rem

</style>

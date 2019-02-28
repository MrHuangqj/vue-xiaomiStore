<template>
    <div id="order">
      <div class="content-wrapper">
        <div class="order-header">
          <div class="news">
            <img class="news-icon" src="./news.svg"/>
          </div>
          <div class="order-message">
            <img class="head-pic" src="./order.png"/>
            <div class="message">
              <h2>233号</h2>
              <p>小米粉丝小米粉丝</p>
            </div>
          </div>
        </div>
        <div class="member-points">
          <img src="./member-icon.svg"/>
          <p>会员积分</p>
        </div>
        <div class="order-list">
          <div class="my-order">
            <div class="my-order-wrapper">
              <p>我的订单</p>
              <div class="list-arrow">
                <p>全部订单</p>
                <img class="arrow" src="./small-arrow.svg"/>
              </div>
            </div>
          </div>
          <div class="order-function-wrapper">
            <div class="order-function">
              <div class="order-function-item">
                <img src="./list-icon1.svg"/>
                <p>待付款</p>
              </div>
              <div class="order-function-item">
                <img src="./list-icon2.svg"/>
                <p>待收货</p>
              </div>
              <div class="order-function-item">
                <img src="./list-icon1.svg"/>
                <p>待付款</p>
              </div>
              <div class="order-function-item">
                <img src="./list-icon4.svg"/>
                <p>退换修</p>
              </div>
            </div>
          </div>
        </div>
        <div class="advertisement"></div>
        <div class="function-list">
          <div class="function-list-item">
            <img class="function-icon" src="./function-icon.svg">
            <div class="function-mes">
              <p>优惠卷</p>
              <img class="arrow" src="./small-arrow.svg"/>
            </div>
          </div>
          <div class="function-list-item">
            <img class="function-icon" src="./function-icon.svg">
            <div class="function-mes">
              <p>优惠卷</p>
              <img class="arrow" src="./small-arrow.svg"/>
            </div>
          </div>
          <div class="function-list-item">
            <img class="function-icon" src="./function-icon.svg">
            <div class="function-mes none">
              <p>优惠卷</p>
              <img class="arrow" src="./small-arrow.svg"/>
            </div>
          </div>
        </div>
        <div class="function-list">
          <div class="function-list-item">
            <img class="function-icon" src="./function-icon.svg">
            <div class="function-mes">
              <p>优惠卷</p>
              <img class="arrow" src="./small-arrow.svg"/>
            </div>
          </div>
          <div class="function-list-item">
            <img class="function-icon" src="./function-icon.svg">
            <div class="function-mes">
              <p>优惠卷</p>
              <img class="arrow" src="./small-arrow.svg"/>
            </div>
          </div>
          <div class="function-list-item">
            <img class="function-icon" src="./function-icon.svg">
            <div class="function-mes none">
              <p>优惠卷</p>
              <img class="arrow" src="./small-arrow.svg"/>
            </div>
          </div>
        </div>
        <div class="function-list">
          <div class="function-list-item">
            <img class="function-icon" src="./function-icon.svg">
            <div class="function-mes none">
              <p>优惠卷</p>
              <img class="arrow" src="./small-arrow.svg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#order
  width 37.5rem
  .content-wrapper
    width 100%
    position relative
    margin-bottom 5.8rem
    .order-header
      background-color rgba(226, 106, 60, 1)
      .news
        width 100%
        height 3.5rem
        .news-icon
          height 2.3rem
          width 2.3rem
          float right
          margin 0.6rem 0.7rem
      .order-message
        width 34.7rem
        margin 0 auto
        height 8.8rem
        display flex
        .head-pic
          width 5.6rem
          height 5.6rem
          border-radius 50%
        .message
          margin-left 0.7rem
          text-align left
          height 5.6rem
          line-height 2.8rem
          color rgba(255, 255, 255, 1)
          h2
            font-size 1.6rem
          p
            font-size 1.4rem
            color rgba(255, 255, 255, 0.5)
    .member-points
      position absolute
      left 29.3rem
      top 6.5rem
      height 3.1rem
      width 8.2rem
      background-color rgba(255, 190, 0, 1)
      font-size 0
      display flex
      align-items center
      box-sizing border-box
      padding-left 0.7rem
      border-radius 1.6rem 0 0 1.6rem
      img
        width 1.4rem
        height 1.4rem
      p
        font-size 1.3rem
    .order-list
      .my-order
        .my-order-wrapper
          font-size 1.6rem
          line-height 4.2rem
          box-sizing border-box
          padding 0 0.9rem 0 1.4rem
          display flex
          justify-content space-between
          width 37.5rem
          height 4.2rem
          .list-arrow
            height 4.2rem
            display flex
            align-items center
            .arrow
              width 2.3rem
              height 2.3rem
      .order-function-wrapper
        border-top 1px solid rgba(229, 229, 229, 1)
        box-sizing border-box
        padding 0.9rem 0
        height 7.5rem
        width 37.5rem
        .order-function
          color rgba(153, 153, 153, 1)
          font-size 1.3rem
          height 5.7rem
          display flex
          justify-content space-around
          .order-function-item
            width 5.7rem
            height 5.7rem
            img
              height 2.8rem
              width 2.8rem
    .advertisement
      height 10.4rem
      width 37.5rem
      background-image url("./advertisement.png")
      background-size 37.5rem 10.4rem
      background-repeat no-repeat
    .function-list
      width 37.5rem
      border-top 7px solid rgba(229, 229, 229, 0.5)
      border-bottom 1px solid rgba(229, 229, 229, 0.5)
      .function-list-item
        height 4.6rem
        display flex
        align-items center
        justify-content space-between
        .function-icon
          height 2.8rem
          width 2.8rem
          margin-left 1.5rem
        .function-mes
          border-bottom 1px solid rgba(229, 229, 229, 1)
          width 32.2rem
          display flex
          align-items center
          justify-content space-between
          p
            line-height 4.6rem
            width 7.3rem
            font-size 1.5rem
            text-align left
          .arrow
            padding 1.2rem
            width 2.3rem
            height 2.3rem
        .none
          border none
</style>

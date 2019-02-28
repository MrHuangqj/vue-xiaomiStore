<template>
  <div id="home-page">
    <header class="header">
      <m-header></m-header>
      <tab></tab>
    </header>
    <div class="view-rapper" >
      <section class="viewport">
        <div class="view-pic"></div>
        <div class="view-message">
          <div class="view-message-item">
            <h1>小</h1>
            <p>买小送大</p>
          </div>
          <div class="view-message-item">
            <h1>米</h1>
            <p>百元福利</p>
          </div>
          <div class="view-message-item">
            <h1>感</h1>
            <p>1元秒杀</p>
          </div>
          <div class="view-message-item">
            <h1>恩</h1>
            <p>智能特惠</p>
          </div>
          <div class="view-message-item">
            <h1>季</h1>
            <p>订单抽奖</p>
          </div>
        </div>
        <div class="view-tag">领取100元现金卷</div>
      </section>
      <section class="goods-main">
        <div class="title">
          <h1>热卖爆品，火热感恩</h1>
          <h3>千元全面屏现货抢</h3>
        </div>
        <div class="good-min-wapper">
          <div class="good-min">
            <img src="./good-pic.jpg">
            <div class="good-message">
              <h2>红米5Plus</h2>
              <h4>千元全面屏，前置柔光自拍</h4>
              <p>￥999起</p>
              <div class="buy-button">立即购买</div>
              <div class="tag">新品热卖</div>
            </div>
          </div>
          <div class="good-min">
            <img src="./good-pic.jpg">
            <div class="good-message">
              <h2>红米5Plus</h2>
              <h4>千元全面屏，前置柔光自拍</h4>
              <p>￥999起</p>
              <div class="buy-button">立即购买</div>
              <div class="tag">新品热卖</div>
            </div>
          </div>
        </div>
        <div class="good-max">
          <img src="./good-pic-max.jpg">
          <div class="good-message">
            <h2>小米Note 3 6GB+128GB</h2>
            <h4>6GB+128GB，支持人脸解锁</h4>
          </div>
          <div class="good-price">
            <p>￥2559起</p>
            <div class="buy-button">立即购买</div>
          </div>
          <div class="tag-hot">拍照旗舰</div>
          <div class="tag-discount">减100送AI音响</div>
        </div>
        <div class="good-max">
          <img src="./good-pic-max2.jpg">
          <div class="good-message">
            <h2>小米Note 3 6GB+128GB</h2>
            <h4>6GB+128GB，支持人脸解锁</h4>
          </div>
          <div class="good-price">
            <p>￥2559起</p>
            <div class="buy-button">立即购买</div>
          </div>
          <div class="tag-hot">拍照旗舰</div>
          <div class="tag-discount">减100送AI音响</div>
        </div>
        <div class="good-strategy">
          <img class="icon1" src="./good-strategy.svg">
          <div class="good-strategy-message">
            <h1>感恩季必读省钱攻略怎么买最划算？</h1>
            <img class="icon2" src="./arrows.svg">
          </div>
        </div>
      </section>
      <section class="goods-main goods-bgcolor">
        <div class="title">
          <h1>热卖爆品，火热感恩</h1>
          <h3>千元全面屏现货抢</h3>
        </div>
        <div class="good-max">
          <img src="./good-pic-max.jpg">
          <div class="good-message">
            <h2>小米Note 3 6GB+128GB</h2>
            <h4>6GB+128GB，支持人脸解锁</h4>
          </div>
          <div class="good-price">
            <p>￥2559起</p>
            <div class="buy-button">立即购买</div>
          </div>
          <div class="tag-hot">拍照旗舰</div>
          <div class="tag-discount">减100送AI音响</div>
        </div>
        <div class="good-min-wapper">
          <div class="good-min">
            <img src="./good-pic.jpg">
            <div class="good-message">
              <h2>红米5Plus</h2>
              <h4>千元全面屏，前置柔光自拍</h4>
              <p>￥999起</p>
              <div class="buy-button">立即购买</div>
              <div class="tag">新品热卖</div>
            </div>
          </div>
          <div class="good-min">
            <img src="./good-pic.jpg">
            <div class="good-message">
              <h2>红米5Plus</h2>
              <h4>千元全面屏，前置柔光自拍</h4>
              <p>￥999起</p>
              <div class="buy-button">立即购买</div>
              <div class="tag">新品热卖</div>
            </div>
          </div>
        </div>
        <div class="title">
          <h1>热卖爆品，火热感恩</h1>
          <h3>千元全面屏现货抢</h3>
        </div>
        <div class="good-max">
          <img src="./good-pic-max2.jpg">
          <div class="good-message">
            <h2>小米Note 3 6GB+128GB</h2>
            <h4>6GB+128GB，支持人脸解锁</h4>
          </div>
          <div class="good-price">
            <p>￥2559起</p>
            <div class="buy-button">立即购买</div>
          </div>
          <div class="tag-hot">拍照旗舰</div>
          <div class="tag-discount">减100送AI音响</div>
        </div>
        <div class="discounts">
          <h2>送100万张100元现金卷</h2>
          <div class="buy-button">立即购买</div>
        </div>
        <img class="foot-pic" src="./foot-pic.jpg"/>
      </section>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'home-page',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home-page
    width 37.5rem
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color #2c3e50
    .header
      position fixed
      top 0rem
      width 37.5rem
      z-index 100
      background-position  bottom
      background-image url("header.png")
      background-size 37.5rem
      background-repeat no-repeat
    .view-rapper
      margin 8.11rem 0 5.7rem
      width 37.5rem
      .viewport
        border none
        position relative
        background-color rgba(206, 37, 82, 1)
        .view-pic
          height 26.8rem
          background-image url("pic1.png")
          background-size 37.5rem
          background-repeat no-repeat
          background-position top
        .view-message
          width 100%
          height 6.8rem
          background-color rgba(206, 37, 82, 1)
          display flex
          justify-content space-around
          .view-message-item
            width 5.8rem
            height 6.8rem
            text-align center
            h1
              margin 0 auto
              display block
              font-size 1.6rem
              height 3.8rem
              width 3.8rem
              background-color rgba(255, 255, 255, 1)
              border-radius 50%
              line-height 3.8rem
              color rgba(171, 37, 72, 1)
            p
              font-size 1.2rem
              color rgba(255, 255, 255, 1)
              line-height 2.1rem
        .view-tag
          position absolute
          left 11.3rem
          top 17.2rem
          height 3.7rem
          width 15rem
          background-color rgba(246, 100, 21, 1)
          border 4px solid rgba(255, 179, 50, 1)
          border-radius 5rem
          text-align center
          line-height 3.7rem
          font-size 1.6rem
          font-weight bold
          color rgba(255, 255, 255, 1)
      .goods-main
        background-color rgba(255, 190, 82, 1)
        width 37.5rem
        text-align center
        padding-bottom 0.8rem
        .title
          height 5.4rem
          width 19.7rem
          margin 0 auto
          padding-top 1.1rem
          color rgba(148, 97, 47, 1)
          h1
            font-size 1.9rem
          h3
            font-weight normal
            font-size 1.4rem
        .good-min-wapper
          margin 0 auto 0.5rem auto
          width 36.1rem
          display flex
          justify-content space-between
          .good-min
            background-color rgba(255, 255, 255, 1)
            width 17.7rem
            height 26.4rem
            position relative
            img
              width 17.7rem
              height 13.1rem
              margin-bottom  1.2rem
            h2
              font-size 1.6rem
              line-height 2.8rem
            h4
              font-size 1.2rem
              line-height 1.8rem
              font-weight normal
            p
              margin-top 0.4rem
              line-height 2.1rem
              font-size 1.3rem
              color rgba(245, 87, 78, 1)
            .buy-button
              text-align center
              line-height 2.9rem
              margin 0.7rem auto
              width 9.6rem
              height 2.9rem
              color rgba(255, 255, 255, 1)
              background-color rgba(245, 87, 78, 1)
            .tag
              position absolute
              top 0
              left 0
              color rgba(255, 255, 255, 1)
              background-color rgba(236, 52, 96, 1)
              line-height 2.4rem
              font-size 1.3rem
              width 6.7rem
              height 2.4rem
        .good-max
          height: 34.9rem
          width 36.1rem
          margin 0 auto 0.5rem auto
          background-color rgba(255, 255, 255, 1)
          position relative
          img
            margin-bottom 1.4rem
            width 36.1rem
            height 26.8rem
          .good-message
            display inline-block
            text-align left
            width 21.7rem
            h2
              font-size 1.8rem
              line-height 2.8rem
            h4
              font-size 1.3rem
              line-height 1.8rem
              font-weight normal
          .good-price
            display inline-block
            width 11.1rem
            text-align right
            p
              line-height 2.1rem
              color rgba(245, 87, 78, 1)
              font-size 1.6rem
            .buy-button
              text-align center
              font-size 1.3rem
              line-height 2.9rem
              height 2.9rem
              color rgba(255, 255, 255, 1)
              background-color rgba(245, 87, 78, 1)
          .tag-hot
            position absolute
            top 0
            left 0
            color rgba(255, 255, 255, 1)
            background-color rgba(236, 52, 96, 1)
            line-height 2.4rem
            font-size 1.3rem
            width 6.7rem
            height 2.4rem
          .tag-discount
            line-height: 130%;
            position absolute
            top 19.5rem
            left 28.9rem
            background-color rgba(245, 87, 78, 1)
            font-size 1.4rem
            font-weight bold
            box-sizing border-box
            padding 0 0.5rem
            color rgba(255, 255, 255, 1)
            border-radius 50%
            width 5.6rem
            height 5.6rem
        .good-strategy
          background-color rgba(245, 87, 78, 1)
          height 10.3rem
          width 36.1rem
          margin 0.5rem auto 0 auto
          display flex
          justify-content center
          align-items center
          .icon1
            display inline-block
            width 5.6rem
            height 5.6rem
            color rgba(255, 255, 255, 1)
          .good-strategy-message
            display inline-block
            width 18.9rem
            height 5.6rem
            position relative
            padding-left 1.3rem
            h1
              font-size 1.8rem
              line-height 2.8rem
              text-align left
              color rgba(255, 255, 255, 1)
            .icon2
              width 1.9rem
              height 1.9rem
              border-radius 50%
              position absolute
              top 3.3rem
              left 12.6rem
              background-color rgba(255, 255, 255, 1)

      .goods-bgcolor
        padding-bottom 0rem
        background-color rgba(255, 195, 191, 1)
        .discounts
          height 9.1rem
          width 36.1rem
          margin 0 auto 0.5rem auto
          background-size 36.1rem 9.1rem
          background-image url("discounts.jpg")
          .buy-button
            position relative
            left 23.4rem
            top 0.6rem
            background-color rgba(245, 197, 172, 1)
            font-size 1.3rem
            color rgba(172, 128, 85, 1)
            line-height 2.9rem
            height 2.9rem
            width 11.1rem
          h2
            padding 1.1rem 1.6rem 0 0
            text-align right
            line-height 3.7rem
            color rgba(255, 255, 255, 1)
            font-size 1.5rem
        .foot-pic
          height 31rem
          width 36,1rem
          background-size 36.1rem
          background-image url("./foot-pic.jpg")
</style>

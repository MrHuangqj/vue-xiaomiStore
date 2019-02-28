<template>
  <div class="app-wrapper">
    <div id="app">
      <router-view/>
      <bottom-bar></bottom-bar>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BottomBar from 'components/bottom-navigation-bar/bottom-navigation-bar'
export default {
  name: 'App',
  components: {
    BottomBar
  }
}
</script>

<style>

html, body, div,iframe, p, ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, form, input, select, button, textarea, iframe, table, th, td {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-wrapper{
  margin: 0 auto;
  width: 37.5rem;
}
</style>

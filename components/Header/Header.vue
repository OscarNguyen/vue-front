<template>
  <nav class="root">
    <nuxt-link to="/">
      Vue App
    </nuxt-link>

    <div class="links-container">
      <nuxt-link to="/news">
        News
      </nuxt-link>
      <nuxt-link to="/about-us">
        About us
      </nuxt-link>
      <nuxt-link to="/contact">
        Contact us
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../static/asset/style/default.scss';
.root{
  display: flex;
  justify-content: space-between;
  padding:  32px;
  background:$secondary-color;
  box-shadow: 0px 0px 12px #333;
  a{
    text-decoration: none;
    text-transform: uppercase;
    color:$primary-color;
    font-weight: 500;
  }

}
.links-container{
  a{
    margin:0 16px;
  }
  a:first-child{
    margin-left: 0;
  }
  a:last-child{
    margin-right: 0;
  }

}
</style>

<template>
  <div>
    <Header />
    <b-button class="primary-btn refresh-btn" @click="refresh">
      <b-icon icon="arrow-clockwise" />
    </b-button>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    refresh () {
      this.$nuxt.refresh()
    }
  }
}
</script>
<style lang="scss">
@import '../static/asset/style/default.scss';
.refresh-btn{
  position: fixed;
  bottom:8px;
  right:8px
}
.primary-btn{
   display:block;
    border-color:$primary-color;
    color:$primary-color;
    background:#fff
}
.left-btn-container{
  text-align: -webkit-left ;

}
.right-btn-container{
  text-align: -webkit-right ;

}
.center-btn-container{
  text-align: -webkit-center ;

}
.form-control,.form-group{
  border-color:#5d8233;

  label,small{
    color:#5d8233 !important
  }
}
.spinner {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 10rem;
  height: 10rem;
  color: $primary-color !important;
}

</style>

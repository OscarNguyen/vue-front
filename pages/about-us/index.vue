<template>
  <div class="root">
    <!-- <b-spinner v-if="$fetchState.pending" class="spinner" /> -->

    <!-- <div v-else> -->
    <div>
      <BaseCard v-html="content" />
      <div class="center-btn-container">
        <b-button class="primary-btn" @click="toUpdatePage">
          Update
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     content: ''
  //   }
  // },
  // async fetch () {
  //   const result = await this.$axios.get(`${this.$axios.defaults.baseURL}page/about-us`)
  //   console.log(result)
  //   this.content = result.data.content
  // },
  async asyncData ({ $axios }) {
    const result = await $axios.get(`${$axios.defaults.baseURL}page/about-us`)
    console.log(result)
    return {

      content: result.data.content
    }
  },
  mounted () {
    console.log(this.$fetchState)
  },
  methods: {
    toUpdatePage () {
      this.$router.push('/about-us/update-page')
    }

  }
}
</script>

<style lang="scss" scoped>
.root{
  width:80%;
  margin:54px auto;
  padding:8px
}
</style>

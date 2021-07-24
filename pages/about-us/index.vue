<template>
  <div class="root">
    <b-spinner v-if="$fetchState.pending" class="spinner" />

    <BaseCard v-else v-html="content" />
    <div class="center-btn-container">
      <b-button class="primary-btn" @click="toUpdatePage">
        Update
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  async fetch () {
    const result = await this.$axios.get('http://localhost:8080/api/page/about-us')
    console.log(result)
    this.content = result.data.content
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

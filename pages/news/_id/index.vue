<template>
  <div>
    <b-spinner v-if="$fetchState.pending" class="spinner" variant="warning" />
    <div v-else>
      <h1>{{ newsItem.title }}</h1>

      <BaseCard>
        <div v-html="newsItem.body" />
      </BaseCard>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      newsItem: null
    }
  },
  async fetch () {
    const result = await this.$axios.get(`http://localhost:8080/api/news/${this.$route.params.id}`)
    console.log(result.data)
    this.newsItem = result.data
  },
  mounted () {
    console.log(this.$route.params.id)
  }

}
</script>

<style lang="scss" scoped>
@import "@/static/asset/style/default.scss";

h1{
  text-align: center;
  color:$primary-color;
  margin-bottom: 5rem;
}
.root{
  width:70%;
  min-height:50%;
  margin:0 auto;
  padding:16px
}
</style>

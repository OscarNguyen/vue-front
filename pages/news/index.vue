<template>
  <div class="news-root">
    <BaseCard class="btn-card">
      <!-- <b-button class="primary-btn">
        Create article
      </b-button> -->
      <nuxt-link to="/news/create">
        Create article
      </nuxt-link>
    </BaseCard>
    <b-spinner v-if="$fetchState.pending" class="spinner" />
    <div v-else class="news-container">
      <BaseCard v-for="item of news" :key="item.id" class="card">
        <h3>{{ item.title }}</h3>
        <p v-html="shortText(item.body)" />
        <div>
          <b-button variant="success" @click="goToViewPage(item._id)">
            View
          </b-button>
          <b-button variant="warning" @click="goToUpdatePage(item._id)">
            Update
          </b-button>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: []
    }
  },
  async fetch () {
    const result = await this.$axios.get('http://localhost:8080/api/news/')
    console.log(result)
    this.news = result.data
  },
  watch: {
    '$route.path': '$fetch'
  },
  beforeMount () {
    console.log('fetch')
    console.log(this.$router)
    this.$router.app.refresh()
    this.$fetch()
    this.$nuxt.refresh()
  },
  mounted () {
    console.log(this.$nuxt)
    this.$nuxt.refresh()
  },
  created () {
    this.$nuxt.refresh()
  },
  methods: {
    shortText (text) {
      const indexOfDot = text.indexOf('.')
      return text.substring(0, indexOfDot)
    },
    goToViewPage (id) {
      this.$router.push(`/news/${id}`)
    },
    goToUpdatePage (id) {
      this.$router.push(`/news/${id}/update-page`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/static/asset/style/default.scss";

.btn-card{
  padding:16px;
  margin: 0 32px;
  a{
    text-decoration: none;
    color:$primary-color;
    font-weight: 500;
    padding:8px

  }
  a:hover{
    background:#ccc;
    padding:8px;
    border-radius: 6px;

  }
}
.news-root{
  margin: 5% auto;
   width: 70%;

}
.primary-btn{
  margin-left: 16px;
}
.card{
  padding:16px;
  margin-bottom: 32px;
  width:30%;
  p{
    flex:1
  }
}
.news-container{
  padding:32px;
  display:flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
}
</style>

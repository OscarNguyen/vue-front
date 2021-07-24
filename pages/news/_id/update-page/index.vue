<template>
  <div>
    <b-spinner v-if="$fetchState.pending" class="spinner" variant="warning" />

    <QuillEditor v-else :data="returnedData" title="Update news" type="news" />
  </div>
</template>

<script>
import QuillEditor from '@/components/QuillEditor/QuillEditor.vue'
export default {
  components: {
    QuillEditor
  },
  layout: 'update-page',

  data () {
    return {
      returnedData: {}
    }
  },
  async fetch () {
    const result = await this.$axios.get(`http://localhost:8080/api/news/${this.$route.params.id}`)
    this.returnedData = result.data
  },
  mounted () {
    console.log(this.$route.params)
  }

}
</script>

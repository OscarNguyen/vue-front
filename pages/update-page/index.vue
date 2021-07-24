<template>
  <div>
    <b-spinner v-if="$fetchState.pending" class="spinner" variant="warning" />

    <QuillEditor v-else :data="content && content" type="homepage" />
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
      content: ''
    }
  },
  async fetch () {
    const result = await this.$axios.get('http://localhost:8080/api/page/homepage')
    console.log(result)
    this.content = result.data.content
  }

}
</script>

<style lang="scss" scoped>

</style>

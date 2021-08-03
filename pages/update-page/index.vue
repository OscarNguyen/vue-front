<template>
  <div>

    <QuillEditor :data="content && content" type="homepage" />
  </div>
  <!-- <div>
    <b-spinner v-if="$fetchState.pending" class="spinner" variant="warning" />

    <QuillEditor v-else :data="content && content" type="homepage" />
  </div> -->
</template>

<script>
import QuillEditor from '@/components/QuillEditor/QuillEditor.vue'
export default {
  components: {
    QuillEditor
  },
  layout: 'update-page',
  async asyncData ({ $axios }) {
    const result = await $axios.get(`${$axios.defaults.baseURL}page/homepage`)
    console.log(result)
    return {

      content: result.data.content
    }
  }
  // data () {
  //   return {
  //     content: ''
  //   }
  // },
  // async fetch () {
  //   const result = await this.$axios.get(`${this.$axios.defaults.baseURL}page/homepage`)
  //   console.log(result)
  //   this.content = result.data.content
  // }

}
</script>

<style lang="scss" scoped>

</style>

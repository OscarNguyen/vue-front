<template>
  <!-- <div>
    <b-spinner v-if="$fetchState.pending" class="spinner" variant="warning" />

    <QuillEditor v-else :data="content" type="about-us" />
  </div> -->
  <div>
    <QuillEditor :data="content" type="about-us" />
  </div>
</template>

<script>
import QuillEditor from '@/components/QuillEditor/QuillEditor.vue'
export default {
  components: {
    QuillEditor
  },
  layout: 'update-page',
  // data () {
  //   return {
  //     content: ''
  //   }
  // },
  async asyncData ({ $axios }) {
    const result = await $axios.get(`${$axios.defaults.baseURL}page/about-us`)
    console.log(result)
    return {

      content: result.data.content
    }
  }
  // async fetch () {
  //   const result = await this.$axios.get(`${this.$axios.defaults.baseURL}page/about-us`)
  //   console.log(result)
  //   this.content = result.data.content
  // }
}
</script>

<style lang="scss" scoped>

</style>

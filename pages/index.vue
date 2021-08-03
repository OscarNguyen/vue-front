<template>
  <div class="root">
    <div>
      <BaseCard v-html="content" />
      <div class="center-btn-container">
        <b-button class="primary-btn" @click="toUpdatePage">
          Update
        </b-button>
      </div>
    </div>
    <!-- <b-spinner v-if="$fetchState.pending" class="spinner" />
    <div v-else>
      <BaseCard v-html="content" />
      <div class="center-btn-container">
        <b-button class="primary-btn" @click="toUpdatePage">
          Update
        </b-button>
      </div>
    </div> -->

    <!-- <no-ssr>
        <quill-editor
          ref="myQuillEditor"
          :options="editorOption"
          v-model="editorContent"
          v-if="openUpdate"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></quill-editor>
      </no-ssr> -->
  </div>
</template>

<script>
// import Quill from 'quill'
// import CodeBlock from 'quill/formats/code'
import BaseCard from '../components/BaseCard/BaseCard.vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import editor from '@morioh/v-quill-editor'

// import QuillEditor from '../components/QuillEditor/'
//  import { quillEditor } from 'vue-quill-editor'

// Quill.register({ 'formats/code-block': CodeBlock }, true)
export default {
  components: {
    BaseCard

    // QuillEditor
    // quillEditor
    // "quill-editor":quillEditor
  },
  // data () {
  //   return {
  //     content: ''
  //   }
  // },
  // async fetch () {
  //   const result = await this.$axios.get(`${this.$axios.defaults.baseURL}page/homepage`)
  //   console.log(result)
  //   this.content = result.data.content
  // },
  async asyncData ({ $axios }) {
    const result = await $axios.get(`${$axios.defaults.baseURL}page/homepage`)
    // console.log(result)
    console.log('index page')
    return {

      content: result.data.content
    }
  },
  mounted () {
    // this.getContent()
    // this.fetch()
    // console.log(this.$fetchState)
    // console.log(process.env.PROXY_API)
    // console.log(process.env.PORT)
    // console.log('cc')
    // console.log(this)
    // console.log(this.$axios.defaults)
  },

  methods: {
    toUpdatePage () {
      this.$router.push('/update-page')
    }
    // async getContent () {
    //   const result = await this.$axios.get('http://localhost:8080/api/page/homepage')
    //   console.log(result)
    //   this.content = result.data.content
    // }

  }
}
</script>

<style scoped lang="scss">
@import '../static/asset/style/default.scss';

.root{
    width:60%;
    margin:54px auto;
    padding:12px;

}

</style>

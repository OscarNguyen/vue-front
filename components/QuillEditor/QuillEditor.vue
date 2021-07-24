<template>
  <div>
    <h1>{{ title }}</h1>
    <form action="" @submit.prevent="onSubmitEditor">
      <div class="quill-container">
        <b-form-group v-if="type==='news'" label="Title" label-for="title-input">
          <b-form-input id="title-input" v-model="header" type="text" placeholder="Please enter your title" required />
        </b-form-group>
        <b-form-group :label="title==='Update Page'?'':'Body'" label-for="body-input">
          <div
            id="body-input"
            ref="myQuillEditor"
            v-quill:myQuillEditor="editorOption"
            class="quill-editor"
            :content="editorContent"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
            @change="onEditorChange($event)"
          />
        </b-form-group>
        <b-button class="primary-btn" type="submit">
          Submit
        </b-button>
        <b-button variant="warning" @click="onCancel">
          Cancel
        </b-button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,

      default: 'Update Page'
    },
    type: {
      type: String,
      required: true
    },
    data: {
      type: [Object, String],
      required: false,
      default: null
    }
  },
  data () {
    return {
      editorOption: {
        // Some Quill options...

        placeholder: this.editorContent || 'Please put something',
        theme: 'snow',
        modules: {

          toolbar: [
            // [{ header: 1 }, { header: 2 }],
            // ['bold', 'italic', 'underline', 'strike', 'script', 'font', 'color', 'background', 'code', 'link', 'size'],
            // ['blockquote', 'code-block', 'header', 'indent', 'list', 'align', 'direction']
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction

            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ['clean']
          ]
        }
      },
      editorContent: '',
      editorObject: [],
      attribute: [],
      openUpdate: false,
      header: ''
    }
  },
  mounted () {
    console.log(this.title)
    if (typeof this.data === 'object') {
    // console.log(this.data)
    // console.log(this.data.body)
    // if (this.data.body) {
    //   if (this.data.title) {
    //     this.header = this.data.title
    //   }
    //   this.editorContent = this.data.body
    // }

      // console.log(this.editorContent)
      this.header = this.data.title ? this.data.title : ''
      this.editorContent = this.data.body ? this.data.body : ''
    } else if (typeof this.data === 'string') {
      this.editorContent = this.data
    }
  },
  methods: {
    onEditorBlur (quill) {
      console.log('editor blur!', quill)
      console.log(quill.editor.delta.ops)
      this.editorObject.push(quill.editor.delta.ops)
      // this.editorContent = quill.editor.delta.ops.data[0].insert
    },
    onEditorFocus (quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady (quill) {
      console.log('editor ready!', quill)
    },
    // onEditorChange ({ quill, html, text }) {
    onEditorChange ({ quill, html }) {
      // console.log('editor change!', quill, html, text)
      console.log('editor change!', html)
      this.editorContent = html
    },
    onCancel () {
      this.$router.back()
    },
    async onSubmitEditor () {
      // const data = this.$refs.myQuillEditor.__quill.editor.delta.ops
      // console.log(this.editorObject)
      // console.log(this.$refs.myQuillEditor.__quill.editor.delta.ops)
      // this.content = data[0].insert
      console.log(this.editorContent)
      if (this.type === 'news' && this.$route.params.id) {
        await this.$axios.put('http://localhost:8080/api/news/update', {
          id: this.$route.params.id,
          title: this.header,
          body: this.editorContent
        })
      } else if (this.type === 'news' && !this.$route.params.id) {
        await this.$axios.post('http://localhost:8080/api/news/create', { title: this.header, body: this.editorContent })
      } else {
        await this.$axios.put('http://localhost:8080/api/page/update', { type: this.type, content: this.editorContent })
      }
      this.$router.back()
      // if (this.type === 'homepage') {
      //   this.$router.push('/')
      // } else if (this.type === 'news') {
      //   // this.$router.back()
      //   this.$router.push('/news')
      // } else {
      //   this.$router.push('/about-us')
      // }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/static/asset/style/default.scss";

h1{
  margin-left: 32px;
  margin-top: 24px;
}
.quill-container{

      margin:24px 32px;
    .quill-editor{
    // border-top: 1px solid #ccc !important;
    width: 100%;
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
    }
  input{
    border-color: #ccc;
  }
    button{
      margin-left: 0;
      margin-top: 24px;
      border-color: #ccc;
    }

  }
</style>

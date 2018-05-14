<template>
  <div class="main" v-show="id">
    <div class="ly mb-10">
      <el-button type="primary">复制</el-button>
    </div>
    <pre v-html="highlight(snippentContent, this.language)"/>
  </div>
</template>

<script>
import Prism from 'prismjs'

const snippents = {
  'html/a': require('@/codes/html/a.txt'),
  'html/entity': require('@/codes/html/entity.txt'),
  'html/img-placeholder': require('@/codes/html/img-placeholder.txt'),

  'css/media': require('@/codes/css/media.txt'),
  'css/animate': require('@/codes/css/animate.txt'),
  'css/flex': require('@/codes/css/flex.txt'),

  'js/json': require('@/codes/js/json.txt'),
  'js/guid': require('@/codes/js/guid.txt'),

  'DOM&BOM/event': require('@/codes/DOM&BOM/event.txt'),
  'DOM&BOM/get-url-query-object': require('@/codes/DOM&BOM/get-url-query-object.txt'),
  'DOM&BOM/img-w-h': require('@/codes/DOM&BOM/img-w-h.txt'),
  'DOM&BOM/page-w-h': require('@/codes/DOM&BOM/page-w-h.txt'),

  'jquery/overview': require('@/codes/jquery/overview.txt'),
  'jquery/ajax': require('@/codes/jquery/ajax.txt'),

  'vue/vue-router': require('@/codes/vue/vue-router.txt'),
  'vue/vuex': require('@/codes/vue/vuex.txt'),
}

var code
export default {
  props: {
    id: null,
    language: {
      type: String,
      default: 'javascript'
    }
  },
  computed: {
    snippentContent() {
      if(!this.id) {
        return ''
      }
      return snippents[this.id]
    }
  },
  data() {
    return {
    }  
  },
  methods: {
    highlight(code, language) {
      return Prism.highlight(code, Prism.languages[language], language)
    },
  }
}
</script>
<style src="prismjs/themes/prism.css"></style>
<style scoped>
  .main {
    flex-grow: 1;
    padding: 0 20px;
  }
</style>
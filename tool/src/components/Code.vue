<template>
  <div class="main">
    <pre v-html="highlight(jsonParse)"/>
  </div>
</template>

<script>
import Prism from 'prismjs'
import jsonParse from '@/codes/js/json-parse.txt'
console.log(jsonParse)
export default {
  data() {
    return {
      jsonParse: jsonParse.toString()
    }  
  },
  methods: {
    highlight() {
      return Prism.highlight(jsonParse, Prism.languages.javascript, 'javascript')
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
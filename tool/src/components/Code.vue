<template>
  <div class="main">
    {{jsonParse}}
  </div>
</template>

<script>
import jsonParse from '@/codes/js/json-parse.txt'
console.log(jsonParse)
export default {
  data() {
    return {
      jsonParse: jsonParse.toString()
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .main {
    flex-grow: 1;
    padding: 0 20px;
  }
</style>
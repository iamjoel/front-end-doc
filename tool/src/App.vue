<template>
  <div id="app">
    <div></div>
    <el-menu mode="horizontal">
      <el-menu-item index="1">代码片段</el-menu-item>
    </el-menu>
    <div class="ly">
      <Nav @change="currSnippentChange"/>
      <Code :id="currSnippent.id" :language="currSnippent.language" />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Code from './components/Code'

export default {
  name: 'App',
  components: {
    Nav,
    Code
  },
  data() {
    return {
      currSnippent: {}
    }
  },
  methods: {
    currSnippentChange(data) {
      this.currSnippent = data
    }
  }
}
</script>
<style>
  * {
    margin: 0;
  }
</style>
<style src="css-utils-collection"></style>

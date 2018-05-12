<template>
  <div id="app">
    <div class="ly">
      <Nav/>
      <Code classify="js" name="xx" />
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
  }
}
</script>
<style>
  * {
    margin: 0;
  }
</style>
<style src="css-utils-collection"></style>

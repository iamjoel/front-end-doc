export default { 
  title: 'DOM&BOM/获取图片的实际宽高',
}

export const Main = () => ({
  data() {
    return {
      src: 'http://cn.vuejs.org/images/logo.png',
      size: {width: null, height: null}
    }
  },
  methods: {
    getImageHAndW(url) {
      let vm = this
      let image = new Image()
      image.src = url
      if (image.complete) {
        imageLoaded()
      } else {
        image.onload = imageLoaded
      }
      function imageLoaded() {
        vm.size = {
          width: image.width + 'px',
          height: image.height + 'px'
        }
      }
    }
  },
  mounted() {
    this.getImageHAndW(this.src)
  },
  template: `
<div>
  下图的宽: {{size.width}}, 高: {{size.height}} <br>
  <img :src="src">
</div>
`
})

Main.story = {
  name: '基础用法'
}
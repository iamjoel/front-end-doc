export default { 
  title: 'DOM&BOM/图片上传的预览',
}

export const Main = () => ({
  data() {
    return {
      previewUrl: null
    }
  },
  methods: {
    uploadImg() {
      var file = this.$refs.avtar.files.item(0)
      if(!file) {
        return
      }
      var formData = new FormData()
      formData.append('name', file)
      // 图片预览
      var reader = new FileReader()
      reader.onloadend = () => {
        this.previewUrl = reader.result
      }
      reader.readAsDataURL(file)
    }
  },
  template: `
<div>
  <input type="file" ref="avtar" accept="image/*" class="tpye-file" @change="uploadImg"> 
  <div v-if="previewUrl">
    已上传图片：<img :src="previewUrl"  style="width: 100px;">
  </div>
  <div v-else>未上传图片</div>
</div>
`
})

Main.story = {
  name: '基础用法'
}
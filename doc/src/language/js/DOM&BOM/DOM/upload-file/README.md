# 异步上传图片
## HTML
```html

<input type="file" ref="avtar" accept="image/*" class="tpye-file" @change="uploadImg"> 

```

## 用 Axios
```js
var formData = new FormData();
formData.append('name', this.$refs.avtar.files.item(0))

axios({
  url: 'xxx',
  method: 'post',
  data: formData,
  config: { headers: {'Content-Type': 'multipart/form-data' }}
}).then(({data}) => {
  
}, error => {
  
})
```

## 用 jQuery
```js
var formData = new FormData();
formData.append('name', this.$refs.avtar.files.item(0))

$.ajax({
  url: 'xxx',
  data: formData,
  processData: false,
  contentType: false,
  type: 'post',
  success: function(data) {
      
  }
})
```
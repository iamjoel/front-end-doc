export default { 
  title: 'DOM&BOM/获取URL上的请求参数值',
}

export const Main = () => ({
  data() {
    return {
      url: 'https://github.com/search?l=JavaScript&q=awesome&type=Repositories'
    }
  },
  methods: {
    getQueryObject(url) {
      url = url == null ? window.location.href : url;
      var search = url.substring(url.lastIndexOf("?") + 1);
      var obj = {};
      var reg = /([^?&=]+)=([^?&=]*)/g;
      search.replace(reg, function (rs, $1, $2) {
          var name = decodeURIComponent($1);
          var val = decodeURIComponent($2);
          val = String(val);
          obj[name] = val;
          return rs;
      });
      return obj;
    }
  },
  template: `
<div>
  {{url}} 的请求参数值: <br/>
  {{getQueryObject(url)}}
</div>
`})

Main.story = {
  name: '基础用法'
}


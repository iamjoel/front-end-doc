import doc from './README.md'
import deepJSONParse from './deep-json-parse.js'
export default { 
  title: 'JavaScript/JSON',
  parameters: {
    notes: doc,
  }
}

export const Main = () => ({
  template: `
<div>
  JSON 转 字符串： {{stringify(demoData)}} <br/>
  字符串 转 JSON： {{parse(stringify(demoData))}}
</div>
`,
  data() {
    return {
      demoData: {name: 'Joel'}
    }
  },
  methods: {
    parse(str) {
      return JSON.parse(str)
    },
    stringify(data) {
      return JSON.stringify(data)
    }

  }
})

Main.story = {
  name: '基础用法'
}

export const Deep = () => ({
  template: `
<div>
  Stringify 很多次的字符串转JSON： {{deepJSONParse(demoData)}} <br/>
</div>
`,
  data() {
    return {
      demoData: JSON.stringify(JSON.stringify(JSON.stringify({name: 'Joel'})))
    }
  },
  methods: {
    deepJSONParse(str) {
      return deepJSONParse(str)
    }
  }
})

Deep.story = {
  name: '无限Parse'
}
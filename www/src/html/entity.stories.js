export default { title: 'HTML/转义字符' }

export const Main = () => `
<div>
  空格: &nbsp; <br/>
  <: &lt; <br/>
  >: &gt; <br/>
  &: &amp; <br/>
  ": &quot; <br/>
  ©: &copy; 版权 <br/>
  ®: &reg; 注册商标 <br/>
  ×: &times; <br/>
</div>
`

Main.story = {
  name: '基础用法'
}
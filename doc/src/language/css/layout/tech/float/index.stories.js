import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/布局/技术/浮动',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
    }
  }
}

export const Main = () => `
<div>
  浮动(Float)可用于实现文字环绕效果
  <div style="width: 400px;margin: 0 auto;" class="clearfix">
    <img src="/placeholder/md.png" alt="" style="float: left;width: 80px;margin: 10px 10px 0 0;">
    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam tincidunt mauris eu risus.Vestibulum auctor dapibus neque.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aliquam tincidunt mauris eu risus.
    Vestibulum auctor dapibus neque.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </div>
  </div>
</div>
`

Main.story = {
  name: '基础用法'
}
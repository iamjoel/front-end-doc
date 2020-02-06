import doc from './README.md'
import { withLinks } from '@storybook/addon-links'

export default { 
  title: '常用/1 代码参考',
  decorators: [withLinks],
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div>
  <ul>
    <li>
      <a
        href="javascript:void(0)" 
        data-sb-kind="CSS/布局/技术/1 Flexbox"
        data-sb-story="Main"
      >
        Flex
      </a>
    </li>
  </ul>
</div>
`

Main.story = {
  name: '基础用法'
}
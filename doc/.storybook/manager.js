import { addons } from '@storybook/addons';
// https://storybook.js.org/docs/configurations/options-parameter/
addons.setConfig({
  showRoots: true,
  previewTabs: {
    'storybookjs/notes/panel': {title: '文档', index: 0},
    'canvas': {title: 'Demo', index: 1, hidden: true}, // 交互Demo
    'storybook/docs/panel': {title: 'Demo', index: 2},
  }
})
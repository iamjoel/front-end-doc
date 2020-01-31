export default { title: 'HTML/链接' }

export const Mail = () => `
<div>
  邮件: <a href="mailto:someone@yoursite.com">Email Us</a> <br/>
  带主题的邮件: <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">Email Us</a>
</div>
`

Mail.story = {
  name: '发邮件链接',
}

export const Phone = () => `
<a href="tel:电话号码">联系我们</a>
`

Phone.story = {
  name: '打电话链接',
}
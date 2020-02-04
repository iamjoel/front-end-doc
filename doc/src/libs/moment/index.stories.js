import moment from 'moment'
import doc from './README.md'

export default { 
  title: '第三方库/moment',
  parameters: {
    componentSubtitle: '版本: 2.24.0',
    notes: doc,
  }
}

export const Main = () => ({
  methods: {
    moment
  },
  template: `
<div>
  <a href="https://momentjs.com/docs/">官网</a> <br>
  当前时间: {{moment()}}
</div>
`})

Main.story = {
  name: '创建'
}

export const Format = () => ({
  methods: {
    moment
  },
  template: `
<div>
  年月日 时:分:秒: {{moment().format('YYYY年MM月DD日 HH:mm:ss')}}
</div>
`})

Format.story = {
  name: '格式化'
}

export const ToDate = () => ({
  methods: {
    moment
  },
  template: `
<div>
   {{moment().toDate()}}
</div>
`})

ToDate.story = {
  name: '转化成 Date 对象'
}

export const GetSet = () => ({
  methods: {
    moment
  },
  template: `
<div>
  获得 秒： {{moment().second()}} 设置 秒： {{moment().second(50).second()}} <br/>
  获得 分： {{moment().minute()}} 设置 分： {{moment().minute(50).minute()}} <br/>

  类似的用法：  <br/>
  现在是： {{moment().year()}}年{{moment().month() + 1}}月{{moment().date()}}日 {{moment().hour()}}点<br/>
  星期{{moment().day()}}。<br/>
  今天是今年的第{{moment().quarter()}}季度，第{{moment().week()}}周，第{{moment().dayOfYear()}}天。<br/>
  本月有 {{moment().daysInMonth()}}天。
</div>
`})

GetSet.story = {
  name: '获取/设置时间信息'
}

export const Op = () => ({
  methods: {
    moment
  },
  template: `
<div>
  7天之后是: {{moment().add(7, 'd').format('YYYY-MM-DD')}} <br/>
  7天之前是: {{moment().subtract(7, 'd').format('YYYY-MM-DD')}} <br/>
  本周第一天是： {{moment().startOf('week').format('YYYY-MM-DD')}} <br/>
  本周最后一天是： {{moment().endOf('week').format('YYYY-MM-DD')}}
</div>
`})

Op.story = {
  name: '操作'
}

export const Query = () => ({
  methods: {
    moment
  },
  template: `
<div>
  <h2>早于</h2>
  2010-10-20 早于 2010-10-21: {{moment('2010-10-20').isBefore('2010-10-21')}} <br/>
  2010-10-20 在年的尺度上早于 2010-10-21: {{moment('2010-10-20').isBefore('2010-12-31', 'year')}} <br/>
  <h2>相等</h2>
  2010-10-20 15:10:00 和 2010-10-20 12:00:00 是同一天: {{moment('2010-10-20 15:10:00').isSame('2010-10-20 12:00:00', 'day')}}
  <h2>晚于</h2>
  2010-10-20 晚于 2010-10-21: {{moment('2010-10-20').isAfter('2010-10-21')}} <br/>
  <h2>在时间范围内</h2>
  2010-10-20 在 2010-10-19 和 2010-10-25 之间: {{moment('2010-10-20').isBetween('2010-10-19', '2010-10-25')}}
  <h2>是否是闰年</h2>
  今年是润年：{{moment().isLeapYear()}} <br/>
  2000年是润年：{{moment().year(2000).isLeapYear()}} <br/>
  2001年是润年：{{moment().year(2001).isLeapYear()}} <br/>
  1900年是润年：{{moment().year(1900).isLeapYear()}} <br/>
</div>
`})

Query.story = {
  name: '查询'
}
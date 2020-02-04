# CSS 动画
## 写法
`animation: 动画名称 动画持续时间 动画的速度曲线 延时（可以是负值） 播放次数 播放方向 动画的状态 动画结束后停留状态`  

`@keyframes： {百分数|from|to{属性：值} [,百分数|from|to{属性：值}]* }`  


如

```css
p {
  animation: slidein 3s ease-in 1s;
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

```
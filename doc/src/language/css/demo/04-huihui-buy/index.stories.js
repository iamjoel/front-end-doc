import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/综合Demo/04 惠惠购物助手',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div>
  <header id="header">
    <!-- logo 搜索 用户信息 start -->
    <div class="container">
        <a href="###" class="logo"><img src="http://shared.ydstatic.com/fanxian/5.1.4/images/logo.png" alt=""></a>
        <div class="search wrap">
            <form action="#" method="get">
                <select class="type select">
                    <option name="commodity" value="商品" selected>商品</option>
                    <option name="discount" value="折扣">折扣</option>
                    <option name="shopping" value="购物">购物</option>
                </select>
                <input class="name input" type="text" name="text" placeholder="搜索全网最低价商品">
                <button class="search btn">提交</button>
            </form>
        </div>
        <ul class="user info links">
            <li><a href="###">登录</a></li>
            <li><a href="###">我的账户</a></li>
        </ul>
    </div>
    <!-- logo 搜索 用户信息 end -->
    <!-- 菜单导航 start -->
    <div class="menu wrap">
      <div class="container">
          <ul id="main-menu">
              <li class="current nav"><a href="###">首页</a></li>
              <li class="nav"><a href="###">逛折扣</a></li>
          </ul>
          <ul class="share links">
              <li class="link"><a href="###">超值爆料</a></li>
              <li class="link"><a href="###">经验晒单</a></li>
          </ul>
      </div>
    </div>
    <!-- 菜单导航 end -->
    <div id="main" class="container">
      <!-- 商品详情 start -->
        <div id="item-detail">
            <div class="header">
                <h2 class="title"><a href="###">【03.12白菜价】  美味零食 9.9元之类的全都在这里！</a></h2>
                <strong class="time">每日12点更新</strong>
                <div class="infos">
                    <span class="info">慧慧网爆料达人们</span>
                    <span class="info">3小时前</span>
                    <span class="info">其他类别</span>
                    <span class="info">4000次评论</span>
                </div>
            </div>
            <div class="content">
                <p>
                    白菜价每天中午12点，不见不散。已经有越来越多的惠友们开始关注白菜价栏目了，首先非常感谢诸惠友的一路支持，是你们的激励让小编坚持每天种白菜，只为把最新鲜的白菜呈现给大家。希望白菜君可以在惠友们的支持下茁壮成长。为了让大家吃上“特供白菜”，大家可以留言并 ª白菜小编，写明自己需要的品类，小编会为各位随时关注相关小白菜，次日可能会出现在白菜价中哦~
                </p>
            </div>
            <div class="others">
                <h3>今日为大家收集的有：</h3>
                <ul class="goodss">
                    <li class="goods item">
                        <img alt="" src="http://oimagec5.ydstatic.com/image?product=gouwu&amp;url=http%3A%2F%2Fgi4.md.alicdn.com%2Fbao%2Fuploaded%2Fi4%2FTB1zzjrFFXXXXcRXFXXXXXXXXXX_%21%210-item_pic.jpg_430x430q90.jpg&amp;quality=90&amp;w=198&amp;h=198">
                        <div class="name">【天猫】3M 口罩 <strong>2.6元包邮</strong></div>
                        <div class="detail">
                            <strong>一针溅血</strong>：采用高静电纤维面料，呼吸阻力小，防护效果好，头戴耳挂式，带金属鼻梁片，佩戴舒适、严密。
                        </div>
                    </li>
                    <li class="goods item">
                        <img alt="" src="http://oimagec5.ydstatic.com/image?product=gouwu&amp;url=http%3A%2F%2Fgi4.md.alicdn.com%2Fbao%2Fuploaded%2Fi4%2FTB1zzjrFFXXXXcRXFXXXXXXXXXX_%21%210-item_pic.jpg_430x430q90.jpg&amp;quality=90&amp;w=198&amp;h=198">
                        <div class="name">【天猫】3M 口罩 <strong>2.6元包邮</strong></div>
                        <div class="detail">
                            <strong>一针溅血</strong>：采用高静电纤维面料，呼吸阻力小，防护效果好，头戴耳挂式，带金属鼻梁片，佩戴舒适、严密。
                        </div>
                    </li>
                    <li class="goods item">
                        <img alt="" src="http://oimagec5.ydstatic.com/image?product=gouwu&amp;url=http%3A%2F%2Fgi4.md.alicdn.com%2Fbao%2Fuploaded%2Fi4%2FTB1zzjrFFXXXXcRXFXXXXXXXXXX_%21%210-item_pic.jpg_430x430q90.jpg&amp;quality=90&amp;w=198&amp;h=198">
                        <div class="name">【天猫】3M 口罩 <strong>2.6元包邮</strong></div>
                        <div class="detail">
                            <strong>一针溅血</strong>：采用高静电纤维面料，呼吸阻力小，防护效果好，头戴耳挂式，带金属鼻梁片，佩戴舒适、严密。
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      <!-- 商品详情 end -->

      <aside class="sides">
        <div class="recommend side box">
          <h3 class="title">您也可能感兴趣</h3>
          <ul class="goodss">
            <li class="goods item clearfix">
              <img src="http://oimageb3.ydstatic.com/image?id=-6934824064919065331&product=gouwu&w=50" alt="">
              <div class="describe">
                <a href="###">【惠海淘】Adidas 阿迪达斯 Bbadidas 男士时尚运动板鞋</a>
                <small class="read num">浏览3000次</small>
              </div>
            </li>
            <li class="goods item clearfix">
              <img src="http://oimageb3.ydstatic.com/image?id=-6934824064919065331&product=gouwu&w=50" alt="">
              <div class="describe">
                <a href="###">【惠海淘】Adidas 阿迪达斯 Bbadidas 男士时尚运动板鞋</a>
                <small class="read num">浏览3000次</small>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </header>
</div>
`

Main.story = {
  name: 'Demo'
}

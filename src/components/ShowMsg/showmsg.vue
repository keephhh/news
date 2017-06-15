<template lang="html">
  <div class="container">
    <div class="message" :style="{backgroundColor:$store.state.color}">
      <div class="msg">
        <h2>胡浩浩</h2>
        <div class="target">
            <h3>求职意向：</h3>
            <p>web前端实习生</p>
        </div>
        <div class="background">
          个人信息：
          <p>学校：东华理工大学</p>
          <p>专业：软件工程(本科)</p>
          <p>年级：大三</p>
          <p>个人网站：<a href="https://keephhh.com" target="_blank">牧码人</a></p>
          <p>电话：15717006321</p>
        </div>
      </div>
      <div class="more">
        <p class="aa">其他信息：</p>
        <p class="bb">掘金栏：<a href="https://juejin.im/user/5901fc1d61ff4b00668e1a92" target="_blank">keephhh</a></p>
        <p class="bb">github：<a href="https://github.com/keephhh" target="_blank">keephhh</a></p>
        <p class="bb">QQ：2279356768</p>
        <p class="bb">邮箱：keephhh@126.com</p>
      </div>
    </div>
    <div class="production">
      <div class="prox">
        <div class="top">
          <img src="../../pic/jishu.png" alt="">
          <p class="pro_1">技术栈</p>
        </div>
        <div class="bottom">
          <p class="bat">【前端】Vue.js、CSS/CSS3、HTML/HTML5、JavaScript(ES6、ES5)、SASS(SCSS)、stylus、微信小程序、Socket.io</p>
          <p class="bat">【后端】Node.js(Express.js)</p>
          <p class="bat">【自动化构建】Webpack、Gulp</p>
          <p class="bat">【版本管理】Git</p>
        </div>
      </div>
      <div class="proy">
        <div class="top">
          <img src="../../pic/zuopin.png" alt="">
          <p class="pro_1">作品</p>
        </div>
        <div class="bottom">
          vue.js全家桶打造的一款云新闻
        </div>
      </div>
      <div class="summary">
        <div class="top">
          <img src="../../pic/my_1.png" alt="">
          <p class="pro_1">简介</p>
        </div>
        <div class="bottom">
          &nbsp &nbsp&nbsp &nbsp我是一个软件工程专业的学生，在校学习了多门编程语言，本人爱好编程。有着较强的学习能力
          ，喜欢逛技术网站，爱好新技术，有良好的团队协作能力和沟通能力，希望找到一个喜欢的公司从实习开始做起。一直学习下去。
          坚信一句话，做人不将就，代码亦是如此！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showMsg',
  data () {
    return {

    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/showmsg.scss";
</style>

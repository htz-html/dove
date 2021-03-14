<template>
  <div>
    <h3>常见的页面布局</h3>
    <div style="height: 400px;">
      <g-layout style="height: 100%;">
        <g-header></g-header>
        <g-content></g-content>
        <g-footer></g-footer>
      </g-layout>
    </div>
    <pre>{{content1}}</pre>
    <div style="margin-top:20px"></div>
    <div style="height: 400px;">
      <g-layout style="height: 100%;">
        <g-header></g-header>
        <g-layout>
          <g-sider></g-sider>
          <g-content></g-content>
        </g-layout>
        <g-footer></g-footer>
      </g-layout>
    </div>
    <pre>{{content2}}</pre>
    <div style="margin-top:20px"></div>
    <div style="height: 400px;">
      <g-layout style="height: 100%;">
        <g-header></g-header>
        <g-layout>
          <g-content></g-content>
          <g-sider></g-sider>
        </g-layout>
        <g-footer></g-footer>
      </g-layout>
    </div>
    <pre>{{content3}}</pre>
  </div>
</template>
<script>
import Layout from '../../../src/layout'
import Content from '../../../src/content'
import Footer from '../../../src/footer'
import Sider from '../../../src/sider'
import Header from '../../../src/header'
export default {
  components:{
    'g-layout': Layout,
    'g-content': Content,
    'g-footer': Footer,
    'g-sider': Sider,
    'g-header': Header
  },
  data(){
    return{
      content1: `
      <g-layout style="height: 100vh;">
        <g-header></g-header>
        <g-content></g-content>
        <g-footer></g-footer>
      </g-layout>
      `,
      content2: `
      <g-layout style="height: 100vh;">
        <g-header></g-header>
        <g-layout>
          <g-sider></g-sider>
          <g-content></g-content>
        </g-layout>
        <g-footer></g-footer>
      </g-layout>
      `,
      content3: `
      <g-layout style="height: 100vh;">
        <g-header></g-header>
        <g-layout>
          <g-content></g-content>
          <g-sider></g-sider>
        </g-layout>
        <g-footer></g-footer>
      </g-layout>
      `,
    }
  }
}
</script>
<style lang="scss" scoped>
.content pre{background:rgb(233, 243, 239);}
</style>
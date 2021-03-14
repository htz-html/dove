<template>
  <div>
    <h3>基本用法</h3>
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="减少 HTTP 请求" name="1">
        Queueing: 在请求队列中的时间。
      </g-collapse-item>
      <g-collapse-item title="使用 HTTP2" name="2">
        解析速度快，多路复用，首部压缩
      </g-collapse-item>
      <g-collapse-item title="使用服务端渲染" name="3">
        获取 HTML 文件，根据需要下载 JavaScript 文件，运行文件，生成 DOM，再渲染。
      </g-collapse-item>
    </g-collapse>
    <pre>{{content1}}</pre>
    <h3>手风琴效果</h3>
    <p>每次只能展开一个面板</p>
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="减少 HTTP 请求" name="1">
        Queueing: 在请求队列中的时间。
      </g-collapse-item>
      <g-collapse-item title="使用 HTTP2" name="2">
        解析速度快，多路复用，首部压缩
      </g-collapse-item>
      <g-collapse-item title="使用服务端渲染" name="3">
        获取 HTML 文件，根据需要下载 JavaScript 文件，运行文件，生成 DOM，再渲染。
      </g-collapse-item>
    </g-collapse>
    <pre>{{content2}}</pre>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem
  },
  data(){
    return{
      selectedTab: ['1'],
      content1: `
  <g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="减少 HTTP 请求" name="1">
      Queueing: 在请求队列中的时间。
    </g-collapse-item>
    <g-collapse-item title="使用 HTTP2" name="2">
      解析速度快，多路复用，首部压缩
    </g-collapse-item>
    <g-collapse-item title="使用服务端渲染" name="3">
      获取 HTML 文件，根据需要下载 JavaScript 文件，运行文件，生成 DOM，再渲染。
    </g-collapse-item>
  </g-collapse>
  `,
      content2: `
  <g-collapse :selected.sync="selectedTab" single>
    <g-collapse-item title="减少 HTTP 请求" name="1">
      Queueing: 在请求队列中的时间。
    </g-collapse-item>
    <g-collapse-item title="使用 HTTP2" name="2">
      解析速度快，多路复用，首部压缩
    </g-collapse-item>
    <g-collapse-item title="使用服务端渲染" name="3">
      获取 HTML 文件，根据需要下载 JavaScript 文件，运行文件，生成 DOM，再渲染。
    </g-collapse-item>
  </g-collapse>
  `
    }
  }
}
</script>
<style lang="scss" scoped>
  .content pre{background:rgb(233, 243, 239);}
</style>
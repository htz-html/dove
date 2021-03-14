<template>
  <div>
    <h3>基础用法</h3>
    <g-popover>
      <template slot="content">
        <div>我是被弹出的内容，加油吧！少年！我们是最棒的</div>
      </template>
      <g-button>click 激活</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <template slot="content">
        <div>我是被弹出的内容</div>
      </template>
      <g-button>hover 激活</g-button>
    </g-popover>
    <pre>{{content1}}</pre>
    <div style="marigin-top:40px"></div>
    <h3>选择方向</h3>
    <g-popover>
      <template slot="content">
        <div>我是被弹出的内容</div>
      </template>
      <g-button>click 向上</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>我是被弹出的内容</div>
      </template>
      <g-button>click 向下</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template slot="content">
        <div>我是被弹出的内容</div>
      </template>
      <g-button>hover 向右</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="content">
        <div>我是被弹出的内容</div>
      </template>
      <g-button>hover 向左</g-button>
    </g-popover>
    <pre>{{content2}}</pre>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'

export default {
  components:{
    'g-button': Button,
    'g-popover': Popover
  },
  data(){
    return{
      content1: `
  <g-popover>
    <template slot="content">
      <div>我是被弹出的内容，加油吧！少年！我们是最棒的</div>
    </template>
    <g-button>click 激活</g-button>
  </g-popover>
  <g-popover trigger="hover">
    <template slot="content">
      <div>我是被弹出的内容</div>
    </template>
    <g-button>hover 激活</g-button>
  </g-popover>
`,
      content2: `
  <g-popover>
    <template slot="content">
      <div>我是被弹出的内容</div>
    </template>
    <g-button>click 向上</g-button>
  </g-popover>
  <g-popover position="bottom">
    <template slot="content">
      <div>我是被弹出的内容</div>
    </template>
    <g-button>click 向下</g-button>
  </g-popover>
  <g-popover position="right" trigger="hover">
    <template slot="content">
      <div>我是被弹出的内容</div>
    </template>
    <g-button>hover 向右</g-button>
  </g-popover>
  <g-popover position="left" trigger="hover">
    <template slot="content">
      <div>我是被弹出的内容</div>
    </template>
    <g-button>hover 向左</g-button>
  </g-popover>
`
    }
  }
}
</script>
<style lang="scss" scoped>
.content pre{background:rgb(233, 243, 239);}
</style>
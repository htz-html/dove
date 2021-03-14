<template>
  <div>
    <h3>基本用法</h3>
    <g-button>默认按钮</g-button>
    <pre>
      {{content1}}
    </pre>
    <h3>图标按钮</h3>
    <g-button icon="write">图标按钮</g-button>
    <pre>
      {{content2}}
    </pre>
    <h3>加载中</h3>
    <g-button :loading="true">加载按钮</g-button>
    <pre>
      {{content3}}
    </pre>
    <h3>禁用状态</h3>
    <g-button disabled>禁用按钮</g-button>
    <pre>
      {{content4}}
    </pre>
    <h3>按钮组</h3>
    <g-button-group>
      <g-button>上一页</g-button>
      <g-button>下一页</g-button>
    </g-button-group>
    <span style="padding-left:10px"></span>
    <g-button-group>
      <g-button icon="search"></g-button>
      <g-button icon="share"></g-button>
      <g-button icon="upload"></g-button>
    </g-button-group>
    <pre>
      {{content5}}
    </pre>
  </div>
  
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
  components:{
    'g-button': Button,
    'g-button-group': ButtonGroup
  },
  data(){
    return{
  content1: `
  <g-button>默认按钮</g-button>`,
  content2: `
  <g-button icon="write">默认按钮</g-button>`,
  content3: `
  <g-button :loading="true">默认按钮</g-button>`,
  content4: `
  <g-button disabled>默认按钮</g-button>`,
  content5: `
  <g-button-group>
    <g-button>上一页</g-button>
    <g-button>下一页</g-button>
  </g-button-group>
  <span style="padding-left:10px"></span>
  <g-button-group>
    <g-button icon="search"></g-button>
    <g-button icon="share"></g-button>
    <g-button icon="upload"></g-button>
  </g-button-group>`
    }
  }
}
</script>
<style lang="scss">
.content pre{background:rgb(233, 243, 239);}
</style>
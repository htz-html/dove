<template>
  <div>
    <h3>基本用法</h3>
    <g-input>默认按钮</g-input>
    <pre>
      {{content1}}
    </pre>
    <h3>设置值</h3>
    <g-input value="张三"></g-input>
    <pre>
      {{content2}}
    </pre>
    <h3>只读</h3>
    <g-input readonly value="张三"></g-input>
    <pre>
      {{content3}}
    </pre>
    <h3>禁用</h3>
    <g-input disabled value="李四"></g-input>
    <pre>
      {{content4}}
    </pre>
    <h3>警告</h3>
    <g-input value="张" error="名字不能少于两个字"></g-input>
    <pre>
      {{content5}}
    </pre>
  </div>
  
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{
    'g-input': Input,
  },
  data(){
    return{
  content1: `
  <g-input>默认按钮</g-input>`,
  content2: `
  <g-input value="张三"></g-input>`,
  content3: `
  <g-input readonly value="张三"></g-input>`,
  content4: `
  <g-input disabled></g-input>`,
  content5: `
  <g-input value="张" error="名字不能少于两个字"></g-input>`
    }
  }
}
</script>
<style lang="scss">
.content pre{background:rgb(233, 243, 239);}
</style>
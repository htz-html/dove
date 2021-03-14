<template>
  <div>
    <h3>基础用法</h3>
    <g-row>
      <g-col span="24">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <div class="margintop"></div>
    <g-row>
      <g-col span="12">
        <div class="demo"></div>
      </g-col>
      <g-col span="12">
        <div class="demo2"></div>
      </g-col>
    </g-row>
    <div class="margintop"></div>
    <g-row>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo2"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <pre>
      {{content1}}
    </pre>
    <div class="margintop"></div>
    <h3>分栏间隔</h3>
    <g-row>
      <g-col span="5">
        <div class="demo"></div>
      </g-col>
      <g-col span="5" offset="2">
        <div class="demo2"></div>
      </g-col>
      <g-col span="5">
        <div class="demo"></div>
      </g-col>
      <g-col span="5" offset="2">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <pre>
      {{content2}}
    </pre>
    <div class="margintop"></div>
    <h3>像素间隔</h3>
    <g-row gutter="10" style="flex-wrap: nowrap;">
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
      <g-col span="8">
        <div class="demo2"></div>
      </g-col>
      <g-col span="8">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <pre>
      {{content3}}
    </pre>
    <div class="margintop"></div>
    <h3>对齐方式</h3>
    <g-row>
      <g-col span="4">
        <div class="demo"></div>
      </g-col>
      <g-col span="5">
        <div class="demo2"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <div class="margintop"></div>
    <g-row sline="right">
      <g-col span="4">
        <div class="demo"></div>
      </g-col>
      <g-col span="5">
        <div class="demo2"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <div class="margintop"></div>
    <g-row sline="center">
      <g-col span="4">
        <div class="demo"></div>
      </g-col>
      <g-col span="5">
        <div class="demo2"></div>
      </g-col>
      <g-col span="6">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <pre>
      {{content4}}
    </pre>
    <div class="margintop"></div>
    <h3>响应式布局</h3>
    <g-row>
      <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
        <div class="demo2"></div>
      </g-col>
      <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
        <div class="demo2"></div>
      </g-col>
      <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
        <div class="demo2"></div>
      </g-col>
    </g-row>
    <pre>
      {{content5}}
    </pre>
  </div>
</template>
<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col,
  },
  data(){
    return{
      content1:`
  <g-row>
    <g-col span="24">
      <div class="demo"></div>
    </g-col>
  </g-row>
  <g-row>
    <g-col span="12">
      <div class="demo"></div>
    </g-col>
    <g-col span="12">
      <div class="demo2"></div>
    </g-col>
  </g-row>
  <g-row>
    <g-col span="8">
      <div class="demo"></div>
    </g-col>
    <g-col span="8">
      <div class="demo2"></div>
    </g-col>
    <g-col span="8">
      <div class="demo"></div>
    </g-col>
  </g-row>`,
  content2:`
  <g-row>
    <g-col span="5">
      <div class="demo"></div>
    </g-col>
    <g-col span="5" offset="2">
      <div class="demo2"></div>
    </g-col>
    <g-col span="5">
      <div class="demo"></div>
    </g-col>
    <g-col span="5" offset="2">
      <div class="demo"></div>
    </g-col>
  </g-row>`,
  content3:`
  <g-row gutter="10" style="flex-wrap: nowrap;">
    <g-col span="8">
      <div class="demo"></div>
    </g-col>
    <g-col span="8">
      <div class="demo2"></div>
    </g-col>
    <g-col span="8">
      <div class="demo"></div>
    </g-col>
  </g-row>`,
  content4:`
  <g-row>
    <g-col span="4">
      <div class="demo"></div>
    </g-col>
    <g-col span="5">
      <div class="demo2"></div>
    </g-col>
    <g-col span="6">
      <div class="demo"></div>
    </g-col>
  </g-row>
  <div class="margintop"></div>
  <g-row sline="right">
    <g-col span="4">
      <div class="demo"></div>
    </g-col>
    <g-col span="5">
      <div class="demo2"></div>
    </g-col>
    <g-col span="6">
      <div class="demo"></div>
    </g-col>
  </g-row>
  <div class="margintop"></div>
  <g-row sline="center">
    <g-col span="4">
      <div class="demo"></div>
    </g-col>
    <g-col span="5">
      <div class="demo2"></div>
    </g-col>
    <g-col span="6">
      <div class="demo"></div>
    </g-col>
  </g-row>`,
  content5:`
  <g-row>
    <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
      <div class="demo"></div>
    </g-col>
    <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
      <div class="demo2"></div>
    </g-col>
    <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
      <div class="demo"></div>
    </g-col>
    <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
      <div class="demo2"></div>
    </g-col>
    <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
      <div class="demo"></div>
    </g-col>
    <g-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}"  :pc="{span: 6}">
      <div class="demo2"></div>
    </g-col>
  </g-row>`
    }
  }
};
</script>
<style lang="scss" scoped>
.demo,.demo2{
  height: 30px;
  border-radius: 4px;
}
.demo {
  background: #b9bdbb;
}
.demo2 {
  background: #d0d4d2;
}
.margintop {
  margin: 10px 0;
}
.content pre{background:rgb(233, 243, 239);}
</style>
<template>
  <div>
    <h3>基本用法</h3>
    <g-tabs selected="news">
      <g-tabs-head>
        <g-tabs-item name="news">综合新闻</g-tabs-item>
        <g-tabs-item name="sports">体育专题</g-tabs-item>
        <g-tabs-item name="fashion">时尚杂志</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="news">
          <p>npm是nodejs包管理工具node package management的简称，它帮助我们解决代码快速部署的问题，提高工作效率。</p>
        </g-tabs-pane>
        <g-tabs-pane name="sports">
          <p>中国女子选手在该项目中的世锦赛首金，为中国冰雪取得重大突破。</p>
        </g-tabs-pane>
        <g-tabs-pane name="fashion">
          <p>3月13日下午15：00，2021英雄联盟职业联赛（LPL）春季赛第八周第六天地比赛即将到来</p>
          <p>
            13日对战情况为：BLG vs RW、RA vs iG、EDG vs TES，以下为各队比赛时间以及首发阵容。
          </p>
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <pre>
      {{content1}}
    </pre>
    <h3>禁用选项</h3>
    <g-tabs selected="news">
      <g-tabs-head>
        <g-tabs-item name="news">综合新闻</g-tabs-item>
        <g-tabs-item name="sports" disabled>体育专题</g-tabs-item>
        <g-tabs-item name="fashion">时尚杂志</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="news">
          <p>npm是nodejs包管理工具node package management的简称，它帮助我们解决代码快速部署的问题，提高工作效率。</p>
        </g-tabs-pane>
        <g-tabs-pane name="sports">
          <p>中国女子选手在该项目中的世锦赛首金，为中国冰雪取得重大突破。</p>
        </g-tabs-pane>
        <g-tabs-pane name="fashion">
          <p>3月13日下午15：00，2021英雄联盟职业联赛（LPL）春季赛第八周第六天地比赛即将到来</p>
          <p>
            13日对战情况为：BLG vs RW、RA vs iG、EDG vs TES，以下为各队比赛时间以及首发阵容。
          </p>
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <pre>
      {{content2}}
    </pre>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'
import TabsItem from '../../../src/tabs-item'
export default {
  components:{
    'g-tabs':Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-body': TabsBody,
    'g-tabs-pane': TabsPane
  },
  data(){
    return{
      content1:`
  <g-tabs selected="news">
    <g-tabs-head>
      <g-tabs-item name="news">综合新闻</g-tabs-item>
      <g-tabs-item name="sports">体育专题</g-tabs-item>
      <g-tabs-item name="fashion">时尚杂志</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="news">
        <p>npm是nodejs包管理工具node package management的简称，它帮助我们解决代码快速部署的问题，提高工作效率。</p>
      </g-tabs-pane>
      <g-tabs-pane name="sports">
        <p>中国女子选手在该项目中的世锦赛首金，为中国冰雪取得重大突破。</p>
      </g-tabs-pane>
      <g-tabs-pane name="fashion">
        <p>3月13日下午15：00，2021英雄联盟职业联赛（LPL）春季赛第八周第六天地比赛即将到来</p>
        <p>
          13日对战情况为：BLG vs RW、RA vs iG、EDG vs TES，以下为各队比赛时间以及首发阵容。
        </p>
      </g-tabs-pane>
    </g-tabs-body>
  </g-tabs>`,
      content2:`
  <g-tabs selected="news">
    <g-tabs-head>
      <g-tabs-item name="news">综合新闻</g-tabs-item>
      <g-tabs-item name="sports" disabled>体育专题</g-tabs-item>
      <g-tabs-item name="fashion">时尚杂志</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="news">
        <p>npm是nodejs包管理工具node package management的简称，它帮助我们解决代码快速部署的问题，提高工作效率。</p>
      </g-tabs-pane>
      <g-tabs-pane name="sports">
        <p>中国女子选手在该项目中的世锦赛首金，为中国冰雪取得重大突破。</p>
      </g-tabs-pane>
      <g-tabs-pane name="fashion">
        <p>3月13日下午15：00，2021英雄联盟职业联赛（LPL）春季赛第八周第六天地比赛即将到来</p>
        <p>
          13日对战情况为：BLG vs RW、RA vs iG、EDG vs TES，以下为各队比赛时间以及首发阵容。
        </p>
      </g-tabs-pane>
    </g-tabs-body>
  </g-tabs>`
    }
  }
}
</script>
<style lang="scss" scoped>
  p{
    padding: 0 !important;
    margin: 0;
  }
.content pre{background:rgb(233, 243, 239);}

</style>
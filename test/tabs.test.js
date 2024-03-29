const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsHead from '../src/tabs-head.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsPane from '../src/tabs-pane.vue'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)


Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("存在", () => {
    expect(Tabs).to.exist;
  });
  it("接收 selected ", (done) => {
    const div=document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tabs selected="woman">
      <g-tabs-head> 
        <g-tabs-item name="woman">美女</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">我是美女的内容</g-tabs-pane>
        <g-tabs-pane name="finance">我是财经的内容</g-tabs-pane>
        <g-tabs-pane name="sports">我是体育的内容</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let x = vm.$el.querySelector(`.tabs-item[data-name="woman"]`)
      expect(x.classList.contains("active")).to.be.true
      done()
      
    })
  });
  it('可以接收 direction prop', ()=>{
    
  })
});

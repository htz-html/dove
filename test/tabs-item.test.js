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

describe("TabsItem", () => {
  it("存在", () => {
    expect(TabsItem).to.exist;
  });
  it("接收 name", () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
    propsData: {
        name: 'xxx'
    }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  });
  it('可以接收 direction prop', ()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
    propsData: {
      disabled:true
    }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback=sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.be.not.been.called
  })
});

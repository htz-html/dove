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

describe("TabsBody", () => {
  it("存在", () => {
    expect(TabsBody).to.exist;
  });
});

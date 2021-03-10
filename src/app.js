import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import { expect } from 'chai'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Header from './header.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)

new Vue({
  el:"#app",
  data:{
    loading1: true,
    message: "hi"
  },
  methods:{
    inputChange(e){
      console.log(e)
    }
  }
})



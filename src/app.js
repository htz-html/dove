import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import { expect } from 'chai'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el:"#app",
  data:{
    loading1: true
  }
})

// import chai from 'chai'
// const expect = chai.expect
{
  //自动创建一个按钮
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: 'search'
    }
  })
  button.$mount("#test")
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq("#i-search")
}
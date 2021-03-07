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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
// const expect = chai.expect
try{
  {
    //自动创建一个按钮
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData:{
        icon: 'search'
      }
    })
    vm.$mount("#test")
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq("#i-search")
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData:{
        icon: 'search',
        loading: true
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq("#i-loading")
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData:{
        icon: 'search',
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("1")
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData:{
        icon: 'search',
        iconPosition: 'right'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("2")
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData:{
        icon: 'search',
      }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }
} catch (error) {
  window.errors= [error]
} finally {
  window.errors && window.errors.forEach((error)=>{
    console.error(error.message)
  })
}
import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el:"#app",
  data:{
    loading1: true
  }
})

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
  console.log(useElement)
}
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: "DoveTabs",
  props:{
    selected: {
      type: String,
      required: true
    },
    direction:{
      type:String,
      default: "horizontal",
      validator(value){
        return ['horizontal','vertical'].includes(value) >=0
      }
    }
  },
  data(){
    return{
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){  
    this.$children.forEach((vm)=>{
      if(vm.$options.mame === 'DoveTabsHead'){
        vm.$children.forEach((item)=>{
          if(item.$$options.name === 'DovetabsItem'
          && item.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected,item)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .tabs{}
</style>
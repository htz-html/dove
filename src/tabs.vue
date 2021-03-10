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
      require: true
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
  created(){
    // this.$emit('update: selected','xxx')
  }
}
</script>
<style lang="scss" scoped>
  .tabs{}
</style>
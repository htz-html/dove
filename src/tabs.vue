<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
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
  created(){
    // this.$emit('update: selected','xxx')
  }
}
</script>
<style lang="scss" scoped>
  .tabs{}
</style>
<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"DoveRow",
  props:{
    gutter:{
      type:[Number,String]
    },
    sline:{
      type: String,
      validator(value) {
        return ['left','right','center'].includes(value)
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft:-gutter/2+'px',
        marginRight:-gutter/2+ 'px'
      }
    },
    rowClass() {
      let {sline} = this
      return [sline && `align-${sline}`]
    }
  }
}
</script>
<style lang="scss" scoped>
  .row{
    display: flex;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>
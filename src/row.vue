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
    console.log('11',this.gutter)
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
      console.log('kk', vm)
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
    flex-wrap: wrap;
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
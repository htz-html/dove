<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref='line'></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "DoveTabsHead",
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected', (item, vm)=>{
      let offsetL = this.$el.getBoundingClientRect().left;
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left-offsetL}px`
    })
  }
}
</script>
<style lang="scss" scoped>
  $blue: rgb(45, 30, 255);
  $tab-height:40px;
  $border-color: #ddd;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line{
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 300ms;
    }
    > .actions-wrapper{
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>
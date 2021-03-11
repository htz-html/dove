<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "DoveTabsHead",
  inject: ['eventBus'],
  created(){ 
  }
}
</script>
<style lang="scss" scoped>
  $blue: rgb(45, 30, 255);
  $tab-height:40px;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    position: relative;
    > .line{
      position: absolute;
      bottom: 0;
      width: 100px;
      border-bottom: 1px solid $blue;
    }
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>
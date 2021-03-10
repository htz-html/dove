<template>
  <div class="tabs-item" :disabled="disabled">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DoveTabsItem",
  props:{
    disabled:{
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabs-item{}
</style>
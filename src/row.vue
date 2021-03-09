<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"DoveRow",
}
</script>
<style lang="scss" scoped>
  .row{
    display: flex;
  }
</style>
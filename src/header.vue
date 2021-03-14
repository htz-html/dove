<template>
  <div class="header">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DoveHeader"
}
</script>
<style lang="scss" scoped>
  .header{
    height: 50px;
    background: #9daca6;
  }
</style>
<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DoveFooter"
}
</script>
<style lang="scss" scoped>
  .footer{
    height: 50px;
    background: #8e9c97;
  }
</style>
<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"DoveSider"
}
</script>
<style lang="scss" scoped>
  .sider{
    width: 200px;
    background: rgb(194, 207, 201);
  }
</style>
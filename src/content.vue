<template>
  <div class="content1">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'DoveContent'
  
}
</script>
<style lang="scss" scoped>
  .content1{
    flex-grow: 1;
    background: rgb(228, 235, 230);
  }
</style>
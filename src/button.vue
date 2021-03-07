<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props:{
    icon:{},
    iconPosition:{
      type: String,
      default: 'left',
      validator(value){ //属性检查器，检查传过来的值是否正确
        // return value !== 'left' && value !== 'right' ? false : true
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
};
</script>
<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex; justify-content: center; 
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content{
    order: 2;
  }
  > .icon{
    order: 1;
    margin-right: .3em;
  }
  &.icon-right{
    > .icon{
      order: 2;
      margin-left: .3em;
    }
    > .content{
      order: 1;
    }
  }
}
</style>
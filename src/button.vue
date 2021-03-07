<template>
  <button class="g-button" 
  :class="{[`icon-${iconPosition}`]: true}"
  @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="icon loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Vue from 'vue'
import Icon from "./icon";
Vue.component('g-icon', Icon)
export default {
  props:{
    icon:{},
    loading:{
      type: Boolean,
      default:false
    },
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
@keyframes spin {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
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
  .loading{
    animation: spin 1s infinite linear;
  }
}
</style>
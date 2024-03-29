<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" v-if="visible" 
      class="content-wrapper"
      :class="{[`position-${position}`]:true}"
      >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "DovePopover",
  props:{
    position:{
      type: String,
      default: 'top',
      validator(value){
        return ['top', 'left', 'right', 'bottom'].includes(value) >=0
      }
    },
    trigger:{
      type: String,
      default: 'click',
      validator(value){
        return ['hover', 'click'].includes(value) >= 0
      }
    }
  },
  computed:{
    openEvent(){
      if(this.trigger === 'click'){
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent(){
      if(this.trigger === 'hover'){
        return 'click'
      } else {
        return 'mouseleave'
      }
    },
  },
  data(){
    return{
      visible: false
    }
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click', this.onClick)
    }else{
      this.$refs.popover.addEventListener('mouseenter', this.open) 
      this.$refs.popover.addEventListener('mouseleave', this.close) 
    }
  },
  destroyed(){
    if(this.trigger === 'click'){
      this.$refs.popover.removeEventListener('click', this.onClick)
    }else{
      this.$refs.popover.removeEventListener('mouseenter', this.open) 
      this.$refs.popover.removeEventListener('mouseleave', this.close) 
    }
  },
  methods:{
    positionContent(){
      const {contentWrapper,triggerWrapper} = this.$refs
      document.body.appendChild(this.$refs.contentWrapper)
      let {width,height,left,top}=triggerWrapper.getBoundingClientRect()
      let {height: height2} = contentWrapper.getBoundingClientRect()
      let positions = {
        top:{
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom:{
          top:top + height + window.scrollY,
          left:left + window.scrollX
        },
        left:{
          top:top + window.scrollY + (height-height2)/2,
          left:left + window.scrollX
        },
        right:{
          top:top + window.scrollY + (height-height2)/2 ,
          left:left + window.scrollX + width
        }
      }
      contentWrapper.style.left = positions[this.position].left + 'px';
      contentWrapper.style.top =  positions[this.position].top + 'px'
    },
    onClickDocument(e){
      if(this.$refs.popover &&  
        (this.$refs.popover===e.target ||
        this.$refs.popover.contains(e.target))
      ) {return}
      if(this.$refs.contentWrapper &&  
        (this.$refs.contentWrapper===e.target ||
        this.$refs.contentWrapper.contains(e.target))
      ) {return}
      this.close()
    },
    open(){
      this.visible = true
      this.$nextTick(()=>{
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event){
      if(this.$refs.triggerWrapper.contains(event.target)){
        if(this.visible === true){
          this.close()
        }else{
          this.open()
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #666;
  $border-raidus: 4px;
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-raidus;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    background: white;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::after,&::before{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::after,&::before{
        left: 10px;
      }
      &::before{
        border-top-color: black;
        top: 100%;
        border-bottom: none;
      }
      &::after{
        border-top-color: white;
        top: calc(100% - 1px);
        border-bottom: none;
      }
    }
    &.position-bottom{
      margin-top: 10px;
      &::after,&::before{
        left: 10px;
      }
      &::before{
        border-bottom-color: black;
        bottom: 100%;
        border-top: none;
      }
      &::after{
        border-bottom-color: white;
        bottom: calc(100% - 1px);
        border-top: none;
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::after,&::before{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-left-color: black;
        border-right: none;
        left: 100%;
      }
      &::after{
        border-left-color: white;
        left: calc(100% - 1px);
        border-right: none;
      }
    }
    &.position-right{
      margin-left: 10px;
      &::after,&::before{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-right-color: black;
        right: 100%;
        border-left: none;
      }
      &::after{
        border-right-color: white;
        right: calc(100% - 1px);
        border-left: none;
      }
    }
  }
</style>
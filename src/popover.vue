<template>
  <div class="popover" @click="onClick">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "DovePopover",
  data(){
    return{
      visible: false
    }
  },
  methods:{
    onClick(event){
      if(this.$refs.triggerWrapper.contains(event.target)){
        this.visible = !this.visible
        if(this.visible === true){
          this.$nextTick(()=>{
            document.body.appendChild(this.$refs.contentWrapper)
            let {width,height,left,top}=this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            let eventHandler=(e)=>{
              if(this.$refs.contentWrapper.contains(e.target)){
              }else{
                this.visible = false
                document.removeEventListener('click', eventHandler)
              }
            }
            document.addEventListener('click', eventHandler)
          })
        }
      }else{
        console.log("隐藏popover")
      }
      
    }
  }
}
</script>
<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.5);
    transform: translateY(-100%);
  }
</style>
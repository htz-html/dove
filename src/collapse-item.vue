<template>
  <div class="collapse-item">
    <div class="title" @click="toggle" :class="{'open-content':open}">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "DoveCollapseItem",
  data(){
    return{
      open: false
    }
  },
  props:{
    title:{
      type:String,
      required: true
    },
    name:{
      type:String,
      required: true
    }
  },
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected', (name)=>{
      if(name !== this.name){
        this.close()
      }else{
        this.show()
      }
    })
  },
  methods:{
    toggle(){
      if(this.open){
        this.open = false
      }else{
        this.show()
        this.eventBus && this.eventBus.$emit('update:selected',this.name)
      }
    },
    close(){
      this.open = false
    },
    show(){
      this.open = true
    }
  }
}
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
  .collapse-item{
    > .title{
      border: 1px solid $grey;
      margin-left: -1px;
      margin-right: -1px;
      margin-top: -1px;
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      &.open-content{
        border-bottom: 0;
      }
    }
    &:first-child{
      >.title{
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child{
      >.title:last-child{
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    > .content{
      padding: 10px;
      color: #666;
    }
  }
</style>
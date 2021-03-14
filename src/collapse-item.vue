<template>
  <div class="collapse-item">
    <div class="title" @click="toggle" :class="{ 'open-content1': open }">
      {{ title }}
    </div>
    <div class="content1" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "DoveCollapseItem",
  data() {
    return {
      open: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus && this.eventBus.$on("update:selected", (names) => {
      if (names.indexOf(this.name)>=0) {
        this.open = true
        } else {
          this.open = false
        }
    });
  },
  methods: {
    toggle() {
      if (this.open){
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  },
};
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    margin-left: -1px;
    margin-right: -1px;
    margin-top: -1px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 500;
    &.open-content1 {
      border-bottom: 0;
    }
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content1 {
    padding: 10px;
    color: #666;
  }
}
</style>
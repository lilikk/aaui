<template>
<!-- icon组件 -->
  <i :class="`aa-icon aa-icon-${iconname}`"
  :style={fontSize,color}
  @click="handelclick"></i>
</template>

<script>
export default {
  name: 'AaIcon',
  props: {
    iconname: {
      type: String,
      default: 'bianji'
    },
    fontSize: {
      type: String,
      default: '20px'
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  methods: {
    // 点击事件
    handelclick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.aa-icon:hover{
    cursor: pointer;
}
</style>

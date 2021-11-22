<template>
  <div class="aa-form">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AaForm',
  props: {
    model: {
      type: Object,
      require: true
    },
    width: {
      type: String,
      default: '80px'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  provide () {
    return {
      AaForm: this
    }
  }
}
</script>

<style>

</style>

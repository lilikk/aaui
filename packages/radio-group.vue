<template>
  <div class="aa-radio-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AaRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style>

</style>

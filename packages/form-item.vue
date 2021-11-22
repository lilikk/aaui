<template>
  <div class="aa-from-item">
      <label class="aa-form-item-label" :style="{width:this.AaForm.width,
      fontSize:this.AaForm.fontSize,
      color:this.AaForm.color}">{{label}}</label>
      <div class="aa-form-item-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AaFormItem',
  props: {
    label: {
      type: String
    }
  },
  inject: ['AaForm']

}
</script>

<style lang="scss">
.aa-from-item{
    margin-bottom: 10px;
    .aa-form-item-label{
        text-align: center;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .aa-form-item-content{
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}

</style>

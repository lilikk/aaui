<template>
  <label class="aa-radio" :class="{'is-checked':label===model}">
      <!-- input部分 -->
      <span class="aa-radio-input">
          <span class="aa-radio-inner"></span>
          <input
          :value="label"
          class="aa-radio-original"
          type="radio"
          v-model="model">
      </span>
      <!-- label部分 -->
      <span class="aa-radio-label">
        <slot></slot>
        <!-- 如果没有传插槽进来,显示label -->
        <template v-if="!$slots.default">
            {{label}}
        </template>
      </span>
  </label>
</template>

<script>
export default {
  name: 'AaRadio',
  props: {
    value: null,
    // 选中后的文本
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checked: true
    }
  },
  computed: {
    model: {
      get () {
        // 如果包裹了group 设置value值为group绑定的value 如果没有包裹就是本身的value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 如果value值发生变化,有group的话 触发group的input事件 如果没有触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 用于判断radio是不是被RadioGroup包裹
    isGroup () {
      return !!this.RadioGroup
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  }
}
</script>

<style lang="scss">
.aa-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    //input框
    .aa-radio-input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .aa-radio-inner{
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    // 伪元素选择器
    &::after{
    width: 4px;
    height: 4px;
    border-radius:100%;
    background-color: #fff;
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) scale(0);
    transition: transform .15s ease-in;
    }
    }
    .aa-radio-original{
    opacity: 0;
    outline: none;
    position:absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    margin: 0;
    }
    }
    //label文本
    .aa-radio-label{
        font-size: 14px;
        padding-left: 10px;
    }
}

.aa-radio.is-checked{
    .aa-radio-input{
        .aa-radio-inner{
            border-color:#409eff;
            background-color:#409eff;
            &::after{
            transform:translate(-50%,-50%) scale(1)
            }
        }
    }
    .aa-radio-label{
        color: #409eff;
    }
}
</style>

<template>
  <div class="aa-switch"
  :class="{'is-checked':value}"
  @click="handelclick">
  <input type="checkbox" :name="name" class="aa-switch-input" ref="input">
      <span class="aa-switch-core" ref="core">
          <span class="aa-switch-button"></span>
      </span>
  </div>
</template>

<script>
export default {
  name: 'AaSwitch',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    // 激活的时候的颜色
    activeColor: {
      type: String,
      default: '#409eff'
    },
    // 不激活的颜色
    incativeColor: {
      type: String,
      default: '#dcdfe6'
    }

  },
  methods: {
    handelclick () {
      this.$emit('input', !this.value)
      this.$emit('change', !this.value)
      this.$nextTick(() => {
        // 需要数值发生改变之后更改颜色(异步)
        this.togglecolor()
      })
      this.$refs.input.checked = !this.value
    //   console.log(!this.value)
    },
    // 点击的时候,激活状态
    togglecolor () {
      if (this.activeColor || this.incativeColor) {
        const color = this.value ? this.activeColor : this.incativeColor
        this.$refs.core.style = `border-color:${color};background-color:${color}`
      }
    }
  },
  mounted () {
    this.togglecolor()

    this.$refs.input.checked = !this.value
  }
}
</script>

<style lang="scss">
.aa-switch{
    //将对象作为内联块级弹性伸缩盒显示-父盒子只占用需要的宽度
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    //设置元素的垂直对齐方式-把此元素放置在父元素的中部
    vertical-align: middle;
    .aa-switch-input{
        position: absolute;
        width: 0;
        height:0;
        opacity: 0;
        margin: 0;
    }
    .aa-switch-core{
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor:pointer;
        transition: border-color .3s ,background-color .3;
        vertical-align: middle;
    .aa-switch-button{
        position: absolute;
        top: 1px;
        left:1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
    }
    }
}
//选中的样式
.aa-switch.is-checked{
    .aa-switch-core{
        border-color:#409eff;
        background-color: #409eff;
        .aa-switch-button{
            transform: translateX(20px);
        }
    }
}
</style>

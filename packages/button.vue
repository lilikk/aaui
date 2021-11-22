<template>
<!-- buttonz组件 -->
  <button class="aa-button" :class="[`aa-button--${type}`,
  {'is-plain':plain,'is-round':round,'is-cirle':cirle,'is-disable':disabled}]"
  @click="handelclick"
  :draggable="draggable" :disabled="disabled">
      <!-- 内容不固定需要用插槽-外层套一个span标签可以用来控制样式 -->
      <i :class="[`aa-icon aa-icon-${iconname}`]"  v-if="iconname"></i>
      <!-- 可以判断插槽是不是传了值 -->
      <span v-if="$slots.default">
          <slot></slot>
      </span>
  </button>
</template>

<script>
export default {
  name: 'AaButton',
  props: {
    // 控制按钮的类型
    type: {
      type: String,
      default: 'default'
    },
    // 是否朴素按钮
    plain: {
      type: Boolean,
      default: false
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false
    },
    // 是否圆形
    cirle: {
      type: Boolean,
      default: false
    },
    // 字体图标
    iconname: {
      type: String,
      default: ''

    },
    // 控制是不是可以拖拽
    draggable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handelclick (e) {
      // 通知父组件,有点击
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
.aa-button {
    display: inline-block;
    line-height:1;
    white-space:nowrap;  // 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
    cursor: pointer;//光标呈现为指示链接的指针（一只手）
    background-color: #fff;
    border: 1px solid #eee;
    color: #606266;
    -webkit-appearance: none;//去除浏览器默认样式
    text-align: center;
    box-sizing: border-box;//border-box怪异盒模型  content-box标准盒模型
    outline: none;//取消轮廓线 大部分表单点击之后会出现蓝色边框
    margin: 0;
    transition: 0.1s;//过渡
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;//针对火狐
    -webkit-user-select: none;//针对谷歌 safari
    -ms-user-select: none;//针对Ie  -o代表Opera私有属性。

    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,//鼠标经过
    &:focus{//聚焦
        color:#409eff;
        border-color:#c6e2ff;
        background-color: #ecf5ff;
    }
}
// type的类型 添加到类名上
.aa-button--primary{
    color: #fff;
    background-color:#409eff;
    border-color:#409eff;
    &:hover,
    &:focus{
        background: #66b1ff;
        border-color:#66b1ff;
        color: #fff;
    }
}
.aa-button--success{
    color: #fff;
    background-color:#67c23a;
    border-color:#67c23a;
    &:hover,
    &:focus{
        background: #85ce61;
        border-color:#85ce61;
        color: #fff;
    }
}
.aa-button--info{
    color: #fff;
    background-color:#909399;
    border-color:#909399;
    &:hover,
    &:focus{
        background: #a6a9ad;
        border-color:#a6a9ad;
        color: #fff;
    }
}
//朴素按钮
// 两个类名连着写的话是只有同时满足两个类名才会显示
.aa-button--primary.is-plain{
color: #409eff;
    background-color:#ecf5ff;
    border-color:#b3d8ff;
    &:hover,
    &:focus{
        background: #409eff;
        border-color:#66b1ff;
        color: #fff;
    }
}

.aa-button--success.is-plain{
    color: #67c23a;
    background-color:#f0f9eb;
    border-color:#c2e7b0;
    &:hover,
    &:focus{
        background: #67c23a;
        border-color:#67c23a;
        color: #fff;
    }
}

.aa-button--info.is-plain{
    color: #909399;
    background-color:#f4f4f5;
    border-color:#d3d4d6;
    &:hover,
    &:focus{
        background: #909399;
        border-color:#909399;
        color: #fff;
    }
}
//圆角按钮
.aa-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
}
//圆形按钮
 .aa-button.is-cirle{
     border-radius:50%;
     padding: 12px;
 }
//调整 文字和图标一起的按钮
.aa-button [class*=aa-icon]{
    margin-right: 2px;
}
.aa-button [class*=aa-icon]+span{
    margin-left: 5px;
}
//禁用样式
.is-disable{
background-color: #eee !important;
border-color:#eee !important;
color:rgb(154, 158, 158) !important;
}
</style>

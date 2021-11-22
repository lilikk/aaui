<template>
  <div class="aa-input" :class="{'aa-input--suffix':showPassword||clearable}">
      <!-- input框 -->
      <!-- 如果传了showPassword--说明是个密码框,当输入值的时候,显示类型是密码类型的 -->
     <input class="aa-input-inner"
      :type="showPassword?(ispassword?'password':'text'):type"
      :placeholder="placeholder"
      :disabeld="disabeld"
      :class="[{'is-disabled':disabeld}]"
      :value="value"
      @input="handelinput"
      :disabled="disabeld"
      :style="{width}">
      <span class="aa-input-suffix" :style="{right}">
        <!--显示密码 -->
       <i :class="[`aa-icon aa-icon-${iconname}`,{'aa-icon-view-active':!ispassword}]"
        v-if="showPassword&&value"
        @click="handelpassword"
        ></i>
        <!-- 关闭 -->
       <i :class="`aa-icon aa-icon-${iconname}`" v-if="clearable&&value" @click="handelclear"></i>
      </span>

  </div>
</template>

<script>
export default {
  name: 'AaInput',
  props: {
    // 占位符
    placeholder: {
      type: String,
      default: ''
    },
    // 输入框还是密码框
    type: {
      type: String,
      default: 'text'
    },
    // 是不是禁用
    disabeld: {
      type: Boolean,
      default: false
    },
    // 清空按钮
    clearable: {
      type: Boolean,
      default: false
    },
    // 控制显示密码图标
    showPassword: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '90%'
    },
    right: {
      type: String,
      default: '12%'
    },
    iconname: {
      type: String,
      default: 'bianji'
    }

  },
  data () {
    return {
      // 判断是不是密码框
      ispassword: true
    }
  },
  methods: {
    // 当发生iput输入事件的时候
    handelinput (e) {
      this.$emit('input', e.target.value)
    },
    // 点击清空小图标
    handelclear () {
      this.$emit('input', '')
    },
    // 点击切换密码
    handelpassword () {
      // 切换密码显示还是隐藏
      this.ispassword = !this.ispassword
    }
  }
}
</script>

<style lang="scss">
.aa-input{
    // width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .aa-input-inner{
        // 去除原始的样式,但是保留语义 -webkit 谷歌 safer -moz火狐
        -webkit-appearance: none;
        -moz-appearance:none;
        background-color: #fff;
        background-image:none;
        border-radius:4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color:#606266;
        display: inline-block;
        //字体大小继承
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        //过渡 cubic-bezier贝塞尔曲线  border-color需要过渡的属性
        transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:focus{
            outline: none;
            border-color:#409eff ;
        }
        //禁用的样式
        &.is-disabled{
            background-color: #f5f7fa;
            border-color:#e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }

}
 .aa-input--suffix{
         .aa-input-inner{
             padding-right:30px;
         }
         .aa-input-suffix{
         position: absolute;
         height: 100%;
         top: 0;
         line-height: 40px;
         text-align: center;
         color: #c0c4cc;
         transition: all .3s;
         z-index: 9999;
         i{
             color: #c0c4cc;
             font-size: 14px;
             cursor: pointer;
             transition: color .2s cubic-bezier(.645,.045,.355,1);
         }
         }
        .aa-icon-view-active{
        color: rgb(211, 158, 127) !important;
        }
}

</style>

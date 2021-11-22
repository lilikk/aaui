<template>
<!-- dialog组件 -->
<!-- dialog遮罩层 -->
<transition name="aa-dialog">
<div class="aa-dialog-wrapper" v-show="visible" @click.self="handleclose">
  <div class="aa-dialog" :style="{marginTop:top,width}">
      <!-- 头部 -->
     <div class="aa-dialog-header">
      <!-- 头部左边 -->
      <slot name="title">
      <span class="aa-dialog-title">{{title}}</span>
      </slot>
      <!-- 头部右边 -->
     <button class="aa-dialog-headerbtn" @click="handleclose">
         <i class="aa-icon aa-icon-guanbi"></i>
     </button>
     </div>
     <!-- 内容 -->
     <div class="aa-dialog-body">
         <slot>内容</slot>
     </div>
     <!-- 底部 -->
     <div class="aa-dialog-footer" v-if="$slots.default">
         <slot name="footer">
         </slot>
     </div>
  </div>
</div>
</transition>

</template>

<script>
export default {
  name: 'AaDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleclose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
//最外层遮罩层
.aa-dialog-wrapper{
position: fixed;
top:0;
right: 0;
bottom: 0;
left: 0;
overflow: hidden;
margin: 0;
z-index: 2001;
background-color:rgba(0,0,0,.5);
//dialog
.aa-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
   //头部
    &-header{
        padding: 20px 20px 10px;
        .aa-dialog-title{
            line-height: 24px;
            font-size:18;
            color:#303133;
        }
        .aa-dialog-headerbtn{
            position: absolute;
            top:20px;
            right: 20px;
            padding:0 ;
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 16px;
            .aa-icon-guanbi{
                color:#909399;
            }
        }
    }
    //内容
    &-body{
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    // 允许在单词内换行
    word-break: break-all;
    }
    //底部
    &-footer{
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing:border-box;
    .aa-button:first-child{
    margin-right: 20px;
    }
    }

}
}
//动画
.aa-dialog-enter-active{
animation: fadeanimation .1s;
}
.aa-dialog-leave-active{
animation: fadeanimation .1s reverse;
}
@keyframes fadeanimation{
    0% {
     opacity: 0;
     transform: translateY(-10%);
    }
    100% {
     opacity: 1;
     transform: translateY(0);
    }
}

</style>

# aaui

仿照elementui样式进行的封装UI组件的学习(纯属个人学习资源)

####button组件

==属性==

| 参数名    | 参数描述                       | 参数类型 | 默认值  |
| --------- | ------------------------------ | -------- | ------- |
| type      | 按钮类型(primary/success/info) | string   | default |
| plain     | 是否是朴素按钮                 | boolean  | flase   |
| round     | 是否是圆角按钮                 | boolean  | flase   |
| cirle     | 是否是圆形按钮                 | boolean  | flase   |
| disadbled | 是否禁用按钮                   | boolean  | flase   |
| iconname  | 图标类名                       | string   | 无      |

==事件==

| 事件名 | 事件描述 |
| ------ | -------- |
| click  | 点击事件 |
| drag   | 拖拽事件 |

==支持的字体图标==

| 字体图标       | 图标描述   |
| -------------- | ---------- |
| liuyanguanli   | 留言管理   |
| gouwucheguanli | 购物车管理 |
| zhanghaoshezhi | 账号管理   |
| mimaguanli     | 密码管理   |

   在组件上添加  iconname="icon名字"

```scss
//elementui 按钮的样式
.button{
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
```

type的类型通过props传过的类名 控制按钮样式

#####vue中动态绑定class的方式有3种

 (1)以对象形式

```js
v-bind:class="{ active: isActive, 'text-danger': hasError }"
```

(2)以数组形式

```js
v-bind:class="[activeClass, errorClass]"
```

(3)数组中对象形式

```js
v-bind:class="[activeClass, {'errorClass':true}]"
```

>在vue中可以通过$slots拿到所以的插槽 
>
>可以通过判断$slots.default判断插槽内是不是有传入值

----

#### dialog组件

==属性==

| 参数名  | 参数描述                       | 参数类型 | 默认值                     |
| ------- | ------------------------------ | -------- | -------------------------- |
| title   | 对话框标题                     | string   | 提示 具名插槽 v-slot:title |
| width   | 宽度                           | string   | 50%                        |
| top     | 与顶部的距离                   | strng    | 15vh                       |
| visible | 是否显示dialog(支持sync修饰符) | boolean  | false                      |

==事件==

| 事件名 | 事件描述         |
| ------ | ---------------- |
| open   | 模态框显示的事件 |
| close  | 模态框关闭的事件 |

==插槽==

| 插槽名称 | 插槽描述                             |
| -------- | ------------------------------------ |
| default  | dialog的内容                         |
| title    | dialog的标题 v-slot:title            |
| footer   | dialog的底部操作区 具名v-slot:footer |

######vue中动态绑定style方式

(1)对象形式

```js
:style="{ color: activeColor, fontSize: fontSize + 'px' }"
```

(2)数组形式

```js
:style="[baseStyles, overridingStyles]"
```

(3)三目运算符

```js
:style="{color:(index==0?conFontColor:'#000')}"
```

#####vue修饰符

>######事件修饰符
>
>.stop 阻止事件继续传播
>.prevent 阻止标签默认行为
>.capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
>.self 只当在 event.target 是当前元素自身时触发处理函数
>.once 事件将只会触发一次
>.passive 告诉浏览器你不想阻止事件的默认行为
>
>.sync
>
>###### v-model的修饰符
>
>.lazy 转变为在change事件同步输入框的值和数据
>
>.number 自动将用户的输入值转化为数值类型
>
>.trim 自动过滤用户输入的守卫空格
>
>###### 键盘事件的修饰符
>
>.enter .tab .esc .space .up .left .right ....
>
>.ctrl .alt .shift .meta

##### vue单向数据流

子组件可以使用父组件传递过来的数据,但是不能修改 (props传递过来的数据,子组件不可以修改)

==.sync的使用场景==--语法糖

父组件传递给子组件数据的时候

```js
:money="money"
```

子组件传递给父组件的事件的时候

```js
@update:money="fn"
```

我们就可以使用.sync--实际上就是在父组件中,不需要去监听事件,当这个值发生改变的时候,直接进行了赋值-使得代码简便了

```js
子组件触发父组件的事件:this.$emit('update:money',value)[通知父组件的事件一定是[update:propsc传递的值]
<子组件 :momey.sync="money">[不需要再进行监听事件,修改数据]
```

##### vue动画

(1)通过添加类名

```text
transition包裹一个元素 
可以在元素显示和隐藏的时候加上动画(在这个元素显示和隐藏的时候会添加一些类名)
默认类名 v-enter v-enter-active v-enter-to  v-leave v-leave-active v-leave-to
如果在transition 添加name属性 
比如<transition name="aa">
类名:aa-enter aa-enter-active aa-enter-to aa-leave aa-leave-active aa-leave-to
```

(2)通过css实现动画

```text
@keyframes 动画名 { 0% {opacity:0;} 100% {opacity:1;}}
.aa-enter-active{
animation:动画名 时间;
}
.aa-leave-active{
animation:动画名 时间 reverse(执行方向)
}
```

vue中在样式中添加 scoped:

原理(1)在当前组件模板中的每个元素上面添加了一个随机的属性

​        (2)给所有的样式添加一个属性选择器

注意:所有在做组件库的时候不要给组件添加scoped,不然处理不了属性(解决办法是scss中::deep less中 /deep/  css中 >>> )

---

#### 表单相关组件

#### input框

==属性==

| 参数名称      | 参数描述                   | 参数类型 | 默认值    |
| ------------- | -------------------------- | -------- | --------- |
| placeholder   | 占位符                     | string   | 无        |
| type          | 文本框类型text/password    | string   | text      |
| disabeld      | 禁用                       | boolean  | false     |
| clearable     | 显示清空按钮               | boolean  | false     |
| show-password | 显示密码切换按钮           | boolean  | false     |
| name          | name属性                   | string   | 无        |
| width         | 控制input框宽度            | string   | 20%/100px |
| right         | 控制图标位置(越往左值越大) | string   | 12%       |
| iconname      | 想显示图标名称             | string   | bianji    |

==事件==

| 事件名称 | 事件描述       |
| -------- | -------------- |
| blur     | 失去焦点事件   |
| change   | 内容改变事件   |
| focus    | 获取的焦点事件 |

>表单的 v-model语法糖
>
>动态绑定value属性   绑定input事件修改value的值(label有个特性,如果包裹input,会直接绑定input)

#### 开关switch

==属性==

| 参数名称      | 参数描述           | 参数类型 | 默认值 |
| ------------- | ------------------ | -------- | ------ |
| v-model       | 双向数据绑定       | 布尔类型 | false  |
| name          | name属性           | string   | text   |
| activeColor   | 自定义的激活颜色   | string   |        |
| incativeColor | 自定义的不激活颜色 | string   |        |

>用户在使用switc组件的时候,实际和是哪个是当成表单元素来使用的,可能会用到组件的name属性,所以需要在switch组件中添加一个checkbox,当值发生改变的时候,需要设置checkbox的value值

==事件==

| 事件名称 | 事件描述                                    |
| -------- | ------------------------------------------- |
| change   | change时触发的事件,可以拿到开关目前的布尔值 |

>开关组件需要添加个name属性 -表单元素有name属性 用户可能需要操作name属性

#### radio单选框(有难度)

==属性==

| 参数名  | 参数名称           | 参数类型         | 默认值 |
| ------- | ------------------ | ---------------- | ------ |
| v-model | 双向数据绑定       | 布尔类型         | false  |
| label   | 选中的文本(传后台) | 字符串,布尔,数字 | 空     |
| name    | 表单元素一般有name | 字符串           | 空     |

>单选框的值需要多选一,必须要在子组件内input上面添加v-model,绑定的值需要用计算属性的set 和 get 

#####radio-group

(可以不用每个radio都添加v-model,直接写一个v-model就可以了)

需要给组件添加个value值 -接收父组件绑定的v-model

还需要出发当前组件的input事件

>vue中的provide和inject 可以实现祖先和后代之间的传值
>
>可以在radio-group组件中provide他自己this  在子组件中inject中获取到父组件 (如果没有父组件的话,给他一个默认值)
>
>==注意==
>
>需要修改radio,对group进行判断,如果有值的话,需要更改计算属性中的set和get

#### checkbox复选框

==属性==

| 参数名  | 参数名称           | 参数类型 | 默认值 |
| ------- | ------------------ | -------- | ------ |
| v-model | 双向数据绑定       | 布尔类型 | false  |
| label   | 选中的文本(传后台) | 字符串   | 空     |
| name    | 表单元素一般有name | 字符串   | 空     |

和单选框一样

-----

#### 字体图标组件

==属性==

| 参数名   | 参数名称     | 参数类型 | 默认值                      |
| -------- | ------------ | -------- | --------------------------- |
| iconname | 字体名称图标 | string   | bianji                      |
| fontSize | 字体图标大小 | string   | 20px                        |
| color    | 字体颜色     | string   | #000/black/rgb(255,255,255) |

| 字体图标名称(iconname) | 样式 | 字体图标名称(iconname) | 样式       |
| ---------------------- | ---- | ---------------------- | ---------- |
| bianji                 | 编辑 | gouwucheguanli         | 购物车管理 |
| gouxuan                | 勾选 | zhanghaoshezhi         | 账号设置   |
| guanbi                 | 关闭 | mimaguanli             | 密码管理   |
| tupian                 | 图片 | liuyanguanli           | 留言管理   |
| xiazai                 | 下载 |                        |            |

如果要修改icon的话,需要用www.iconfont.cn,将需要的图标下载,下载之后更新icon的css,将icon的类名前缀修改成aa-icon-icon名,将路径修改

==事件==

| 事件名称 | 描述     |
| -------- | -------- |
| click    | 点击事件 |

#### form组件

==属性==

| 属性名 | 参数名称-类型       | 默认值 |
| ------ | ------------------- | ------ |
| model  | 绑定的所有数据-对象 | 空     |

##### form-item组件

| 属性名    | 参数名称-类型                   | 默认值 |
| --------- | ------------------------------- | ------ |
| width     | 设置文本的样式 字符串(行内样式) | 80px   |
| font-size | 字体大小  字符串(行内样式)      | 14px   |
| color     | 字体颜色  字符串(行内样式)      | black  |
| label     | 文本 字符串                     | 无     |

### 封装组件库

1新建vue项目 选择scss 

2目录结构 

>packages:用于存放所有组件
>
>examples:用于进行测试,把src改成examples

3修改项目的入口文件 vue.config.js 将src改成examples

4packages是打包的文件,字体图标文字也需要打包 -所有组件

5做成vue的插件(install方式)

>在packages中新建index.js(整个包的入口)-导出一个对象(中间有install方法)
>
>注册所有的组件

6 打包 

>打包:
>
>打包成库,要在pack.json中添加一句命令
>
>`"lib":"vue-cli-service build --target lib packages/index.js"`
>
>执行 npm run lib 就可打包

7git 管理项目

8 npm 发布

### 使用说明

全局安装组件库

npm  i aa-ui

全局导入

import  aaUi from 'aa-ui'

import 'aa-ui/lib/aaui.css'

Vue.use(aaUi)
// 引入字体图标
import './font/iconfont.css'
// 引入按钮组件
import AaButton from './button.vue'
// 引入diago组件
import AaDialog from './dialog.vue'
// 引入input组件
import AaInput from './input.vue'
// 引入字体图标组件
import AaIcon from './icon.vue'
// 引入开关组件
import AaSwitch from './switch.vue'
// 引入单选框组件
import AaRadio from './radio.vue'
// 引入文本组件
import Aalabel from './label.vue'
// 引入radio-group组件
import AaRadioGroup from './radio-group.vue'
// 引入复选框组件
import AaCheckbox from './checkbox.vue'
// 引入checkbox-group组件
import CheckboxGroup from './checkbox-group.vue'
// 引入form组件
import AaForm from './form.vue'
// 引入form-item组件
import AaFormItem from './form-item.vue'
const components = [
  AaButton,
  AaDialog,
  AaSwitch,
  AaInput,
  AaIcon,
  AaRadio,
  Aalabel,
  AaRadioGroup,
  AaCheckbox,
  CheckboxGroup,
  AaForm,
  AaFormItem
]

const install = function (Vue) {
  // 注册所有的组件 全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件,如果是,就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

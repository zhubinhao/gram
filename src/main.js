import Vue from 'vue'
import './plugins/axios'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { Lazyload } from 'vant';
import { Dialog } from 'vant';
import 'vant/lib/index.css';
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Dialog);
Vue.use(Lazyload, {
  lazyComponent: true,
});

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/base'
  // 是否查询其子目录
  , true
  // 匹配基础组件文件名的正则表达式, 这里可以匹配的文件名为xxx.vue格式
  , /[A-Za-z0-9-_]+\.(vue|js)$/)

requireComponent.keys().forEach((fileName) => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `'./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

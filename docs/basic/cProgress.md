# cProgress长条进度组件

## 使用教程
[点击查看教程](https://cpm828.github.io/cpm-ui/demo/index.html#/progress)


## 使用文档
### 导入
main.js中：
```js
import { cProgress } from 'cpm-ui'
Vue.use(cProgress)
```

### 调用
```html
<cProgress progress="50%"></cProgress>
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|progress|进度百分比|String||`0`|
|animate|是否开启动画|Boolean|`true`、`false`|`false`|
|showTip|是否显示当前进度提示|Boolean|`true`、`false`|`false`|


### 事件Event
无


### 插槽slot
无



## 特别提示
无
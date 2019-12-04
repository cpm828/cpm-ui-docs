# cpm-ui

> 基于Vue.js 2.0 UI组件库.

## 快速查看

### 链接
[点击查看教程](https://cpm828.github.io/cpm-ui/demo/index.html)

### 扫码查看
<img src="https://cpm828.github.io/cpm-ui/images/cpm_ui_qrcode.png">


## 使用说明

### 安装组件
```
npm install cpm-ui --save
```


### 安装 `node-sass`、`sass-loader`依赖
```
npm install node-sass --save-dev
npm install sass-loader@7.3.1 --save-dev
```
如果安装 `sass-loader` 版本的版本大于8，会报错 `Module build failed: TypeError: this.getResolve is not a function` ，只需要将 `sass-loader` 降级到v7即可

### 引入组件
main.js中引入
```js
import { Toast, Loading, Dialog, ActionSheet, cIcon } from 'cpm-ui'

// Vue.use
let components = [Toast, Loading, Dialog, ActionSheet, cIcon]
components.map(component => Vue.use(component))
```

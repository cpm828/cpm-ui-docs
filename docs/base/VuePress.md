---
sidebar: true # 隐藏侧边栏
---

## VuePress markdown 文档常用的特殊用法

> [查看原文](https://vuepress.vuejs.org/zh/guide/markdown.html)

[[toc]]


### Front Matter

```bash
---
title: Blogging Like a Hacker
description: this is a descrption
lang: en-US
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

### Table
**输入**
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**
| Tables | Are | Cool |
| ------------- |:-------------:| -----:|
| col 3 is | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat | \$1 |



### Emoji
**输入**
```
:tada: :100:
```

**输出**

:tada: :100:

[查看所有 Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)


### 目录
**输入**
```
[[toc]]
```

**输出**
[[toc]]


### 自定义容器
**输入**
```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::
```

**输出**
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

也可以自定义标题

**输入**
```
::: danger STOP
危险区域，禁止通行
:::
```

**输出**
::: danger STOP
危险区域，禁止通行
:::


### 代码高亮
**输入**
````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````


### 代码行高亮
**输入**
````
```js {2}
export default {
  name: 'MyComponent',
  // ...
}
```
````


**输出**
```js {2}
export default {
  name: 'MyComponent',
  // ...
}
```

### 行号

`.vuepress/config.js` 中配置lineNumbers即可
```
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```
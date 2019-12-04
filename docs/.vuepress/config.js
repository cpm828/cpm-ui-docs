module.exports = {
  base: '/cpm-ui-docs/', // 部署目录
  title: 'cpm-ui',  // 设置网站标题
  description: 'A Mobile UI Toolkit for Vue 2.0', // 网站meta描述
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ], // 网站head

  cache: false,
  host: '0.0.0.0', // dev server
  port: '8081', // dev server
  dest: 'dist', // build目录

  theme: '', // 使用主题，vuepress-theme-xx
  // 主题配置
  themeConfig: {
    /**
     * 顶部导航
     * 1. navbar: false表示禁用导航
     * 2. 可使用target新开标签
     * 3. 绝对路径时，后面会带一个图标
     * 4. 二级菜单使用一级items表示下拉，二级items表示一级下拉中再分组
     */
    navbar: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Example', link: 'https://cpm828.github.io/cpm-ui', target: '_self' },
      { text: 'Github', link: 'https://github.com/cpm828/cpm-ui', target: '_self' },
      { text: 'Pimi Blog', link: 'https://cpm828.github.io/blog', target: '_self' },

      // 二次菜单
      // {
      //   text: 'Other',
      //   ariaLabel: 'Other Menu',
      //   items: [
      //     { text: 'Baidu', link: 'https://www.baidu.com' },
      //     { text: 'Google', link: 'https://www.gooole.com' },
      //     {
      //       text: '搜索引起',
      //       ariaLabel: 'Search Menu',
      //       items: [
      //         { text: 'Baidu', link: 'https://www.baidu.com' },
      //         { text: 'Google', link: 'https://www.gooole.com' },
      //       ]
      //     }
      //   ]
      // }
    ],
    // 侧边栏
    sidebarDepth: 2,
    sidebar: [
      {
        title: '基础',   // 必要的
        path: '/base/', // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1    // 可选的, 默认值是 1
      },
      {
        title: '反馈类',   // 必要的
        path: '/feedback/', // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/feedback/Toast', 'Toast提示'],
          ['/feedback/Loading', 'Loading加载中'],
          ['/feedback/Dialog', 'Dialog弹窗'],
          ['/feedback/ActionSheet', 'ActionSheet弹出选择'],
          ['/feedback/DatePicker', 'DatePicker时间选择器'],
        ]
      },
      {
        title: '基础类',
        path: '/basic/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/basic/cIcon', 'cIcon图标'],
          ['/basic/cButton', 'cButton按钮'],
          ['/basic/cRate', 'cRate评分'],
          ['/basic/cProgress', 'cProgress进度'],
          ['/basic/cSearch', 'cSearch搜索栏'],
          ['/basic/cCountDown', 'cCountDown倒计时'],
          ['/basic/cIndexList', 'cIndexList索引列表']
        ]
      },
      {
        title: '表单类',
        path: '/form/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/form/cRadio', 'cRadio单选框'],
          ['/form/cRadioGroup', 'cRadioGroup单选框'],
          ['/form/cCheckbox', 'cCheckbox复选框'],
          ['/form/cCheckboxGroup', 'cCheckboxGroup复选框'],
          ['/form/cRange', 'cRange滑块'],
          ['/form/cRangeDouble', 'cRangeDouble双滑块'],
          ['/form/cSwitch', 'cSwitch开关'],
          ['/form/cInput', 'cInput用户输入']
        ]
      },
      {
        title: '布局类',
        path: '/layout/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/layout/cSticky', 'cSticky滚动吸顶'],
          ['/layout/cFixed', 'cFixed顶部或底部固定'],
          ['/layout/cTitleBar', 'cTitleBar标题栏'],
        ]
      },
      {
        title: 'css类',
        path: '/css/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/css/cssOnePx', '1px边框解决方案'],
        ]
      },
      {
        title: '感谢',   // 必要的
        path: '/base/thanks', // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1    // 可选的, 默认值是 1
      },
    ]
  },

  plugins: '', // 使用插件

  // markdown文档配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },

  evergreen: false // 浏览器兼容，true表示不考虑低级浏览器，构建速度更快
}
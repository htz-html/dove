module.exports = {
  base:'/dove-website/',
  title: '德芙 UI ',
  description: '一个好用的 UI 框架',
  themeConfig: {
    sidebar: [
      {
        title: "入门",
        collapsable: true,
        children: ['/install/','/get-started/']
      },
      {
        title: "组件",
        collapsable: true,
        children: ['/components/button', '/components/input',
          '/components/rowcol','/components/tabs','/components/collapse',
          '/components/container','/components/popover'
        ]
      },
    ]
  }
}
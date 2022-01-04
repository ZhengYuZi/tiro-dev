const { createContainer } = require('./plugins/container')

module.exports = {
  title: "Tiro", // 顶部左侧标题
  base: "/", // 项目的根路径
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: '/logo.png',
    //sidebar: false,
    sidebar: {
      "/component": [
        {
          text: "基础组件",
          children: [{ text: "按钮", link: "/component/button" }],
        },
      ],
      "/guide": false,
      "/": false,
    },
    nav: [
      // 顶部右侧导航栏
      { text: "指南", link: "/guide/guide" },
      { text: "组件", link: "/component/button" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(...createContainer('show'))
    }
  }
}
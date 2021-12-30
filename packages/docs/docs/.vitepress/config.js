module.exports = {
  title: "Tiro-UI", // 顶部左侧标题
  base: "/", // 项目的根路径
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
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
    toc: { includeLevel: [1] },
    config: (md) => {},
  },
}

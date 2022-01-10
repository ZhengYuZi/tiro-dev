import { containerPlugin } from "./plugins/md-it-plugins"

export default {
  title: "Tiro", // 顶部左侧标题
  base: "/", // 项目的根路径
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "/logo.png",
    sidebar: {
      "/component": [
        {
          text: "Base 基础组件",
          children: [
            { text: "Select 选择器", link: "/component/select" },
            { text: "Input 输入框", link: "/component/input" },
            { text: "Icon 图标", link: "/component/icon" },
            { text: "Color 色彩", link: "/component/color" },
          ],
        },
        {
          text: "Form 表单组件",
          children: [
            { text: "CheckBox 多选框", link: "/component/checkbox" },
            { text: "Border 边框", link: "/component/border" },
            { text: "From 表单", link: "/component/form" },
            { text: "Radio 单选框", link: "/component/radio" },
          ],
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
      md.use(...containerPlugin())
    },
  },
}

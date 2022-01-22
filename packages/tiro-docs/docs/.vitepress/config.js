import { containerPlugin } from "./src/plugins/md-it-plugins"

export default {
  title: "Tiro",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    sidebar: {
      "/component": [
        {
          text: "Base 基础组件",
          children: [
            { text: "Select 选择器", link: "/component/select" },
            { text: "Input 输入框", link: "/component/input" },
            { text: "Image 图片", link: "/component/image" },
            { text: "Button 按钮", link: "/component/button" },
            { text: "Icon 图标", link: "/component/icon" },
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
      { text: "BOOM!", link: "/boom/boom" },
      { text: "指南", link: "/guide/guide" },
      { text: "组件", link: "/component/select", base: "/component" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(...containerPlugin())
    },
  },
}

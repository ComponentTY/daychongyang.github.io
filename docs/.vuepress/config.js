module.exports = {
  title: "DayDayUp",
  description: "Day Day Up!",
  base: "/",
  themeConfig: {
    nav: [
      { text: "Daily", link: "/daily/new" },
      { text: "JavaScript", link: "/javascript/数据类型和数据结构/数据结构" },
      {
        text: "工具",
        items: [{ text: "SketchBoard", link: "https://sketchboard.me/" }]
      },
      {
        text: "Links",
        items: [
          { text: "Overreacted", link: "https://overreacted.io/" },
          { text: "前端精读周刊", link: "https://github.com/dt-fe/weekly" },
          {
            text: "山月行",
            link: "https://shanyue.tech/"
          }
        ]
      },
      { text: "GitHub", link: "https://github.com/daychongyang" }
    ],
    sidebar: {
      "/daily/": ["/daily/new", "/daily/instanceof"],
      "/javascript/": [
        {
          title: "数据类型和数据结构",
          children: [
            "/javascript/数据类型和数据结构/数据结构",
            "/javascript/数据类型和数据结构/数据类型",
            "/javascript/数据类型和数据结构/类型转换",
            "/javascript/数据类型和数据结构/类型判断"
          ]
        },
        {
          title: "内存空间",
          children: [
            "/javascript/内存空间/内存管理",
            "/javascript/内存空间/垃圾回收"
          ]
        },
        {
          title: "执行上下文",
          children: []
        },
        {
          title: "变量对象",
          children: []
        },
        {
          title: "作用域和作用域链",
          children: []
        },
        {
          title: "闭包",
          children: []
        },
        {
          title: "this",
          children: []
        }
      ]
    }
  },
  plugins: ["@vuepress/medium-zoom"]
};

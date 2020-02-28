module.exports = {
  title: "DayDayUp",
  description: "Day Day Up!",
  base: "/",
  themeConfig: {
    nav: [
      { text: "Daily", link: "/daily/" },
      { text: "JavaScript", link: "/javascript/" },
      {
        text: "Links",
        items: [
          { text: "前端精读周刊", link: "https://github.com/dt-fe/weekly" }
        ]
      }
    ],
    sidebar: {
      "/daily/": [
        {
          title: "HTML",
          path: "/daily/html/",
          children: ["/daily/html/seo"]
        },
        {
          title: "CSS",
          path: "/daily/css/",
          children: ["/daily/css/layout"]
        },
        {
          title: "JavaScript",
          path: "/daily/javascript/",
          children: [
            "/daily/javascript/数据类型",
            "/daily/javascript/类型转换",
            "/daily/javascript/类型判断"
          ]
        },
        {
          title: "React",
          path: "/daily/react/",
          children: [
            {
              title: "React 源码解析",
              path: "/daily/react/source",
              children: ["/daily/react/source/api"]
            }
          ]
        },
        {
          title: "React Native",
          path: "/daily/react-native/",
          children: [
            "/daily/react-native/platform-mac-workspace",
            "/daily/react-native/common-setting"
          ]
        },
        {
          title: "CI",
          path: "/daily/ci/",
          children: ["/daily/ci/travis"]
        }
      ]
    }
  },
  plugins: ["@vuepress/medium-zoom"]
};

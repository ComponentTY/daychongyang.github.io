module.exports = {
  title: "DayDayUp",
  description: "Day Day Up!",
  base: "/",
  theme: "@vuepress/blog",
  themeConfig: {
    directories: [
      {
        id: "Blog",
        dirname: "daybyday",
        path: "/"
      }
    ],
    nav: [
      {
        text: "Daily",
        link: "/"
      },
      {
        text: "标签",
        link: "/tag/"
      },
      {
        text: "GitHub",
        link: "https://github.com/daychongyang/daychongyang.github.io"
      }
    ],

    footer: {
      copyright: [
        {
          text: "MIT Licensed | Copyright © 2020 Day",
          link: ""
        }
      ]
    },
    paginationComponent: "SimplePagination",
    dateFormat: "YYYY-MM-DD",
    smoothScroll: true
    // comment: {
    // 	service: "vssue",
    // 	autoCreateIssue: true,
    // 	prefix: "[Post]",
    // 	owner: "daychongyang",
    // 	repo: "daychongyang.github.io",
    // 	clientId: "413b4d219e5254f3beb3",
    // 	clientSecret: "c5a9d7c81b206ec1649596197a23b08df8a32024"
    // }
  }
};

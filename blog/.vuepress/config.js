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
			{text: "GitHub", link: "https://github.com/daychongyang"}
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
	},
	plugins: ["@vuepress/medium-zoom"]
}

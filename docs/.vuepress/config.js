module.exports = {
	title: "DayDayUp",
	description: "Day Day Up!",
	base: "/",
	themeConfig: {
		nav: [
			{text: "Daily", link: "/daily/new"},
			{text: "JavaScript", link: "/javascript/数据类型和数据结构/数据结构"},
			{
				text: "Links",
				items: [{text: "前端精读周刊", link: "https://github.com/dt-fe/weekly"}]
			}
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
					children: ["/javascript/内存空间/内存管理"]
				}
			]
		}
	},
	plugins: ["@vuepress/medium-zoom"]
}

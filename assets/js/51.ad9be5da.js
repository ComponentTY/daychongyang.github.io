(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{435:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"yum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[t._v("#")]),t._v(" yum")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除旧版本")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum remove docker "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-client "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-client-latest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-common "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-latest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-latest-logrotate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-logrotate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-selinux "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-engine-selinux "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-engine\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖包")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n           device-mapper-persistent-data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n           lvm2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Docker-CE")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum makecache fast\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n")])])]),n("h2",{attrs:{id:"脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[t._v("#")]),t._v(" 脚本")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL get.docker.com -o get-docker.sh\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" get-docker.sh --mirror Aliyun\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ sudo sh get-docker.sh --mirror AzureChinaCloud")]),t._v("\n")])])]),n("h2",{attrs:{id:"用户组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用户组"}},[t._v("#")]),t._v(" 用户组")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" docker\n$  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
---
title: JavaScript的加载方式
date: 2020-04-20
tags:
  - JavaScript
  - Deep In JavaScript
author: Day
---

JavaScript 是单线程运行的, 在 JavaScript 运行一段代码块的时候,页面中的其他事情(UI 更新、其它脚本加载执行)在同一时间是被挂起的状态, 不能被同时处理.

`<script>` 标签用来在 HTML 文档中加载可执行脚本, 当浏览器解析 HTML 文档时, 依据 `<script>` 标签不同的属性, 表现不同的行为.

## 同步加载

浏览器解析 HTML 文档时, 解析到没有 `async`、`defer` 的`<script>`标签时, 会阻塞 HTML 文档的解析, 并按照出现的顺序执行.

## 无阻塞加载

### async

`<script async src="./async.js"></script>`

1. 仅适用于外部脚本
2. 加载脚本不会阻塞页面解析
3. 脚本加载后, 立即执行(不会按照出现顺序执行, 先下载完成先执行.)
4. 执行时, 页面可能未完全解析, 会阻塞后续 HTML 加载

### defer

`<script defer src="./defer.js"></script>`

1. 仅适用于外部脚本
2. 加载脚本不会阻塞页面解析
3. 在 HTML 页面完成解析之后, `DOMContentLoaded` 执行执行(按照出现顺序逐个执行)

## 延迟加载

在页面载入完成之后载入外部脚本文件

```js
window.onload = function() {
  var script = document.createElement("script");
  script.src = "./a.js";
  document.body.appendChild(script);
};
```

## 按需加载

```js
require("a.js", function() {
  //……
});

function require(file, callback) {
  var script = document.getElementsByTagName("script")[0];
  var newjs = document.createElement("script");

  newjs.onload = function() {
    callback();
  };

  newjs.src = file;
  script.parentNode.insertBefore(newjs, script);
}
```

## 预加载

```html
<link rel="prefetch" as="script" href="./a.js" />
<link rel="preload" as="script" href="./a.js" />
```

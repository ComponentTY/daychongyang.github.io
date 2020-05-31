---
title: 浏览器的 ES Modules
date: 2020-05-26
tags:
  - JavaScript
  - ES Modules
author: Day
---

浏览器的[模块化](https://v8.dev/features/modules)特性, 通过使用 `<script type="module">` 标签 `import` 脚本, 可以不经过打包直接在浏览器环境下运行.

## 兼容性

[静态导入](https://caniuse.com/#feat=es6-module)

[动态导入](https://caniuse.com/#feat=es6-module-dynamic-import)

## 模块与标准脚本的差别

- 默认启用严格模式
- 不支持 html 样式的注释语法
- 模块自动延迟加载(defer)
- 模块具有词法顶级作用域
- 模块只计算一次

## 使用方式

```html
<!-- 支持 模块 -->
<script type="module" src="main.mjs"></script>
<!-- 不支持 模块 -->
<script nomodule src="fallback.js"></script>
```

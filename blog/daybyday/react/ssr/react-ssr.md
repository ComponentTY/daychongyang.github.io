---
title: React SSR
date: 2020-03-11
tags:
  - React
  - SSR
author: Day
---

## 前端渲染方式

- CSR: 客户端渲染, 在浏览器中渲染应用程序
- Prerendering: 预渲染, 在应用程序构建时,使用静态 HTML 作为其初始状态
- SSR: 服务端渲染, 在服务器上将应用程序渲染为 HTML
- Rehydration: 同构, 在客户端上“启动” JavaScript 视图，复用服务器渲染的 HTML DOM 树和数据

## 性能指标

- TTFB: Time to First Byte (首字节时间)
- FP: First Paint (首次绘制, 标记浏览器渲染任何在视觉上不同于导航前屏幕内容之内容的时间点)
- FCP: First Contentful Paint (首次内容绘制, 标记的是浏览器渲染来自 DOM 第一位内容的时间点)
- FMP: First Meaningful Paint(首次有意义绘制, 标记应用是否已渲染可以与用户互动的足够内容的时间点)
- TTI: Time To Interactive (可交互时间, 标记应用已进行视觉渲染并能可靠响应用户输入的时间点)

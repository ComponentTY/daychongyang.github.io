---
title: HTML meta 标签
date: 2020-05-25
tags:
  - HTML
  - meta
author: Day
---

`HTML` `meta` 标签用于表示那些不能由其它`HTML`元相关元素(`base`,`link`,`script`,`style`,`title`)表示的任何元数据信息.

## 作用

- 描述网页信息
- 指定网页字符集
- 控制页面缓存
- SEO
- 控制移动端视口
- ...

## `meta` 元素定义的元数据类型

### 文档元数据(设置`name`属性)

- `application-name` 正运行在当前网页上的网络应用名称
- `author` 作者
- `copyright` 版权
- `description` 内容描述
- `generator` 网页制作软件
- `keywords` 关键字
- `referrer` 控制所有从该文档发出的 HTTP 请求中 HTTP `Referer` 首部的内容

  - `no-referrer` 不发送 HTTP Referer 首部
  - `origin` 发送当前文档的 `origin`
  - `no-referrer-when-downgrade` 当目标网站是较为安全时(`https` => `https`, `http` => `https`, `http` => `http`), 发送 `origin` 作为 `referrer`; 当目标网站是较不安全时(`https`=>`http`), 不发送 `referrer`
  - `origin-when-crossorigin` 同源请求下, 发送 `URL`, 否则 发送当前文档的 `origin`
  - `unsafe-URL` 同源请求下, 发送完整的 `URL`

- `revisit-after` 搜索引擎重访时间
- `renderer` 双核浏览器渲染方式
- `robots` 搜索引擎爬虫索引方式
  - `none` 搜索引擎将忽略该网页
  - `index` 搜索引擎索引此网页
  - `noindex` 搜索引擎不索引此网页
  - `follow` 搜索引擎继续通过此网页的链接索引搜索其它的网页
  - `nofollow` 搜索引擎不继续通过此网页的链接索引搜索其它的网页
- `viewport` 移动端视口
  - `width` 视口宽度(正整数或 'device-width')
  - `height` 视口高度(正整数或 'device-height')
  - `initial-scale` 视口宽度与视口大小之间的缩放比(0.0 ~ 10.0)
  - `minimum-scale` 视口宽度与视口大小之间的最小缩放比(0.0 ~ 10.0)
  - `maximum-scale` 视口宽度与视口大小之间的最大缩放比(0.0 ~ 10.0)
  - `user-scalable` 用户缩放(布尔值)

### 编译指令(设置`http-equiv`属性)

- `Content-Type` (`"text/html; charset=utf-8"`)
- `Cache-Control` 缓存控制
- `Expires` 网页过期时间
- `Pragma` cache 模式
- `Refresh` 刷新
- `Set-Cookie` cookie 设定

### 字符集声明(设置`charset`属性)

### 用户定义元数据(设置`itemprop`属性)

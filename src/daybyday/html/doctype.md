---
title: DOCTYPE 标签
date: 2020-05-25
tags:
  - HTML
  - doctype
author: Day
---

`<!DOCTYPE>` 用于指定解析器解析文档时使用的文档类型定义（DTD）;

所有浏览器都支持 `<!DOCTYPE>` 声明.

`<!DOCTYPE>` 声明不是 HTML 标签;

`<!DOCTYPE>` 声明必须是 HTML 文档的第一行, 位于 `<html>` 标签之前.

### HTML 4.01

在 HTML4.01 中，<!DOCTYPE> 声明引用DTD，因为HTML4.01基于SGML。

```html
<!-- 严格模式 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"  "http://www.w3.org/TR/html4/strict.dtd">

<!-- 过渡模式 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">

<!-- 框架模式 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"  "http://www.w3.org/TR/html4/frameset.dtd">
```

### HTML 5

HTML 5不基于SGML，所以不需要引用DTD。

```html
<!DOCTYPE html>
```
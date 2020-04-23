---
title: Ajax
date: 2020-03-29
tags:
  - JavaScript
  - Ajax
author: Day
---

## 什么是 Ajax?

`Ajax` 是异步的 `JavaScript` 和 `XML`(`Asynchronous JavaScript And XML`).

- 在不重新加载页面的情况下发送请求给服务器.
- 接收并使用从服务器发来的数据.

## Ajax 实现

### 发送 HTTP 请求

```js
if (window.XMLHttpRequest) {
  // code for modern browsers
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // code for old IE browsers(<=6)
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

/** GET */
xhr.open("GET", url, true);
xhr.send();

/** POST */
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(params);
```

### 处理服务器响应

```js
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    var status = xhr.status;
    if (status >= 200 && status < 300) {
      /** SUCCESS CALLBACK */
    } else if (typeof options.fail === "function") {
      /** ERROR CALLBACK */
    }
  }
};
```

### readyState 状态值

- 0 (未初始化) or (请求还未初始化)
- 1 (正在加载) or (已建立服务器链接)
- 2 (加载成功) or (请求已接受)
- 3 (交互) or (正在处理请求)
- 4 (完成) or (请求已完成并且响应已准备好)

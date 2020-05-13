---
title: VS Code 调试 Node.js 应用
date: 2020-05-11
tags:
  - Debug
  - Koa
  - Node.js
author: Day
---

## 运行配置

### launch.json

```json
{
  "name": "调试 Node.js 程序", // 名称
  "type": "node", // 调试类型
  "request": "launch", // 1. launch 打开应用程序进入调试, 2. attach 对于已打开应用程序, 接通 Node.js 内部调试协议进行调试
  "program": "${workspaceFolder}/src/index.js" // 应用程序入口
}
```


```json
{
  "name": "调试 Node.js 程序", // 名称
  "type": "node", // 调试类型
  "request": "launch", // 1. launch 打开应用程序进入调试, 2. attach 对于已打开应用程序, 接通 Node.js 内部调试协议进行调试
  "runtimeExecutable": "node", // 应用程序启动命令
  "args": [
    "${workspaceFolder}/src/index.js"
  ] // 启动参数
}
```

### 调试 TS Node 程序

```json
{
  "name": "调试 TS Node 程序 - args",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "node",
  "runtimeArgs": [
    "-r",
    "ts-node/register"
  ],
  "args": [
    "${workspaceFolder}/src/index.ts"
  ]
}
```

```json
{
  "name": "调试 TS Node 程序 - preTask",
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/out/index.js",
  "preLaunchTask": "tsc_build" // launch 调试之前先执行任务
}
```

### 调试已启动的 Node.js 程序

```json
{
  "name": "Attach to node",
  "type": "node",
  "request": "attach",
  "processId": "${command:PickProcess}"
}
```


### 调试 Node.js 网页

 VSCode 插件 `Debugger for Chrome`

```json
{
  "name": "调试网页的 JS 文件",
  "request": "launch",
  "type": "chrome",
  "file": "${workspaceFolder}/index.html"
}
```
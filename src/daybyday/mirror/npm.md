---
title: npm mirror
date: 2020-03-28
tags:
  - npm
  - mirror
author: Day
---

## 手动修改 `.npmrc` 文件

```sh
# vim ~/.npmrc

registry = https://registry.npm.taobao.org
```

## 使用命令

```sh
npm config set registry https://registry.npm.taobao.org

# nrm
npx nrm use taobao
```

## 添加环境变量

```sh
# vim ~/.zshrc
NPＭ_CONFIG_REGISTRY=https://registry.npm.taobao.org
```

二进制编译文件镜像加速

```sh
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
```

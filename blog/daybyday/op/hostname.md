---
title: hostname
date: 2020-03-10
tags:
  - 服务器运维
  - hostname
author: Day
---

## 查看主机名

```sh
$ hostname
```

## 修改主机名

```sh
# 手动
$ vim /etc/hostname
$ reboot
```

```sh
# hostnamectl 命令
$ hostnamectl set-hostname <newhostname>
$ reboot
```

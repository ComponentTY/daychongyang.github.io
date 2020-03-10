---
title: Docker
date: 2020-03-10
tags:
  - 服务器运维
  - docker
author: Day
---

## yum

```sh
# 移除旧版本
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
# 安装依赖包
$ sudo yum install -y yum-utils \
           device-mapper-persistent-data \
           lvm2

# 安装 Docker-CE
$ sudo yum makecache fast
$ sudo yum install docker-ce
```

## 脚本

```sh
$ curl -fsSL get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh --mirror Aliyun
# $ sudo sh get-docker.sh --mirror AzureChinaCloud
```

## 用户组

```sh
$ groupadd docker
$  usermod -aG docker $USER
```

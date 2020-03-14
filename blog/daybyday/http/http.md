---
title: 网络分层模型
date: 2020-03-13
tags:
  - HTTP
  - TCP/IP
  - 网络基础
author: Day
---

## HTTP 发展史

- HTTP/0.9 `1990`

- HTTP/1.0 `1996`

- HTTP/1.1 `1997`

- HTTP/2.0 `2015`

## 网络基础 TCP/IP

`TCP/IP` 是互联网相关的协议的统称.

## 网络分层模型

### OSI 七层模型

Open Systems Interconncection(开放系统互联)

- 应用层 (各种应用程序协议)

  - DNS 域名系统 (Domain Name System)
  - HTTP 超文本传输协议 (HyperText Transfer Protocol )
  - FTP 文件传输协议 (File Transfer Protocol)
  - DHCP 动态主机配置协议 (Dynamic Host Configuration Protocol)
  - POP3 邮局协议版本 3 (Post Office Protocol - Version 3)
  - SMTP 简单邮件传输协议 (Simple Mail Transfer Protocol)

- 表示层 (信息的语法语义以及其关联, 如数据格式转换,加密解密,压缩解压缩,转换翻译等)

  - LPP 轻量级表示协议 (Lightweight Presentation Protocol)

- 会话层 (不同机器上的用户之间建立及管理会话)

  - SSL 安全套接字层 (Secure Sockets Layer)

- 传输层 (接收上一层的数据,在必要的时候把这些数据进行分割,并把这些数据交给网络层,且保证这些数据段有效的到达对端)

  - TCP 传输控制协议 (Transmission Control Protocol)
  - UDP 用户数据协议 (User Datagram Protocol)

- 网络层 (通过路由选择算法，为报文或分组通过通信子网选择最适当的路径。该层控制数据链路层与传输层之间的信息转发，建立、维持和终止网络的连接。)

- 数据链路层 (通过各种控制协议，将有差错的物理信道变为无差错的、能可靠传输数据帧的数据链路。)

- 物理层 (为设备之间的数据通信提供传输媒体及互连设备，为数据传输提供可靠的环境。)
  - 物理联网媒介

![OSI](/http/OSI.png)

### TCP/IP 分层管理

- 应用层

- 传输层

- 网络层

- 链路层

- 物理层

![OSI](/http/tcpip.jpg)

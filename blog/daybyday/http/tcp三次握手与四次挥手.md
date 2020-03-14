---
title: TCP 三次握手与四次挥手
date: 2020-03-14
tags:
  - HTTP
  - TCP/IP
author: Day
---

## 什么是三次握手、四次挥手?

TCP 是一种面向连接、可靠的、基于字节流的传输层通信协议.

`三次握手` 客户端与服务端建立 TCP 连接时, 发送三个包的过程.

`四次挥手` 客户端与服务端关闭 TCP 连接时, 发送四个包的过程.

## TCP 头部

![三次握手](/http/tcp-header.webp)

### 控制位

- `ACK` 表示接收数据序号字段有效，一般表示数据已被接收方接收
- `PSH` 表示通过 flush 操作发送的数据
- `RST` 强制断开连接，用于异常中断的情况
- `SYN` 发送方和接收方相互确认序号，表示连接操作
- `FIN` 表示断开连接

### 序号（发送数据的顺序编号）

- seq(sequence number)：(报文段)序号

### ACK 号（接收数据的顺序编号）

- ack(Acknowledgement Number)：确认号

## 三次握手

![三次握手](/http/三次握手.png)

## 四次挥手

![四次挥手握手](/http/四次挥手.png)

> 2MSL Maximum Segment Lifetime 报文最大生存时间, 实际应用 30s, 一分钟, 两分钟

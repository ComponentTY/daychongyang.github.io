---
title: oh my zsh
date: 2020-03-10
tags:
  - 服务器运维
author: Day
---

```sh
$ yum -y install zsh

$ chsh -s /bin/zsh

# curl
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# wget
$ sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"


# 修改主题
$ ls ~/.oh-my-zsh/themes


# ZSH_THEME="ys"
$ vim ~/.zshrc

```

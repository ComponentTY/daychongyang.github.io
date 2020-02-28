# React Native 开发环境(Mac OS)

[[toc]]

## 安装依赖

1. `Node.js` (版本在 v10 以上, npx nrm use taobao)
2. `Watchman` (文件监控系统, reload 文件遍历机制更加高效 )
3. `Xcode` (Xcode 命令行工具 Xcode | Preferences | Location Command Line Tools)

```sh
#安装 node / http://nodejs.cn/download/

brew install node #安装 文件监控系统
brew install watchman
```

## 切源

```sh
npx nrm use taobao
初始化项目

```

## 初始化

```sh
# 初始化项目
npx react-native init <porject_name>

# typescript
npx react-native init <porject_name> react-native-template-typescript
```

## 安装 CocoaPods

### 升级 自带 Ruby Gem

```sh
sudo gem update --system
```

### 更换 Ruby 源

```sh
gem sources --remove https://rubygems.org/
gem sources --add https://gems.ruby-china.com/
```

### 安装 cocoaPods

```sh
sudo gem install -n /usr/local/bin cocoapods
```

### 安装失败, 重新安装

```sh
sudo gem uninstall --all
```

### 导入 pod 库

```sh
pod init
```

### 查找对应库

```sh
pod search
```

### CocoaPods 镜像

#### 旧版

```sh
pod repo remove master
pod repo add master https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git
pod repo update
```

#### 新版

##### 镜像

```sh
cd ~/.cocoapods/repos
pod repo remove master
git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master
```

> podFile 加入 `source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'`

#### CDN

> podFile 加入 `source 'https://cdn.cocoapods.org/''`

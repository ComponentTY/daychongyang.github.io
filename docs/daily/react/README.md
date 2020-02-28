---
sidebarDepth: 0
---

# React 源码

## 源码概览

[React 源码概览](https://zh-hans.reactjs.org/docs/codebase-overview.html)

1. 基本无外部依赖 (`fbjs`)

2. 顶层目录

   - `fixtures` 测试项目
   - `packages` 元数据、源码包
   - `scripts` 构建脚本

3. `warning` 和 `invariant`

   - 警告会在 `warning` 的条件为 `false` 时出现
   - 当 `invariant` 判别条件为 `false` 时，会将 `invariant` 的信息作为错误抛出

4. 开发环境与生产环境
   使用 `__DEV__` 伪全局变量, 在 `CommonJS` 构建中，转化成 `process.env.NODE_ENV !== 'production'`, 在 minify 的构建中，检测到的 if 代码块会被完全剔除。

5. 动态注入 (For React Native)

6. Multiple Packages (`monorepo`)

7. React Core (`packages/react` )

   - React 核心只包含定义组件必要的 API

8. 渲染器

   - `React DOM Renderer`

     - packages/react-dom
     - 将 React 组件渲染成 DOM

   - `React Native Renderer`

     - packages/react-native-render
     - 实现了 React 和 React Native 的连接

   - `React Test Renderer`

     - packages/react-dom
     - 将 React 组件渲染为 JSON 树

9. reconcilers

   - 渲染器间共享代码

10. Fiber reconciler

    - packages/react-reconciler
    - `Fiber` 从 React 16 开始变成了默认的 reconciler
    - 主要目标:

      - 能够将可中断任务切片处理
      - 能够调整任务优先级, 重置并复用任务
      - 能够在父元素与子元素之间交错处理, 以支持 React 中的布局
      - 能够在 `render` 函数中返回多个元素
      - 能够更好地支持错误边界

11. 事件系统

    - packages/legacy-event
    - 合成事件

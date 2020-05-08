---
title: Koa2 洋葱模型
date: 2020-05-08
tags:
  - Koa 
  - Node.js
author: Day
---

## Hello Koa
```ts
import Koa from 'koa'

const app = new Koa()

app.use(async (ctx, next) => {
  console.log('1-1')
  await next()
  console.log('1-2')
})

app.use(async (ctx, next) => {
  console.log('2-1')
  await next()
  console.log('2-2')
})

app.use(async (ctx, next) => {
  console.log('3-1')
})

app.listen(9527, function() {
  console.log('9527')
})

// 访问输出结果
// 9527
// 1-1
// 2-1
// 3-1
// 2-2
// 1-2
```

## [Koa 源码](https://github.com/koajs/koa/blob/8d52105a34234be9e771ff3b76b43e4e30328943/lib/application.js#L214)

```js
import http, { IncomingMessage, ServerResponse } from 'http'

interface Middleware {
  (context: Context, next: Function): any
}

interface Context {
  request: IncomingMessage
  response: ServerResponse
}

/** =>!<= **/
function compose(middlewares: Middleware[]) {
  /** Closure */
  return function(context: Context, next: Middleware) {
    let preIndex = -1
    return dispatch(0)

    function dispatch(current: number) {
      if (current <= preIndex) console.error('next() called multiple times')
      preIndex = current
      let middleware = middlewares[current]
      if (current === middlewares.length) middleware = next
      if (!middleware) return Promise.resolve()

      try {
        const result = middleware(context, dispatch.bind(null, current + 1))
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}

class Koa {
  middlewares: Middleware[]

  constructor() {
    this.middlewares = []
  }

  use(middleware: Middleware) {
    this.middlewares.push(middleware)
  }

  listen(port: number) {
    const server = http.createServer(this.callback())
    return server.listen(port)
  }

  callback() {
    const fn = compose(this.middlewares)

    const handleRequest = (request: IncomingMessage, response: ServerResponse) => {
      return this.handleRequest(
        {
          request,
          response,
        },
        fn,
      )
    }

    return handleRequest
  }

  handleRequest(context: Context, middlewareFunc: Function) {
    return middlewareFunc(context)
      .then(() => {
        context.response.end('hello koa')
      })
      .catch((error: Error) => {
        console.log('error', error)
      })
  }
}

const app = new Koa()

app.use(async (context, next) => {
  console.log(1)
  next()
})

app.use(async () => {
  console.log(2)
})

app.listen(9528)

```
---
title: Webpack Bundle
date: 2020-03-14
tags:
  - Webpack
author: Day
---

## webpackBootstrap

```js
(function(modules) {
  /** @webpackJsonpCallback */
  function webpackJsonpCallback(data) {
    var chunkIds = data[0];
    var moreModules = data[1];
    var excuteModules = data[2];

    var chunkId;
    var resolves = [];

    for (var i = 0; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (
        __webpack_require__.o(installedChunks, chunkId) &&
        installedChunks[chunkId]
      ) {
        /** 已加载需要重新执行 */
        resolves.push(installedChunks[chunkId][0]);
      }

      /** 标记已加载 */
      installedChunks[chunkId] = 0;
    }

    for (var moduleId in moreModules) {
      if (__webpack_require__.o(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }

    /** 将代码块推入全局变量 window.jsonpArray */
    if (parentJsonpFunction) parentJsonpFunction(data);

    /** 重新执行代码块 */
    while (resolves.length) {
      resolves.shift()();
    }

    /** 装载异步模块 */
    deferredModules.push.apply(deferredModules, excuteModules || []);

    return checkDeferredModules();
  }

  /** @检查异步代码块 */
  function checkDeferredModules() {
    var result = {};

    for (var i = 0; i < deferredModules.length; i++) {
      var deferredModule = deferredModules[i];
      var fulfilled = true;
      for (var j = 1; j < deferredModule.length; j++) {
        var depId = deferredModule[j];

        /** [0,'runtime~main'] */
        if (installedModule[depId] !== 0) fulfilled = false;
      }

      if (fulfilled) {
        deferredModules.splice(i--, 1);
        result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0])
        );
      }
    }

    return result;
  }

  /** @模块缓存池 */
  var installedModules = {};
  /**
   * @chunk缓存池
   * undefined = chunk not loaded 未加载
   * null = chunk preloaded/prefetched 已预加载
   * Promise = chunk loading 加载中
   * 0 = chunk loaded 已加载
   */
  var installedChunks = {
    "runtime~main": 0
  };

  /**
   * @异步模块池
   */
  var deferredModules = [];

  /** @脚本路径 */
  function jsonpScriptSrc(chunkId) {
    return (
      __webpack_require__.p +
      "js/" +
      chunkId +
      "." +
      { "0": "5b1a6960", "1": "6cbd935d", "2": "cd3c14dc" }[chunkId] +
      ".js"
    );
  }

  /** @WebpackRequire */
  function __webpack_require__(moduleId) {
    /** 已加载过,直接返回 */
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    /** 新建模块 并放进缓存池 */
    var module = (installedModules[moduleId] = {
      /** 模块 id */
      i: moduleId,
      /** 是否已加载 */
      l: false,
      exports: {}
    });

    /** 执行模块 */
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    /** 标记为已加载 */
    module.l = true;

    /** 返回模块导出对象 */
    return module.exports;
  }

  /** 代码块加载方法 */
  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = [];
    var installedChunkData = installedChunks[chunkId];

    if (installedChunkData !== 0) {
      /** promise */
      if (installedChunkData) {
        promises.push(installedChunkData[2]);
      } else {
        /** 为已处理模块设置默认 Promise */
        var promise = new Promise(function(resolve, reject) {
          installedChunkData = installedChunks[chunkId] = [resolve, reject];
        });
        promises.push((installedChunkData[2] = promise));

        /** 加载 */
        var script = document.createElement("script");
        var onScriptComplete;
        script.charset = "utf-8";
        script.timeout = 120;

        /** Content Security Policy http://www.ruanyifeng.com/blog/2016/09/csp.html */
        if (__webpack_require__.nc) {
          script.setAttribute("nonce", __webpack_require__.nc);
        }

        var error = new Error();
        onScriptComplete = function(event) {
          var timeout;
          script.onerror = script.onload = null;

          clearTimeout(timeout);
          var chunk = installedChunks[chunkId];
          if (chunk !== 0) {
            /** loading */
            if (chunk) {
              var errorType =
                event && (event.type === "loading" ? "missing" : event.type);
              var realSrc = event && event.target && event.target.src;
              error.message =
                "Loading chunk " +
                chunkId +
                " failed. \n(" +
                errorType +
                ": " +
                realSrc +
                ")";
              error.name = "ChunkLoadError";
              error.type = errorType;
              error.request = realSrc;
              /** reject */
              chunk[1](error);
            }
            installedChunks[chunkId] = undefined;
          }
        };
        var timeout = setTimeout(function() {
          onScriptComplete({
            type: "timeout",
            target: script
          });
        }, 120000);

        /** onload 脚本加载执行结束之后, 事件执行 */
        script.onerror = script.onload = onScriptComplete;
        document.head.appendChild(script);
      }

      return Promise.all(promises);
    }
  };

  /** @模块池 */
  __webpack_require__.m = modules;

  /** @缓存池 */
  __webpack_require__.c = installedModules;

  /** @ESExports定义getter */
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  /** @hasOwnProperty */
  __webpack_require__.o = o;

  /** @对ESModule设置__esModule属性 */
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== undefined && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }

    Object.defineProperty(exports, "__esModule", { value: true });
  };

  /** @创建命名空间 */
  __webpack_require.t = function(value, mode) {
    if (mode & 1) {
      /** value 为 moduleId */
      value = __webpack_require__(value);
    }

    if (mode & 8) {
      return value;
    }

    if (mode & 4) {
      if (typeof value === "object" && value.__esModule) {
        return value;
      }
    }

    var namespace = Object.create(null);
    __webpack_require__.r(namespace);

    Object.defineProperty(namespace, "default", {
      enumberable: true,
      value: value
    });

    if (mode & 2 && typeof value != "string")
      /** esModule 定义getter */
      for (var key in value)
        __webpack_require__.d(
          namespace,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return namespace;
  };

  /** 兼容nonharmony模块, 若设置了__esModule属性则被标记为non-harmony */
  __webpack_require__.n = function(module) {
    var getter =
      module && module["__esModule"]
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };

    __webpack_require__.d(getter, "a", getter);
  };

  /** @publicPath */
  __webpack_require__.p = "/";

  /** @on error function */
  __webpack_require__.oe = function(err) {
    console.error(err);
    throw err;
  };

  /** @runtimeChunk true */
  var jsonpArray = (window["jsonpArray"] = window["jsonpArray"] || []);
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();
  for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);

  var parentJsonpFunction = oldJsonpFunction;

  /** @执行异步代码块 */
  checkDeferredModules();

  /** @runtimeChunk false*/
  /** @加载入口模块并返回exports */
  __wwebpack_require__((__webpack_require__.s = 0));
})([]);
```

## main

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    "./src/index.tsx": function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {},

    0: function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("./src/index.tsx");
    }
  },
  [[0, "runtime~main"]]
]);
```

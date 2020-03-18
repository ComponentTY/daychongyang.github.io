---
title: AST
date: 2020-03-15
tags:
  - AST
comment:
  title: AST
---

抽象语法树 (Abstract Syntax Tree) 是源代码的抽象语法结构的树状表现形式.

[AST Explorer](https://astexplorer.net/)

```ts
//  index.ts
import {resolve} from "path"
import {readFileSync, writeFileSync} from "fs"
/** ECMAScript解析器 */
import {parseScript} from "esprima"
/** ECMAScript遍历函数 */
import {traverse} from "estraverse"
/** ECMAScript代码生成器 */
import {generate} from "escodegen"

const programPath = resolve(__dirname, "source.ts")
const scriptPath = resolve(__dirname, "../ast/script.json")
const targetPath = resolve(__dirname, "../ast/generate.js")
const program = readFileSync(programPath, "utf-8")

const ast = parseScript(program, {loc: true, range: true, comment: true})

const writeToDisk = (path: string, data: object | string) => writeFileSync(path, data, "utf-8")

writeToDisk(scriptPath, JSON.stringify(ast, null, 2))

traverse(ast, {
	enter: node => {
		if (node.type === "VariableDeclaration") {
			if (node.kind === "let") node.kind = "var"
		}
	}
})

writeToDisk(targetPath, generate(ast))
```

```ts
//  source.ts
let a = 1
```

```js
// generate.js
var a = 1
```

```json
// ast.json
{
	"type": "Program",
	"body": [
		{
			"type": "VariableDeclaration",
			"declarations": [
				{
					"type": "VariableDeclarator",
					"id": {
						"type": "Identifier",
						"name": "a",
						"range": [4, 5],
						"loc": {
							"start": {
								"line": 1,
								"column": 4
							},
							"end": {
								"line": 1,
								"column": 5
							}
						}
					},
					"init": {
						"type": "Literal",
						"value": 1,
						"raw": "1",
						"range": [8, 9],
						"loc": {
							"start": {
								"line": 1,
								"column": 8
							},
							"end": {
								"line": 1,
								"column": 9
							}
						}
					},
					"range": [4, 9],
					"loc": {
						"start": {
							"line": 1,
							"column": 4
						},
						"end": {
							"line": 1,
							"column": 9
						}
					}
				}
			],
			"kind": "let",
			"range": [0, 9],
			"loc": {
				"start": {
					"line": 1,
					"column": 0
				},
				"end": {
					"line": 1,
					"column": 9
				}
			}
		}
	],
	"sourceType": "script",
	"range": [0, 9],
	"loc": {
		"start": {
			"line": 1,
			"column": 0
		},
		"end": {
			"line": 1,
			"column": 9
		}
	},
	"comments": []
}
```

---
title: Javascript | 艰难的同步io
date: 2021-02-24 19:50:28
tags: [同步,Javascript,IO]
categories: 技术
cover: https://s3.ax1x.com/2021/02/25/yvYv80.png
---

## 前言

对于node.js,同步io就是个头痛的存在😲😲😲😲😲😲😲😲😲<!--more-->

因为要刷oj，所以没法用npm的包

百度到个好办法。


最终（压缩）代码（\*\*氧化钙这个代码块瞎我眼啊www
```javascript
"use strict";var main=async function(){await console.log('吃了吗');process.stdin.resume();await process.stdin.on('data',async function(data){await console.log(`${data.toString('utf-8').trim()}就好。`);await process.stdin.pause()})};main();
```

温馨提示：在压缩的时候分号记得写好！！！（亲测报错

## 正题！

用`async`和`await`达到理想效果。。

such as:

### 小实验

```javascript
"use strict";
var main=async function() {
	await console.log("HUX最美！URYYYYYYYYY！！！\n你认为呢？");
	process.stdin.resume();
	await process.stdin.on("data",async function(data){
		data=data.toString('utf-8').trim()
		if (data=='没错') await console.log("我HUX美如画！！！");
		else await console.log("懒得理你");
		await process.stdin.pause();
	})
}
main();
```

结果：（有点脑残www)


D:\N3J2\Main>node index.js 

HUX最美！URYYYYYYYYY！！！

你认为呢？

**没错** 

我HUX美如画！！！

D:\N3J2\Main>node index.js

HUX最美！URYYYYYYYYY！！！

你认为呢？

**不对**

懒得理你

(加粗的是输入）

### 同理获得今天の源码

```js
main=async function(){
	await console.log('吃了吗');
	process.stdin.resume();
	await process.stdin.on('data',async function(data){
		await console.log(`${data.toString('utf-8').trim()}就好。`);
		await process.stdin.pause();
	});
};
main();
```

[![yvYv80.png](https://s3.ax1x.com/2021/02/25/yvYv80.png)](https://imgtu.com/i/yvYv80)
以上。。

（没有在nodejs里不写main函数的习惯吧www)

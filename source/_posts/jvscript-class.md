---
title: Javascript 之 类
date: 2021-02-27 09:23:00
categories: 
  - [技术]
  - [教程]
tags: [Javascript,OOP]
cover: https://s3.ax1x.com/2021/02/27/6S0j58.png
---

## 前言

我要面向对象！！

我要面向对象！！

<!--more-->

## 正文

要去学校了，废话不多说，今天来讲讲Javascript的“类”与“面向对象”

### 方法1

首先我们要知道，JS是没有类的！！

但由于函数式语言的“函数是第一等公民”理论，可以创建一个“类类”（类似类的函数）

所以不难得出

```javascript

function Student(name) {
  //构造函数法  
  //MEMBER_DATA
  this.name=name;
  //MEMBER_FUNCTION
  this.getName=function(){return this.name;}
  this.setName=function(name){this.name=name;}
}
```

保存+运行

![](https://s3.ax1x.com/2021/02/27/6S0j58.png "哈哈！")

问题不大啦~（这张图也表明new才能创建对象）

***

但！是！

这个**Student** 包括了他的两个成员函数。假设一个成员函数占1byte，1024个就是1kb.这怎么能忍？

于是，我们请出了我们的**Prototype kun**

### Prototype之术

众所周知，c++的成员函数就是这样：（这样只分配一个成员函数的内存）

```cpp

a.foo(); // = foo(&a)
```

而Javascript也可以用类似的方法实现，就是prototype。这也就是实现成员函数的“标准方式”
```javascript

function Student(name) {
  //构造函数法  
  //MEMBER_DATA
  this.name=name;
  //MEMBER_FUNCTION
  Student.prototype.getName=function(){return this.name;}
  Student.prototype.setName=function(name){this.name=name;}
}

```

结果（不截图，懒）

```
Welcome to Node.js v14.16.0.
Type ".help" for more information.
> function Student(name) {
...   //构造函数法
...   //MEMBER_DATA
...   this.name=name;
...   //MEMBER_FUNCTION
...   Student.prototype.getName=function(){return this.name;}
...   Student.prototype.setName=function(name){this.name=name;}
... }
undefined
> var a=new Student("Hux")
undefined
> aa
Uncaught ReferenceError: aa is not defined
> a
Student { name: 'Hux' }
> a.getName
[Function (anonymous)]
> a.getName()
'Hux'
> a.setName("Zhongchuxi")
undefined
> a.getName
[Function (anonymous)]
> a.getName()
'Zhongchuxi'
```

***

距离开学还有2 5/12小时。

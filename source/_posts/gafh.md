---
title: Jekyll般的Hexo体验！
categories: 技术
tags: [Hexo,Github Actions,Github,CI]
date: 2021-02-26 18:15:20
---

## 前言

了解我的小伙伴都知道，我是一个十分~~懒~~机智的人。因为Hexo需要一个node环境才能写作，让我几度放弃hexo，投入什么cnblogs，csdn的怀抱。有时实在想自己建站，就会选择这个和github自动集成的**JEKYLL**

soudesu,我就是喜欢Jekyll的体验！

<!--more-->

### 用Jekyll,我的体验是这样的：

1. 随便找台机子
1. 在github上创建posts然后写作
1. commit
1. 等待1分钟
1. 查看效果

### 用hexo，我的体验是这样的:

1. 找一台装了node.js的机子
2. 在终端clone我的hexo仓库
3. 写文章
4. hexo clean&&hexo g&&hexo d
5. 查看效果

虽然都是5步，差别可大了。你们凭良心说，你喜欢哪一个？？？


然而我选择hexo的原因，有三点

- 相比Jekyll，快
- 相比Hugo，社区成熟
- 我熟悉Javascript，可以改造(~~然鹅并没有~~）

然而，人活着就会思考

难道就没办法让hexo也可以在GitHub上自动部署了嘛？？

***非也，非也！！！！***

## 正文

我们先回顾下刚刚的步骤

1. 找一台装了 node.js 的机子
2. 在终端 clone 我的 hexo 仓库
3. 写文章
4. hexo clean&&hexo g&&hexo d
5. 查看效果

只要让我的 ~~gay~~github 帮我实现，就能获得 Jekyll 般的体验。

### throw question

我们在本地，使用 ssh 链接到 github 并 push ， github 上模拟的机子怎么办呢？？

### catch (question)

先二话不说，生成一个ssh密钥。

将公钥 copy 到你的`username.github.io`，选择Setting -> Deploy Key,勾选上那个 write access

将私钥 copy 到你的备份源码的仓库，选择 Setting -> Secrets ,新建一个 Secret

最好把公钥设置成 HEXO_DEPLOY_PUBLIC_KEY ,私钥设置成 HEXO_DEPLOY_PRIVATE_KEY

这样你可以~~白嫖~~直接使用我的代码。

```
name: Deploy Blog

on: [push] # 当有新push时运行

env:
  TZ: Asia/Shanghai

jobs:
  build: # 一项叫做build的任务

    runs-on: ubuntu-latest # 在最新版的Ubuntu系统下运行
    
    steps:
    - name: Checkout # 将仓库内master分支的内容下载到工作目录
      uses: actions/checkout@v1 # 脚本来自 https://github.com/actions/checkout
      
    - name: Use Node.js 10.x # 配置Node环境
      uses: actions/setup-node@v1 # 配置脚本来自 https://github.com/actions/setup-node
      with:
        node-version: "10.x"
    
    - name: Setup Hexo env
      env:
        ACTION_DEPLOY_KEY: ${{ secrets.HEXO_DEPLOY_PRIVATE_KEY }} # 这里是上面新增的私钥，请自己配置，当然你bp了就不要配置了
      run: |
        # set up private key for deploy
        mkdir -p ~/.ssh/
        echo "$ACTION_DEPLOY_KEY" | tr -d '\r' > ~/.ssh/id_rsa # 配置秘钥
        chmod 600 ~/.ssh/id_rsa
        ssh-keyscan github.com >> ~/.ssh/known_hosts
        # set git infomation
        git config --global user.name 'AiMo-Hux' # 换成你自己的邮箱和名字
        git config --global user.email 'aimo-hux@aliyun.com'
        # install dependencies
        npm i -g hexo-cli # 安装hexo
        npm i
        
  
    - name: Deploy
      run: |
        # publish
        hexo clean&&hexo generate && hexo deploy # 执行部署程序
 ```

测试：

[![yzIY4J.png](https://s3.ax1x.com/2021/02/26/yzIY4J.png)](https://imgtu.com/i/yzIY4J)

哈，完美。

以上。

## 下一篇预告：

我的寒假总结

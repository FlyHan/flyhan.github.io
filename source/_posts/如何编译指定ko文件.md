---
title: 如何编译指定ko文件
tags:
  - 已发布
id: 242
categories:
  - 累 | 技术
date: 2016-11-30 17:58:42
---

以dwc_otg.ko为例

## 一、首先编译ko要配置内核模块选项为**M**，编译即可

## 二、查找内核模块

1.  搜索模块对应的Makefile，找到编译控制宏obj-$(**CONFIG_HIUSB_DEVICE**)   += dwc_otg.o，搜索方法见下图

<!-- more -->

    ![](http://www.flyhan.com/wp-content/uploads/2016/12/f7d55f55fa258407492d7fb79ec13ef8_03b0801663ce43a8ee00ea84cd9dfcfd-1.png)
2.  搜索宏控制位置（**一般的话宏控制就在对应目录下面的Kconfig，dwc_otg比较特殊**）
    ![](http://www.flyhan.com/wp-content/uploads/2016/12/f7d55f55fa258407492d7fb79ec13ef8_07a90977499e9446a9d8d385c94652cb-1.png)
3.  打开Kconfig找到宏控制
    ![](http://www.flyhan.com/wp-content/uploads/2016/12/f7d55f55fa258407492d7fb79ec13ef8_22eca06dfce18ab17ef430b0733099d3-1.png)
4.  menuconfig找到宏并设置为M，编译生成（驱动路径是参考信息）
    ![](http://www.flyhan.com/wp-content/uploads/2016/12/f7d55f55fa258407492d7fb79ec13ef8_menuconfig-1.png)

**<font color="red">附：快速编译指令：make M=drivers/usb/gagdet modules</font>**

<div>[null](http://www.wiz.cn/i/553ac428 "null")</div>
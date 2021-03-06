---
title: 笔记本升级——内存篇
tags:
  - 内存条
  - 双通道
id: 156
categories:
  - 瘾 | 科技
date: 2014-11-02 23:30:51
---

最近玩游戏比较卡，64位技术也比较稳定，再加上突然心血来潮（这是关键），打算升级电脑，就买了个固态硬盘跟内存条升级了一下，总结一下经验。

<!-- more -->

#### 硬件参数

```
平台：华硕k42jz（2010.12）
CPU：酷睿i3 380 2.53GHz
芯片组：HM55
内存：DDR3 1333 2G
```
![cpu](http://oblc3hrjc.bkt.clouddn.com/wp-content/uploads/2014/11/cpu.png)

图片来源：[Intel® Core™ i3-380M Processor](http://ark.intel.com/zh-cn/products/50178/Intel-Core-i3-380M-Processor-3M-Cache-2_53-GHz)

#### 判断电脑能支持的最大容量和频率

内存条目前的发展有三代，三代的金手指不一样，支持的频率不一样，不过每代内存条高频率兼容低频率。

```
一代内存  DDR     频率266   333  400MHZ
二代内存 DDR2   频率533 667 800MHZ
三代内存 DDR3   频率1066  1333  1600  1866
三代内存 DDR3L(1.35V) LPDDR3(1.2V) 三代内从低电压版，兼容DDR3（反向不兼容）
```

#### 容量和频率

内存条扩展主要涉及两个参数：容量和频率。**电脑能支持的范围主要跟CPU和芯片组有关**

1\. 频率

如果当前内存条频率低于CPU支持频率，以内存条频率运行，如果高于CPU支持频率，自动降频到CPU支持最高频率。i3 380 CPU支持三代内存DDR3，最高频率1066，如果装了频率是1600的内存条会自动降频到1066。

2\. 容量

最大容量受两个因素影响：CPU和芯片组。拿我的来说，CPU最高支持内存8G，芯片组HM55输入intel 5系列芯片组，单个插槽支持最大内存4G，总共两个插槽刚好8G。

![intel](http://oblc3hrjc.bkt.clouddn.com/wp-content/uploads/2014/11/intel.png)

升级考虑的是：1、现在的电脑性能提升最大支持度；2、现在电脑淘汰（虽然很有感情，没办法，大势所趋）之后，买的硬盘或者内存条还能不能用在新的电脑上（有点贪心），考虑到以上两点买了根4G DDR3内存条（快递到了之后发现是DDR3L）

#### Intel弹性双通道内存技术（Intel Flex Memory Technology）

除了上述两个因素还要考虑一个是双通道：

1\. 对称双通道，两个通道内存大小、频率一样，形成对称双通道。

2\. 非对称双通道，比如说一个通道2G内存，另一个通道为4G，则4G内存中有2G与另一个通道组成双通道，剩下2G为单通道模式。core i系列支持弹性双通道。

#### 升级之后的效果

![升级后效果图](http://oblc3hrjc.bkt.clouddn.com/wp-content/uploads/2014/11/%E5%8D%87%E7%BA%A7%E5%90%8E%E6%95%88%E6%9E%9C%E5%9B%BE.png)
![性能](http://oblc3hrjc.bkt.clouddn.com/wp-content/uploads/2014/11/%E6%80%A7%E8%83%BD.png)

#### 内存条部分图片

![DDR3L 4G](http://oblc3hrjc.bkt.clouddn.com/wp-content/uploads/2014/11/DDR3L-4G-e1414941467225.jpg)

#### 参考

[Intel与AMD主流平台内存支持全面解读](http://www.pcpop.com/doc/0/681/681486_all.shtml)
[如何通过intel 芯片组型号了解主板性能？](http://www.beihaiting.com/a/ZSK/JZS/2013/0303/1605.html)
---
title: 【笔试】实现函数使程序输出不正常
tags:
  - 堆栈
  - 笔试
  - 软件
id: 93
categories:
  - 累 | 技术
date: 2014-08-28 01:08:30
---

#### 题目

<!-- more -->

```c
void fun(void)
{
    //todo：答题部分。。。
}

int main()
{
    int x = 1;
    int y = 2;

    fun();
    printf(&quot;x, y%d %d&quot;, x, y);
}
```

**问：如何实现函数fun，使得最后的打印结果不是1 2**

#### 分析

题目一眼看上去是内存的问题，因为内存改变了打印结果不正常，又涉及到函数调用，堆栈空间的修改，函数调用栈空间是连续的（如图所示），因此可以直接实现。

```c
void fun(void)
{
	int a = 0;
	int *p = &amp;a;

	/*
	 * 搜索到y的位置并修改
	 */
	while (*p != 2) {
		p++;
	}
	*p = 10;
}
```

#### 函数A调用函数B的栈中帧结构

![img](http://oblc3hrjc.bkt.clouddn.com/wp-content/uploads/2014/08/%E5%87%BD%E6%95%B0A%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0B%E7%9A%84%E6%A0%88%E4%B8%AD%E5%B8%A7%E7%BB%93%E6%9E%84.png)

#### 发散思维

##### 方法一：程序终止

```c
void fun(void)
{
	int x = 10, y = 20;
	printf(&quot;x,y%d %d\n&quot;, x, y);

	/*
	 * 程序退出
	 */
	exit(0);
}
```

##### 方法二：函数屏蔽

```c
void fun(void)
{
/*
* 屏蔽printf函数
*/
#define printf
}
```

**说明：#define是预编译指令，在哪个位置都一样**

* * *

#### 参考：

[一道笔试题。求答案](http://www.educity.cn/wenda/525700.html "一道笔试题")
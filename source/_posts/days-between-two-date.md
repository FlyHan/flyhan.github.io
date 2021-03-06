---
title: 【笔试】日期间隔多少日
tags:
  - C
  - 库函数
  - 笔试
id: 132
categories:
  - 累 | 技术
date: 2014-09-23 21:46:18
---

之前处理这种题目的时候都是采用数学计算的方法，最近看了一下日期和时间函数库，就打算用库函数实现一下

#### 题目

题目描述

`从键盘输入两个日期，输出两个日期之间的时间间隔，时间间隔用天数表示。`

<!-- more -->

输入

`输入包括两个个日期，起始日期和终止日期`

输出

`间隔天数，格式参看输入输出。`

样例输入

```
1991-11-01 1991-11-02
1990-09-09 2011-11-11
```

样例输出

```
1
7733
```

#### 分析

一、数学计算方法关键在于思路：选择一个参考点，参考当年的1月1日，计算到给定日期已过的天数。

**天数的计算跟闰年的判断注意一下。**

`总天数 = 年份天数 - 起始年份已过的天数 + 终止年份已过的天数`

二、库函数比较简单，调用函数直接计算两个时间间隔，关键在于数据的处理跟库函数的理解

**需要注意：**

1\. mktime()函数：将时间转换为自1970年1月1日以来持续时间的秒数，发生错误时返回-1；

2\. struct tm结构体：成员tm_year保存的是从1900年起的年数。

参考测试数据

`1910-10-01 1910-10-02`

#### 部分关键代码

1\. 数学计算方法
```c
int isleapyear(int year)
{
    if ((year%400 == 0) || (year%4==0 &amp;&amp; year%100!=0))
        return 1;
    else 
        return 0;
}
/*
 * 计算从1月1日到今天的天数
 */
int countday(int year, int mon, int day)
{
    int mday[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    int i, result = 0;
    /* 计算月数 */
    for (i=1;i&lt;mon;i++) {
        result += mday[i];
    }
    /* 计算天数 */
    result += day;
    /* 考虑闰年 */
    if (mon &gt; 2 &amp;&amp; isleapyear(year))
        result += 1;
    return result;
}
/*
 * 计算方法，算总共的天数减去起始年已过的天数，加上结束年已过的天数
 */
long diffday(char const *str_start, char const *str_end)
{
    int year_start, mon_start, day_start;
    int year_end, mon_end, day_end;
    int i, start, end;
    long result = 0;
    sscanf(str_start, &quot;%d-%d-%d&quot;,&amp;year_start, &amp;mon_start, &amp;day_start);
    sscanf(str_end, &quot;%d-%d-%d&quot;,&amp;year_end, &amp;mon_end, &amp;day_end);
    for(i=year_start;i&lt;year_end;i=i++) {
        if(isleapyear(i)) 
            result += 366;
        else
            result += 365;
    }
    /* 减去起始年天数，加上结束年天数 */
    start = countday(year_start, mon_start, day_start);
    end = countday(year_end, mon_end, day_end);
    result = result - start + end;
    return result;
}
```

2\. 库函数方法
```c
void strtotime(char const *str, struct tm *tmstr)
{
    int year, mon, day;
    sscanf(str, &quot;%d-%d-%d&quot;, &amp;year, &amp;mon, &amp;day);
    tmstr-&gt;tm_year = year - 1900;         /* tm_year范围1900之后的年数 */
    tmstr-&gt;tm_mon = mon;
    tmstr-&gt;tm_mday = day;
}
long diffday(char const *str_start, char const *str_end)
{
    struct tm tm_start, tm_end;
    long result;
    memset( &amp;tm_start, 0, sizeof(tm_start) );
    memset( &amp;tm_end, 0, sizeof(tm_end) );
    strtotime(str_start, &amp;tm_start);
    strtotime(str_end, &amp;tm_end);
    result = (long)difftime( mktime(&amp;tm_start), mktime(&amp;tm_end) );
    return abs(result/24/3600);
}
```
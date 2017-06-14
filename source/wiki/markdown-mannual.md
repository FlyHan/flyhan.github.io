---
title: "Markdown语法手册"
layout: "wiki"
date: 2017-05-02 18:46
---

# Markdown语法手册

## 1.粗体斜体
    粗体：**粗体**
    斜体：*斜体*
    
粗体：**粗体**  
斜体：*斜体*

## 2.分级标题

    #一级标题
    ##二级标题
    ###三级标题
    
## 3.外链接

    [链接到我的博客](http://www.flyhan.com)
[链接到我的博客](http://www.flyhan.com)

## 4.无序列表
使用`*`, `+`, `-` 表示无序列表

    * 无序列表1  
    * 无序列表2
    + 1  
    + 2
* 无序列表1
* 无序列表2
+ 1
+ 2

## 5.有序列表
使用数字和点表示有序列表  

    1. 有序列表1
    2. 有序列表2  
    3. 有序列表3  
1. 有序列表1
2. 有序列表2
3. 有序列表3

## 6.文字引用
使用`>`表示文字引用

    > "野火烧不尽，春风吹又生。"
> "野火烧不尽，春风吹又生。"

## 7.行内代码块
使用\`表示行内代码块

    我是行内代码，我的前后都加了特殊符号
    
## 8.代码块
使用四个缩进空格表示代码块  

    这是一个代码块，此行左侧有四个不可见的空格。
    
## 9.插入图像
注意：链接中如果带有特殊符号，比如&需要用转义字符`\&`。  

    ![腾讯logo](http://img1.hao123.com/urlicon/6.340.png)
![腾讯logo](http://img1.hao123.com/urlicon/6.340.png)

## 10.换行
如果另起一行，只需在当前行结尾加2个空格

## 11.文字添加横删除线

    ~~我头上有删除线~~
~~我头上有删除线~~

# Markdown进阶语法

## 1.生成目录
在你想要生成目录的地方是用`[toc]`标签，就会自动在此处生成目录，但有些markdown编辑器不支持，如markdownPad2，你可以去网上下载js插件实现此功能也可以考虑使用stackedit。

## 2.内联HTML标记

    <font color='red' style='font-size:20px'>红色文字</font>  
    <center>我在中间</center>
    
<font color='red' style='font-size:20px'>红色文字</font>  
<center>我在中间</center>

- - -

    <table>
    <thead>
        <tr>
            <th>第一列</th>
            <th>第二列</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>第一行</td>
            <td>文本1</td>
        </tr>
        <tr>
            <td>第二行</td>
            <td>文本2</td>
        </tr>
    </tbody>
    </table>

<table>  
<thead>  
    <tr>  
        <th>第一列</th>  
        <th>第二列</th>  
    </tr>  
</thead>  
<tbody>  
    <tr>  
        <td>第一行</td>  
        <td>文本1</td>  
    </tr>  
    <tr>  
        <td>第二行</td>  
        <td>文本2</td>  
    </tr>  
</tbody>  
</table>  

## 3.符号转义
Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号  

    \   反斜线  
    `   反引号  
    *   星号  
    _   底线  
    {}  花括号  
    []  方括号  
    ()  括弧  
    #   井字号  
    +   加号  
    -   减号  
    .   英文句点  
    !   惊叹号  
    
## 4.表格  

    | Item      |    Value | Qty  |
    | :-------- | --------:| :--: |
    | Computer  | 1600 USD |  5   |
    | Phone     |   12 USD |  12  |
    | Pipe      |    1 USD | 234  |

| Item      |    Value | Qty  |
| :-------- | --------:| :--: |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |

说明：

1. 首列和最后一列竖线`|`可以省略
2. 第二行冒号`:`表示对其，左边为左对齐，右边右对齐，两个中间对齐

## 5.流程图

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end
 
st->op->cond
cond(yes)->e
cond(no)->op
```
代码：

    ```flow
    st=>start: Start
    op=>operation: Your Operation
    cond=>condition: Yes or No?
    e=>end
    st->op->cond
    cond(yes)->e
    cond(no)->op
    ```
流程图的语法大体分为两部分：
+ 前面部分用来定义流程图元素；
+ 后面部分用来连接流程图元素，指定流程图的执行走向。

说明1：
+ tag 是流程图中的标签，在第二段连接元素时会用到。名称可以任意，一般为流程的英文缩写和数字的组合。
+ type 用来确定标签的类型，=>后面表示类型。由于标签的名称可以任意指定，所以要依赖type来确定标签的类型
+ 标签有6种类型：start end operation subroutine condition inputoutput
+ content 是流程图文本框中的描述内容，: 后面表示内容，中英文均可。特别注意，冒号与文本之间一定要有个空格
+ url是一个连接，与框框中的文本相绑定，:>后面就是对应的 url 链接，点击文本时可以通过链接跳转到 url 指定页面

**说明2：**
+ 使用 `->` 来连接两个元素
+ 对于condition类型，有yes和no两个分支，如示例中的cond(yes)和cond(no)
+ 每个元素可以制定分支走向，默认向下，也可以用right指向右边，如示例中sub1(right)。

## 6.序列图

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```
代码：

	```seq
	Alice->Bob: Hello Bob, how are you?
	Note right of Bob: Bob thinks
	Bob-->Alice: I am good thanks!
	```
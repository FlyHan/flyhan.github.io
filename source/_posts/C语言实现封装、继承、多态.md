---
title: C语言实现封装、继承、多态
id: 147
categories:
  - 累 | 技术
date: 2014-10-01 00:24:22
tags:
---

做一些大的系统级程序的话不得不说面向对象方法的魅力无穷。一直以为C语言是面向过程的，接触嵌入式系统之后发现C语言也可以实现面向对象。（主要还是自己的思维方式，不要一头钻进代码，培养自己自上而下，从设计开始的思维才是核心）<p>

<!-- more -->

#### 一、封装

<p>所谓封装，通俗地说，就是一个姑娘化了妆，只给你看她想让你看的那一面，至于里面是否刮了骨、垫了东 西，不给你看。说到封装就得说隐藏，这是对兄弟概念；其实我理解隐藏是更深的封装，完全不给你看见，而封装可能是犹抱琵琶半遮面。封装在 C++ 语言中有protected, private关键字在语言层面上支持。

而在C语言中，**可以用结构+ 函数指针实现封装和隐藏，来模拟类的实现**，而用这种结构定义的变量就是对象。封装的主要含义是隐藏内部的行为和信息，使用者只用看到对外提供的接口和公开的信息。有两种方法实现封装：

##### 1\. 利用C语言语法。在头文件中声明，在C文件中真正定义它。

这样可以隐藏内部信息，因为外部不知道对象所占内存的大小，所以不能静态的创建该类的对象，只能调用类提供的创建函数才能创建。这种方法的缺陷是不支持继承，因为子类中得不到任何关于父类的信息。
[code lang="cpp"]
//头文件：point.h
#ifndef POINT_H
#define POINT_H 
struct Point; 
typedef struct Point point; 
point * new_point(); //newer a point object 
void free_point(point *point_);// free the allocated space 
#endif 
//C文件:point.c 
#include”point.h” 
strcut Point {
    int x; 
    int y; 
}; 
point * new_point() 
{ 
    point * new_point_ = (point *) malloc(sizeof(point)); 
    return new_point_; 
}
void free_point(point *point_) 
{ 
    if(point_ == NULL) 
        return; 
    free(point_);
}
[/code]

##### 2\. 把私有数据信息放在一个不透明的priv变量或者结构体中。只有类的实现代码才知道priv或者结构体的真正定义。

在 QT 中，为了更好的隐藏一个类的具体实现，一般是一个公开头文件、一个私有头文件，私有头文件中定义实现的内部细节，公开头文件中定义开放给客户程序员的接口和公共数据。看看QObject(qobject.h)，对应有一个QObjectPrivate(qobject_ p.h)，其他的也类似。而代码框架如下：

[code lang="cpp"]
QObject{
public: 
    xxx
    xxx
private:
    QObjectPrivate * priv;
};
[/code]

我们在 C 语言中完全可以用同样的方法来实现封装和隐藏，只不过是放在结构体中而已。代码框架如下：

[code lang="cpp"]
struct st_abc_private;   
struct st_abc {   
    int a;   
    xxx;   
    void (*xyz_func)(struct st_abc*);   
    struct st_abc_private * priv;   
};
[/code]

上面的代码，我们只前向声明结构体struct st_abc_ private ，没人知道它里面具体是什么东西。假如struct st_abc对应的头文件是abc.h，那么把st_abc_ private的声明放在 abc_p.h 中，abc.c 文件包含 abc_p.h ，那么 在实现struct st_abc的函数指针xyz_func时如何使用struct st_abc_private，客户程序员根本无须知道。

这样做的好处是显而易见的，除了预定义好的接口，客户程序员完全不需要知道实现细节，即便实现经过重构完全重来，客户程序员也不需要关注，甚至相应的模块连重新编译都不要—— 因为 abc.h 自始至终都没变过。

上面代码有个问题，客户程序员如何得到struct st_abc的一个实例，他不知道struct st_abc_private如何实现的。C中没有构造函数，只好我们自己提供了：我们可以在abc.h中声明一个类似构造函数的函数来生成struct st_abc的实例，名字就叫作new_abc()，函数原型如下：

[code lang="cpp"]
struct st_abc * new_abc();
[/code]

至于实现，我们放在abc.c中，客户程序员不需要知道。相应的，还有个类似析构函数的函数，原型如下：

[code lang="cpp"]
void delete_abc(struct st_abc *);
[/code]

到现在为止，封装和隐藏就实现了，而且很彻底。

#### 二、继承

在C语言中，可以利用**结构在内存中的布局与结构的声明具有一致的顺序**这一事实实现继承。

具体来讲就是利用结构体的包含关系实现继承。

[code lang="cpp"]
struct st_base{
    int a;
    void (*func1)(struct st_base *_this);        //------------②
};
struct st_derived{
    const struct st_base base;                  //---------------------①
    int b;
    void (*func2)(struct st_derived *_this);    //---------------②
};
[/code]

代码就是这么简单，不过需要特别指出：

##### ①--派生类（结构体）中一定要把父类类型的成员放在第一个。

继承在语法层面上看，有数据成员、函数，数据成员通过上面的方法自动就“继承” 了，至于函数，在结构体表示为函数指针，其实也是一个数据成员，是个指针而已，也会自动“继承” 。

##### ②--_this指针的模拟

必须将结构体内的函数指针的第一个参数定义为自身的指针，在调用时传入函数指针所属的结构体实例。

C++: this 指针是一个隐含于每一个类的成员函数中的特殊指针 （包括析构函数和构造函数），它用于指向正在被成员函数操作的对象。一个对象的this指针并不是对象本身的一部分，不会影响sizeof(对象)的结果。

关于this指针的一个经典回答：当你进入一个房子后，你可以看见桌子、椅子、地板等但是房子你是看不到全貌了。

#### 三、多态

C语言中使用万能指针void*实现多态，**注意使用强制类型转换**

[code lang="cpp"]
#ifndef LINKLIST_H 
#define LINKLIST_H 
typedef struct Node* linkList; 
struct Node{                                // 链表节点
    void *data;                             // 存储的数据指针
    linkList next;                          // 指向下一个链表节点
    void (*insertFirst)(linkList, void *);  // 在已有链表的表头进行插入节点操作的函数指针
    void (*linkListOutput)(linkList);       // 输出链表中数据到控制台操作的函数指针
}; 
linkList initialLinklist();                 // 初始化链表
void insertFirst(linkList h, void *data);   // 在已有链表的表头进行插入节点操作
void linkListOutput(linkList h);            // 未指定输出类型时的默认输出函数
void stringLinkListOutput(linkList h);      // 输出字符串类型链表中数据到控制台
void intLinkListOutput(linkList h);         // 输出整型链表中数据到控制台
void doubleLinkListOutput(linkList h);      // 输出浮点型链表中数据到控制台
void charLinkListOutput(linkList h);        // 输出字符型链表中数据到控制台
#endif
//初始化链表，代码如下：
linkList initialLinklist() 
{ 
    linkList link = (linkList*)malloc(sizeof(*link)); 
    link-&gt;data = NULL; 
    link-&gt;next = NULL; 
    link-&gt;insertFirst = insertFirst; 
    link-&gt;linkListOutput = linkListOutput; 
    return link; 
}
//在已有链表的表头进行插入节点操作
void insertFirst(linkList h, void *data) 
{ 
    linkList link = initialLinklist(); 
    link-&gt;data = data; 
    link-&gt;next = h-&gt;next; 
    h-&gt;next = link; 
}    
//输出链表中数据到控制台
void linkListOutput(linkList h)     
{ 
    printf(&quot;You should point which output function is wanted!\n&quot;); 
} 
void stringLinkListOutput(linkList h)    
{ 
    linkList p = h-&gt;next; 
    while(p){ 
        printf(&quot;%s\t&quot;, (char*)(p-&gt;data)); 
        p = p-&gt;next; 
    } 
    printf(&quot;\n&quot;); 
} 
void intLinkListOutput(linkList h) 
{ 
    linkList p = h-&gt;next; 
    while(p){ 
        printf(&quot;%d\t&quot;, *(int*)(p-&gt;data)); 
        p = p-&gt;next; 
    } 
    printf(&quot;\n&quot;); 
} 
void doubleLinkListOutput(linkList h) 
{ 
    linkList p = h-&gt;next; 
    while(p){ 
        printf(&quot;%f\t&quot;, *(double*)(p-&gt;data)); 
        p = p-&gt;next; 
    } 
    printf(&quot;\n&quot;); 
} 
void charLinkListOutput(linkList h) 
{ 
    linkList p = h-&gt;next; 
    while(p){ 
        printf(&quot;%c\t&quot;, *(char*)(p-&gt;data)); 
        p = p-&gt;next; 
    } 
    printf(&quot;\n&quot;);  
}
[/code]

#### 总结

面向对象是一种程序设计思想，而 C 语言则是一种编程语言。思想比语言重要。

#### 参考

[技巧：用 C 语言实现程序的多态性](http://www.ibm.com/developerworks/cn/linux/l-cn-cpolym/index.html?ca=drs-)
[C语言实现封装、继承和多态](http://dongxicheng.org/cpp/ooc/)
[C语言面向对象编程](http://blog.csdn.net/column/details/object-orient-c.html)
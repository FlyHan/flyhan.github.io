---
title: 【经验】如何搭建个人博客
tags:
  - 博客
  - 域名
  - 空间
id: 17
categories:
  - 玩 | 博客
date: 2014-05-18 13:14:33
---

[![blog](http://www.flyhan.com/wp-content/uploads/2014/05/blog.jpg)](http://www.flyhan.com/wp-content/uploads/2014/05/blog.jpg)

<!-- more -->

#### 1\. 新建一个博客文件

在搭建博客的过程中，我们需要创建一个文件，用来存储博客的相关信息。这些信息包括域名的信息，主机空间服务器ip，FTP登录名和密码，空间面板登录信息等等，只要是与该博客有关的信息，全部存在这个文件内，方便以后查看。

#### 2\. 购买域名(Domain Name)

我是参考链接一的推荐，直接去的godaddy（去他爹），全球最大的域名注册商，且支持支付宝付款，对我们很方便。

[![GD Logo_boldhead](http://www.flyhan.com/wp-content/uploads/2014/05/GD-Logo_boldhead.jpg)](http://www.godaddy.com/)

域名后缀推荐买一级域名“.com”，虽然“.com”域名比其他的贵些，但是goDaddy会定期做优惠活动，Google上搜索“goDaddy优惠券”会出现很多相关链接，我的域名是在[Godaddy $8.99 .COM 域名注册优惠码](http://www.chinacmu.com/)里面8.99刀买了两年。如果选中了喜欢的域名，而暂时没有活动时，不妨加入购物车后等几天，相信你会收到打折邮件的。

[![8.99](http://www.flyhan.com/wp-content/uploads/2014/05/8.99.png)](http://www.chinacmu.com/)

另外购买特价域名时有时候用不了支付宝，我是重新登录的才有了，当然也可以准备一张双币信用卡。

参考：[GoDaddy不支持支付宝的解决办法](http://www.dute.me/godaddy-alipay.html)

有需要的可以参考：[如何在GoDaddy注册域名](http://godaddy.idcspy.com/domain-regist)

#### 3\. 注册一个主机空间(Web Host)

主机空间是存放博客程序的地方，以地理位置划分为内地空间、香港空间和国外空间，内地空间的优点是访问速度快，缺点是需要备案；香港空间访问速度介于内地和国外之间；国外空间访问速度较慢，无需备案。空间的选择看个人情况了，空间大小的话新手几百M足够用了，等以后写的内容多了不够用了再考虑更换。 同样参考链接一推荐，直接买了[衡天小张](http://www.hengtian.cc/)家的主机

#### 4\. 域名解析(DNSPod)

在goDaddy购买了域名后，goDaddy会帮我们解析这个域名，但是goDaddy解析的域名有时会遭到屏蔽，而且解析的速度也不快，因此一般使用DNSPod来进行解析。使用DNSPod有以下三步：

**a. 在DNSPod添加记录，注册后添加域名。**

**b. 修改域名DNS地址为DNSPod的**

登录goDaddy网站，点击“My Account” ，点击“Domain”右侧的“Launch”，进入域名管理页面

[![godaddy1](http://www.flyhan.com/wp-content/uploads/2014/05/godaddy1.png)](http://www.flyhan.com/wp-content/uploads/2014/05/godaddy1.png)

在“NameServers”一栏点击“Manage”

[![godaddy2](http://www.flyhan.com/wp-content/uploads/2014/05/godaddy2.png)](http://www.flyhan.com/wp-content/uploads/2014/05/godaddy3.png)

在弹出的对话框中前两个Name Server处分别填写DNSPod的域名服务“F1G1NS1.DNSPOD.NET”、“F1G1NS2.DNSPOD.NET”。

[![godaddy3](http://www.flyhan.com/wp-content/uploads/2014/05/godaddy3.png)](http://www.flyhan.com/wp-content/uploads/2014/05/godaddy3.png)

**c. 将域名指向主机服务器的ip，即在DNSPod中添加“A记录”，注意要添加带“www”的和不带“www”两个记录，添加完后见下图：**

[![dnspod解析](http://www.flyhan.com/wp-content/uploads/2014/05/dnspod解析.jpg)](http://www.flyhan.com/wp-content/uploads/2014/05/dnspod解析.jpg)

域名解析完后就可以访问了，此时我们在地址栏输入域名后可以看到主机空间上的信息，接下来的事情就是安装WordPress了。

注：**域名解析完成后要等一段时间才能访问**，我当时郁闷了好长时间

#### 5\. 安装WordPress

不同的主机空间有不同的虚拟主机控制系统，安装的过程也不尽相同，但是步骤都是差不多的，我购买的主机空间使用的是cPanel面板，下面就针对cPanel安装wordpress做个简略的介绍。

a. 登录cPanel面板，找到“数据库”-“MySQL数据库”，创建一个数据库，然后创建用户，将用户添加进数据库，勾选“所有权限”，点击“更改”完成。**注意将数据名密码等信息记录到博客文件**

b. 上传WordPress，从WordPress网站下载最新的WordPress中文版，回到cPanel首页，点击“文件”-“文件管理器”，选择“Web Root”后点击“Go”，选择“上传”，选择刚才下载的压缩包上传。上传完后回到根目录选择压缩包，点击“解压缩”，解压缩完成后在根目录多了一个wordpress的目录，进入这个目录，点击“全选”，然后点击“移动文件”，去掉目录中的wordpress，将文件移动到根目录下。

后来嫌麻烦我直接使用[flashfxp](http://xiazai.zol.com.cn/detail/14/133429.shtml)

c. 设置wordpress基本信息，在浏览器访问你的域名，跟着提示点按钮，直到出现输入数据库信息的页面，输入之前创建的数据库信息，至此wordpress就安装完成了。

#### 6\. 安装WordPress主题

wordpress安装完成后，需要给博客安装一个主题，也就是我们的页面模板，进入wordpress的管理页面，选择“外观”-“主题”，点击“安装主题”选择主题安装，也可以上传下载其他主题，最好的免费官方主题可以在这里看到：[Free Theme](http://wordpress.org/themes/)。

#### 7\. 设置固定链接

固定链接是指文章的url显示，默认是问号和数字，修改成自定义结构“/%postname%/”可以更好的让搜索引擎找到你的文章。

设置之前的效果：http://www.flyhan.com/?p=1

设置之后的效果：http://www.flyhan.com/archives/1
> 这个设置不论网站打开速度还是SEO都有好处> 
> 
> 详细参考：[WP Super Cache 安装与设置方法](http://bigc.at/wp-super-cache.orz)

#### 8\. 安装插件

为了更好的使用WordPress，一些好的插件是必不可少的，下面罗列出个人使用中的一些插件。

1\. Akismet Akismet插件可以帮助清除大量的垃圾留言和评论，保持博客的清洁，使用该插件需要用到API key，可以向主机提供商索要。

2\. WP Super Cache 优秀的缓存插件，可以将博客静态化，一方面能够提高SEO排名，另一方面可以提高博客的访问速度，缓解服务器压力。

3\. Google xml Sitemaps 很好的SEO插件，让搜索引擎更好的收录你的站点。

4\. Dynamic To Top 点击回到顶部，文章比较长时很实用，可以自定义显示效果。

5\. WordPress Related Posts 此插件在每篇文章下显示相关文章或随机文章，有利于博客的SEO。

6\. WP-PageNavi 很不错的分页插件，加速快速浏览博客的文章。

7\. WP-markdown 这个是使用markdown写博客需要的插件

#### 9\. 添加网站图标

网站图标是显示在URL最前面的小图标，可以进行自定义，获取图标最简单的办法是到网站[Favicon.cc](http://www.favicon.cc/)下载，或者亲自做一个，网站图标建议使用.ico文件格式。 下载图标后，上传至主机的根目录public_html下，然后进入WordPress后台管理页面，选择“外观”-“编辑”，打开“head.php”，添加下面的代码(确保图标名称为favicon.ico)：

`<linkrel=”shortcut icon” href=”favicon.ico”>`

保存后刷新页面就可以看到图标了。

[![网站图标](http://www.flyhan.com/wp-content/uploads/2014/05/网站图标.png)](http://www.flyhan.com/wp-content/uploads/2014/05/网站图标.png)

* * *

#### 参考链接：

[【经验】如何搭建个人独立博客](http://www.wutianqi.com/?p=3551)

[怎样搭建一个自有域名的 WordPress 博客？](http://www.zhihu.com/question/19594033)

[WordPress博客教程系列](https://www.x-berry.com/domain-name-choice/)

* * *
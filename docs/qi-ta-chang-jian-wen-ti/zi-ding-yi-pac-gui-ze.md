# 自定义PAC智能分流规则



### 前序知识概念：

- 走代理：表示指定该网站流量通过LibCyber转发加速
- 直连：表示直接访问该站点，等同于没使用LibCyber软件



### Windows下：

在LibCyber.exe同一层级目录中，新建名为user-rule.txt的文件，按照以下规则添加内容

```
# 下面一行代表希望amazon.com开头的网站走代理
||amazon.com^

# 下面一行代表希望baidu.com开头的网站走直连
@@baidu.com^


# 更多例子
# 让 scholar.google.com 一类网站走代理
# 让 xueshu.baidu.com 一类网站直连访问
||*.google.com^
@@*.baidu.com^

```

修改保存后，右键点击一下右下角LibCyber纸飞机 => 菜单中点击“更换规则” => 任选一个规则，触发一下规则更新。重启软件，此时软件会拼接远程下载的规则和您自定义的规则一起使用。



### macOS下：

点击菜单栏的纸飞机软件图标 => 代理设置 => 编辑用户PAC规则，按照以下规则添加内容

```
# 下面一行代表希望google.com开头的网站走代理
||google.com^

# 下面一行代表希望baidu.com开头的网站走直连
@@baidu.com^


# 更多例子
# 让 scholar.google.com 一类网站走代理
# 让 xueshu.baidu.com 一类网站直连访问
||*.google.com^
@@*.baidu.com^
```

修改保存后，点击一下菜单栏纸飞机 => 规则设置 => 选择更新GFWList PAC规则，触发一下规则更新，会拼接远程下载的规则和您自定义的规则一起使用。关闭软件，并重新启用一次。



### iOS下：

打开小火箭APP，点击底栏 “配置” => 点击“本地文件”列表中正在使用的配置文件 => 点击弹出菜单中的“编辑配置” => 添加规则

请理解下面常用案例语法后使用：

```
例子1：
类型：DOMIN-SUFFIX
选项：PROXY
域名：google.com
此时效果是：所有 google.com\scholar.google.com\www.google.com网站都走代理加速

例子2：
类型：DOMIN-KEYWORD
选项：PROXY
域名：google
此时效果是：所有网络数据中只要包含google关键字的上网流量都走代理转发，某些时候会出现负面效果，比如正在百度搜索"google入职"，也会通过LibCyber服务器转发代理，就会变成访问海外版本百度，速度变差。

例子3：
类型：USER-AGENT
选项：DIRECT
用户代理：*NeteaseMusic*
此时效果是：所有网络数据中，使用网易云音乐APP的上网流量走直连。TIPS：此处的用户代理中，填写的内容是根据小火箭内抓包观察每个APP数据包特征，从Header中User-Agent字段获取的。如果您不知所云，请先简单了解一下计算机网络相关知识。

```

修改保存后，在配置页面，点击刚刚修改的配置文件，点击一次使用配置，然后重新连接一下节点服务器。



### 安卓下暂不支持
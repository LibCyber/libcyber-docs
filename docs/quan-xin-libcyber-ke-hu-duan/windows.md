---
sidebar_label: "Windows"
sidebar_position: 3
---
# Windows

:::note
这个页面介绍如何使用Windows上的LibCyber Desktop客户端
:::

（如需**远程协助**完成所有配置，可以下载本页底部远程软件，然后[点此处](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6)找客服）

## 教程内容

:::caution
如果您正在使用Windows7或更低版本系统，配置好后仍无法上网或者显示`400 Bad Request`，请更换兼容性客户端使用，[点此打开](../quan-ping-tai-shi-yong-jiao-cheng-1/windows.md)
:::
### 下载，安装，启动
- [本站下载地址](https://panel.libcyber.xyz/clients/V1.4.2/win32/LibCyber-V1.4.2.zip)

- 大陆网盘地址下载:https://wwm.lanzouj.com/ik6f901urdtg 密码:2ibb

- 下载后打开，双击安装程序运行一键安装。⚠️如果出现 Smart Screen 蓝屏拦截，点击“高级信息”=>“仍要运行”。本软件安全无毒，可用任何国际知名杀毒软件检查。由于管制，暂未于大陆注册，故出现此提示。

![SmartScreen][smartscreen]

- 安装完毕后，在桌面可以看到 LibCyber Desktop 软件

- 第一次打开可能会有以下授权提示，看下图：

![允许通过防火墙上网][firewall-allow]

- 把两个勾勾都打上，点击允许访问，这样你在外面和家里才都可以正常使用。

- 稍等一段时间后，在右下角状态栏（或系统托盘有个地球🌏的图标，如下图：

![右下角任务栏app][app-in-dock]

### 登录

- 启动软件后，输入网站上注册时使用的邮箱账号和密码。

:::caution
如果密码正确仍然登陆失败，请尝试优化系统DNS设置（DNS修改方法，[点此查看](../qi-ta-chang-jian-wen-ti/xiu-gai-dns-windows.md)）
:::

![登录][login]

### 选择节点连接

- 从桌面右下角托盘中找到地球图标的LibCyber Desktop软件，右键展开菜单，点击打开主界面

- 点击服务器节点名字处(“当前模式xxx”下方)进入节点列表，选择节点，如下图：

![选择节点][select-node]

- **点击连接**🚀
- 当看到连接图标变成红色断开标志时，就是连接上了
- 打开浏览器，关闭同类功能的插件（如**谷歌助手，优酷解锁，华人回国**等可能产生功能冲突），测试一下，这时候应该就可以上外网了。

### 成功上网
:::caution
如果访问任何网站显示400 Bad Request，则是Windows系统网络组件过时，查看本页面底部疑难解答
:::
![成功上网][success]

### 购买/升级套餐、续费后必须操作

购买商品或续费后，如果节点没有更新，请退出登录后重新登陆一次

---
### 疑难解答

- 软件内无法登陆，一直显示密码错误或者网络问题

回答：您所在地区的宽带运营商对国际网络访问有所干扰，请尝试优化系统DNS设置（DNS修改方法，[点此查看](../qi-ta-chang-jian-wen-ti/xiu-gai-dns-windows.md)）

- 打开任何网站都显示 `400 Bad Request`

回答：电脑时间校准为北京时间，然后退出客户端后，重启一下电脑系统，再打开软件重新连接。如果还是无法使用，则可能是系统版本过旧，更新系统或者使用兼容性客户端，[点此打开](../quan-ping-tai-shi-yong-jiao-cheng-1/windows.md)

- 显示 `spawn libs\core-windows-amd64 ENOENT` 报错

回答：杀毒软件把程序部分隔离了，检查杀毒软件（以及系统自带Windows Defender）隔离区，将软件解除隔离，并添加白名单。

---
## 远程协助

- 实在不行，可请求老机长远程！
- 先安装远程软件向日葵
- 下载:https://www.lanzoui.com/iO5M7foa6te 密码:5bkt
- 安装时，如果出现用途选项，选择“个人使用”，不要选择商业用途，否则需要付费。
- 安装成功后打开，把软件里面显示的ID和密码告诉客服即可，[点此处](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6)找客服。

[app-in-dir]: /img/pirate-windows/app-in-dir.jpg "在文件夹中打开软件"
[smartscreen]: /img/pirate-windows/smartscreen.jpg "SmartScreen"
[firewall-allow]: /img/pirate-windows/firewall-allow.jpg "允许通过防火墙上网"
[login]: /img/pirate-windows/login.jpg "登录"
[app-in-dock]: /img/pirate-windows/app-in-dock.jpg "任务栏中的app"
[select-node]: /img/pirate-windows/select-node.jpg "选择节点"
[success]: /img/pirate-windows/success.jpg "成功上网"




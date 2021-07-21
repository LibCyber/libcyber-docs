---
sidebar_label: "macOS"
sidebar_position: 4
---
# macOS

:::note
这个页面介绍如何使用macOS上的ShadowsocksX-NG-R8客户端
:::

## 教程内容、

### 下载，安装，启动

（如需**远程协助**完成所有配置，可以下载本页底部远程软件，然后[点此处](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6)找客服）

- [点击此处](https://panel.libcyber.xyz/clients/ShadowsocksX-NG-R8-1.4.4.dmg)下载客户端。国内网盘下载:https://wwi.lanzoui.com/iOKz5kykaqf 密码:8abu

![软件图标][dmg-icon]

- 解压，把app拖到应用程序文件夹

![拖入应用程序文件夹安装][install]

- 点击dock栏启动器，进入软件菜单

![打开app启动台][launchpad]

- 单击ShadowsocksX-NG-R8启动

![软件图标][app-icon]

- 如果打开过程中遇到“打不开xxx，因为来自来路不明开发者”，如下图：

![首次打开的信任请求][trust]

- 请到**系统偏好设置-安全与隐私-点击设置下方-应用许可处的“仍要打开”**

:::tip
我们的软件都是**开源软件**，安全无毒，只是暂未在苹果方面注册。
:::

- 第一次使用需要授权，输入您的开机用户名和密码

:::caution
这一步必须进行，如果没有出现，后续可能出问题
:::

![初次使用授权][authorize]

- 点击“好”之后，app已在后台运行，见下图飞机图标

![后台运行状态][running]

### 添加订阅，加载节点

- 点击状态栏纸飞机 -> 服务器 -> 编辑订阅 

![打开订阅设置][sub-setting]

- 弹出的窗口中，点击左下角 “+”号 新增订阅，

![添加订阅][add-sub]

- 打开[这个页面](https://panel.libcyber.xyz/nodeList)（即**网站**节点列表），进去后完整复制“订阅服务”处链接，将其粘贴至**软件**“订阅地址”栏，点击右下角“OK” ，如下图

![粘贴订阅链接][paste-link]

- 点击纸飞机 -> 服务器 -> 手动更新订阅 


![更新订阅][update-node]


- 正常情况下，会显示成功更新订阅的通知

![成功更新订阅][update-node-success]


### 连接节点，更新分流规则

- 点击纸飞机 -> LibCyber分组-服务器，选定合适服务器 

![选择节点][select-node]


- 点击代理设置 --> 从 GFW List 更新PAC，如下图：

:::caution
**如果规则更新失败，就先调成全局模式，再进行更新，更新成功后换回PAC模式。**
:::

![更新分流规则][update-pac]

- 稍等片刻，会出现下图的成功通知：

![成功更新规则][update-pac-success]


- 点击小飞机 --> “启动 Shadowsocks”（如果已经启动了，第一行会显示**灰色的“Shadowsocks: On”**）
- 打开浏览器，关闭同类功能的插件（如谷歌助手，优酷解锁，华人回国，ProxyOmega等可能产生功能冲突），测试一下上 [www.google.com](https://www.google.com/)


### 成功上网

![大功告成][success]

- 成功啦～

- 如果还是不能用，重新联网，并尝试使用全局模式，点击下图“全局模式”：

![选择全局模式][all-proxy]


### 购买/升级套餐、续费后必须操作

:::tip
购买商品或续费后，需要再次进行更新订阅（建议勾选**打开时自动更新订阅**）：
:::

![更新订阅][update-node]

- 看到成功通知后，更多节点就来了

![成功更新订阅][update-node-success]



---

## 远程协助

实在不行，可请求老机长远程！

先安装远程软件向日葵

下载:https://www.lanzoui.com/iUD4Rfoa7bc 密码:9ezg

安装时，如果出现用途选项，选择“个人使用”，不要选择商业用途，否则会遇到额外问题。

安装成功后打开，把软件里面**显示的ID和密码**告诉客服即可，[点此处](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6)找客服。


[dmg-icon]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/dmg-icon.jpg "安装包"
[install]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/install.jpg "拖入应用程序文件夹安装"
[launchpad]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/launchpad.jpg "打开app启动台"
[app-icon]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/app-icon.jpg "软件图标"
[trust]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/trust.jpg "首次打开的信任请求"
[authorize]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/authorize.jpg "初次使用授权"
[running]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/running.jpg "后台运行状态"
[sub-setting]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/sub-setting.jpg "打开订阅设置"
[add-sub]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/add-sub.jpg "添加订阅"
[paste-link]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/paste-link.jpg "粘贴订阅链接"
[update-node]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/update-node.jpg "更新订阅"
[update-node-success]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/update-node-success.jpg "成功更新订阅"
[select-node]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/select-node.jpg "选择节点"
[update-pac]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/update-pac.jpg "更新分流规则"
[update-pac-success]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/update-pac-success.jpg "成功更新规则"
[all-proxy]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/all-proxy.jpg "选择全局模式"
[success]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-macos/success.jpg "大功告成"
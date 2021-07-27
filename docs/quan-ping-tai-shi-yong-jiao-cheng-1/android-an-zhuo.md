---
sidebar_label: "Android（安卓）"
sidebar_position: 1
---
# Android（安卓）

:::note
这个页面介绍如何使用安卓上的LibCyber客户端
:::

### 下载，安装，启动
- [点击此处](https://panel.libcyber.xyz/clients/libcyber-android.apk)下载客户端，国内备用链接：[https://wwi.lanzoui.com/ia6x1ch](https://wwi.lanzoui.com/ia6x1ch) 密码:aofd

- 安装并启动 

![安装软件][install-apk]

- 打开是这样的，看下图：

![点击倒三角形][click-triangle]

- 单击左上角的LibCyber进入节点列表

:::caution
默认有个LibCyber-Default节点，不过只是个模版，无效的，可左滑删除
:::

### 添加订阅，加载节点
- 点击右下角 “+” 号

![添加/升级订阅][add-sub02]

- 点击“添加/升级 SSR 订阅”
- 然后点击“添加订阅地址”

![点击添加订阅][add-sub03]

- 打开网站节点列表（[点我跳转](https://panel.libcyber.xyz/nodeList)）页面，复制里面显示的“订阅服务”里的链接，复制到app里面点击确定，链接如下图格式

![粘贴订阅链接][paste-sub-link]

- 点击“ 确定 ”

![等待处理中][processing]

- 务必**勾选自动更新**，然后点击“确定并升级”，刷出最新节点

![成功添加订阅后更新节点][update-node]

- 等待一段时间，所有节点正在同步过来...

![等待处理中][processing]

- 节点导入成功后变成下图这样。

:::caution
如果一直在“处理中”，也可以选择使用底部备用方法。
:::

![选择有效节点][select-node]

### 连接节点
- 选中一个以**国家地区命名**的节点
- 点击右上角小飞机图标连接，第一次使用要授权，点确定（或同意和允许）

:::tip
如果点击不了“确定”，请先把手机上的护眼程序关闭，回来点“确定”，就可以点了，测试使用正常之后再打开护眼程序。
:::
:::tip
如果关闭护眼程序后，还是不能点击“确定”，这种情况可能出现在**360系列手机**中，需要卸载手机应用程序列表的safedetect这个英文软件，然后回来就可以点击确定了。
:::

![初次允许授权][allow-permission]

- 然后就正在连接中...飞机周围有环形进度条在转

![连接中][connecting]

### 成功上网
- 连接成功后飞机会变成勾，并且有“发送”和“接收”流量变化

![连接成功][connect-success]

- 用浏览器测试一下

![浏览器测试成功][browser-success]

- 恭喜你成功啦～

[install-apk]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-install.jpg "安装软件"
[click-triangle]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-enter-node-select-list.jpg "点击倒三角形"
[add-sub02]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-add-sub02.jpg "添加/升级订阅"
[add-sub03]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-add-sub03.jpg "点击添加订阅"
[paste-sub-link]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-add-sub-link.jpg "粘贴订阅链接"
[processing]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-processing.jpg "等待处理中"
[update-node]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-add-sub-success.jpg "成功添加订阅后更新节点"
[select-node]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-processing.jpg "选择有效节点"
[allow-permission]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-select-node.jpg "初次允许授权"
[connecting]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-first-connect-permission.jpg "连接中"
[connect-success]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/shaman-connect-success.jpg "连接成功"
[browser-success]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shaman-android/success.jpg "浏览器测试成功"
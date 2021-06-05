---
sidebar_label: "iPad/iPhone"
sidebar_position: 2
---
# iOS

:::note
这个页面介绍如何使用iOS上的Shadowrocket客户端
:::

### 获取共享ID
:::tip
苹果共享ID目前仅限**普通节点及以上**用户免费获取。有能力进行境外支付的用户，建议自行在外区ID购买Shadowrocket客户端使用。
:::

---

:::danger 警告
请**严格**按照教程操作，该账号**不能按照常规方式下载APP**。
:::

- 第一步，获取用于下载App的苹果ID，普通节点及以上用户自助提取方法如下：

- 打开网站[节点列表](https://panel.libcyber.xyz/nodeList)页面，找到叫做iOS账户信息的项目，如下图：

![找到ID信息的节点][find-id-info]

- 点击三横线小图标，以展开更多信息，如下图所示：

![查看ID][view-ios-id]

- 在展示的信息中，第一行（原用于显示服务器）是ID邮箱，第三行是ID密码，其他信息不用理会。
- 使用以上Apple ID信息**在App Store内登录**（千万不要在其他地方登录，否则可能**泄露你的隐私信息**！）
- 使用以上Apple ID信息**在App Store内登录**（千万不要在其他地方登录，否则可能**泄露你的隐私信息**！）
- 使用以上Apple ID信息**在App Store内登录**（千万不要在其他地方登录，否则可能**泄露你的隐私信息**！）

### 登录App Store，下载软件
:::danger
注意按照下面教程进行登录操作和下载操作，不要自行判断操作！
:::

- 在App Store点击**右上角**个人头像，一直往下翻，直到看到“登出”按钮，点击它推出自己的账户，然后登录我们的ID。
- 登陆如果显示**两步验证**相关信息，则选择“其它选项”=>“不启用”

:::tip
登录成功后App Store可能会重新加载，如果长时间没反应，尝试重开App Store
:::

- 成功登录后，再点击**右上角**头像进入到个人页面，点击**Purchased已购项目**-选择家庭成员Vanps-进入到一个app列表，点击Shadowrocket右侧的下载按钮。
- **认准**Shadowrocket的图标，不要下载错了！如果找不到就是没有成功切换ID。

![认准图标][app-icon]

- 下载好后，点击这个刚下载的app（认准App图标）

![打开app][open-app]

- ⚠️能够正常打开app之后，务必在系统设置 -> iTunes&App Store -> ** 换回自己账号**

:::danger
⚠️严禁分享账号，否则遇到**锁机和封号**概不负责。
:::

### 添加订阅，加载节点
- 打开 Shadowrocket后，用 Safari浏览器点击打开-->[这个页面](https://panel.libcyber.xyz/nodeList)。在打开的网页中，点击一键订阅(必须)和一键导入规则(可选)，如下图：

:::tip
如果是微信/QQ/百度app中打开该页，不支持一键订阅，需点击图中第一个青色二维码按钮，查看订阅二维码。然后用小火箭app扫码添加订阅
:::



![点击一键订阅][one-click-sub]

- 然后会跳转到Shadowrocket添加各个国家的节点，自动完成节点导入配置。

![等待更新][updating]

- (必要操作)**点击低栏“设置”-找到“服务器订阅”-勾选“打开时更新”和“自动后台更新”**
- 点击低栏“首页”-选定以**国家地区为名字**的有效节点，点击右上角连接开关。

:::tip
**购买套餐后**，需要更新订阅，向右滑动LibCyber(china-nav.xyz)这一项，点击左侧“更新”按钮，等待更新成功”后重启app
:::

### 连接节点
![选择节点][select-node]

- 点击连接，第一次使用需要授权

![允许app内授权][authorize-in-app]

- 点击“allow”或者“允许”后，跳转按指纹或人脸授权

![指纹/人脸授权][authorize-in-setting]

- 屏幕上方状态栏出现“VPN”图标，“未连接”变成节点名，则连接成功

![连接成功][connect-success]

### 成功上网
- 上浏览器测试一下

![认准Safari浏览器][open-safari]

![输入网址][enter-url]

![成功打开网页][success]

- 这时候就成功啦～

:::tip
当进行海外游戏时，最好将 Shadowrocket “首页” 页面中的 “全局路由” 切换至 “代理”，并确保“设置”页面中的“UDP”已开启转发。
:::





[find-id-info]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/find-id-info.jpg "找到ID信息的节点"
[view-ios-id]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/view-ios-id.jpg "查看ID"
[app-icon]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/app-icon.jpg "认准图标"
[open-app]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/open-app.jpg "打开app"
[one-click-sub]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/one-click-sub.jpg "一键订阅"
[updating]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/updating.jpg "更新中"
[select-node]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/select-node.jpg "选择节点"
[authorize-in-app]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/authorize-in-app.jpg "app内授权"
[authorize-in-setting]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/authorize-in-setting.jpg "指纹/人脸授权"
[connect-success]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/connect-success.jpg "连接成功"
[open-safari]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/open-safari.jpg "认准Safari浏览器"
[enter-url]:https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/enter-url.jpg "输入网址"
[success]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/shadow-ios/success.jpg "成功打开网页"

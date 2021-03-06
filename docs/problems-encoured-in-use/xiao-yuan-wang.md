# 校园网、拨号连接无法使用



:::note
解决校园网宽带连接无法使用的问题
:::

如果发现电脑使用网线连接校园网后，无法使用代理，但是通过wifi连接的手机热点正常使用，则大几率是因为你的PPPOE拨号使用了中文命名。



需要将 宽带/拨号连接 先断开，然后将名称改为英文名字，重启电脑，再打开LibCyber软件即可正常使用。



宽带名字修改方法详情，可以参看此处教程，https://www.ithome.com/html/win10/253485.htm



步骤大概如下：

1. 在开始菜单搜索栏输入regedit，按回车键进入注册表编辑器
2. 左侧展开，定位到 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles`
3. 点击**Profiles**左边的箭头，会发现你的连接都在这里显示
4. 点击这些长名文件夹，最后一行**ProfileName**就是可以修改的网络连接名称
5. 找到你要修改名称的连接后，双击**ProfileName**，修改**数值数据**为你喜欢的名称即可，例如“internet”（如有需要，你可以把Profiles下的所有连接都重命名，有线网和无线网可以区别命名）
6. 此时在任务栏网络图标、控制面板的“网络和共享中心”，以及“设置→ 网络和Internet”中应该可以看到变化。
7. 最后，建议到控制面板-网络-网络适配器设置，把里面那个适配器设置名称也改成英文
# 修改 Windows 网络DNS设置

1. 鼠标右键点击桌面右下角的网络图标，选择：打开网络和共享中心

![打开网络设置][open-network-setting]

2. 打开适配器设置面板

![网络设置][network-setting]

3. 选择正在使用的网卡，点击属性

![打开适配器属性][right-click-adapter]

4. 选中：Internet协议版本4（TCP/IPV4）—属性

![打开IPv4属性][open-ipv4-property]

5. 首选DNS服务器地址中填写 `223.5.5.5` ，备用DNS服务器填写 `223.6.6.6` ，然后确定

![填写DNS][fill-dns]

6. 命令行执行DNS解析刷新（可选）

  - 右键点击Windows开始按钮-选择菜单中的“运行”（或者同时按下Win键+R），在“运行”窗口中输入 cmd 并确定

  ![打开运行][open-run]
  ![启动命令行][run-cmd]
  
  - 命令提示符中输入： `ipconfig /flushdns` 回车

  ![刷新DNS][cmd-flushdns]

7. 完毕


[open-network-setting]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/open-network-setting.jpg "打开网络设置"
[network-setting]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/network-setting.jpg "网络设置"
[right-click-adapter]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/right-click-adapter.jpg "打开适配器属性"
[open-ipv4-property]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/open-ipv4-property.jpg "打开IPv4属性"
[fill-dns]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/fill-dns.jpg "填写DNS"
[open-run]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/open-run.jpg "打开运行"
[run-cmd]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/run-cmd.jpg "启动命令行"
[cmd-flushdns]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/cmd-flushdns.jpg "刷新DNS"

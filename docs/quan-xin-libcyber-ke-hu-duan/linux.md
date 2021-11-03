---
sidebar_label: "Linux"
---
# Linux

:::note
这个页面介绍如何使用Linux上的LibCyber Desktop客户端
:::

:::caution
由于Linux发行版本繁多，目前只保证能正常运行在使用GNOME的Linux发行版本，例如Ubuntu 20.04 LTS、Debian 9、Centos 7
:::
（如需**远程协助**完成所有配置，可以下载本页底部远程软件，然后[点此处](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6)找客服）

## 教程内容

### 下载，安装，启动

- [本站下载地址](https://panel.libcyber.xyz/clients/LibCyber-V1.2.6.AppImage)

- 大陆网盘地址下载:https://wwi.lanzoui.com/iRduuw3o9dg 密码:fbof

:::note
ARM64架构下载地址: 
- [本站下载地址](https://panel.libcyber.xyz/clients/LibCyber-V1.2.6-arm64.AppImage) 
- 大陆网盘地址下载:https://wwi.lanzoui.com/i24gUw3o88f 密码:g0w6
:::

- 打开直接运行即可

- 如果正常启动，则点击连接即可。如果启动遇到问题，看下面步骤。

- 在软件目录点击右键，点击“从此处打开终端”

- 在终端输入 `./LibCyber*` 敲击回车

- 如果有报错，看下面疑难解答

### 疑难解答

1. 如果遇到 `permission denied` 相关错误

- 在终端执行以下命令
```shell
chmod +x LibCyber*
```

- 重试一下在终端运行 `./LibCyber*`

2. 如果遇到 `error while loading shared libraries: libXss.so.1` 相关报错

在终端执行以下命令（**选择对应发行版本的指令运行**）
```shell
sudo apt-get install -y libxss1 # Ubuntu/Debian
# sudo yum install -y libXScrnSaver # Centos/Fedora
```

- 重试一下在终端运行 `./LibCyber*`
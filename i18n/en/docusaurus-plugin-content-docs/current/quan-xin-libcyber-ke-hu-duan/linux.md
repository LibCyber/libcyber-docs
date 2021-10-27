---
sidebar_label: "Linux"
---
# Linux

:::note
This page describes how to use the LibCyber ​​Desktop client on Linux
:::

:::caution
Due to the large number of Linux distributions, only Linux distributions that use GNOME are currently guaranteed to run normally, such as Ubuntu 20.04 LTS, Debian 9, Centos 7
:::
(If you need **remote assistance** to complete all configurations, you can download the remote software at the bottom of this page, and then [click here](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6) Looking for customer service)


### Download, install, start

- [Download address of this site](https://panel.libcyber.xyz/clients/LibCyber-V1.2.5.AppImage)

- [Mainland Network Disk Download Address](https://wwi.lanzoui.com/iKo6Uvu512j) Access password: h95t

:::note
ARM64 architecture download address:
- [Download address of this site](https://panel.libcyber.xyz/clients/LibCyber-V1.2.5-arm64.AppImage)
- [Mainland Network Disk Download Address](https://wwi.lanzoui.com/iVqnTvu52ad) Access password: 45yg
:::

- Open and run directly

- If it starts normally, just click connect. If you encounter problems with startup, see the steps below.

- Right-click in the software directory and click "Open terminal from here"

- Type `./LibCyber*` in the terminal and hit enter

- If there is an error, see the troubleshooting below

Troubleshooting:

- Encountered `error while loading shared libraries: libXss.so.1` related errors

Execute the following commands in the terminal (**choose correct command for Linux distributions**)
```shell
sudo apt-get install -y libxss1 # Ubuntu/Debian
# sudo yum install -y libXScrnSaver # Centos/Fedora
```
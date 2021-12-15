# Modify Windows system network DNS settings

1. Right-click the network icon in the lower right corner of the desktop, select: Open Network and Sharing Center

![Open network settings][open-network-setting]

2. Open the adapter settings panel

![Network Settings][network-setting]

3. Select the network card you are using and click Properties

![Open adapter properties][right-click-adapter]

4. Check: Internet Protocol Version 4 (TCP/IPV4)—Properties

![Open IPv4 properties][open-ipv4-property]

5. Fill in `223.5.5.5` in the address of the preferred DNS server, fill in `223.6.6.6` in the alternate DNS server, and then confirm

![Fill in DNS][fill-dns]

6. Perform DNS resolution refresh from the command line(Optional)

  - Right-click the Windows start button-select "Run" in the menu (or press the Win key + R at the same time), enter cmd in the "Run" window and confirm

  ![Open-run][open-run]
  ![Start command line][run-cmd]
  
  - Enter in the command prompt: `ipconfig /flushdns` and press Enter

  ![Flush DNS][cmd-flushdns]

7. Finished


[open-network-setting]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/open-network-setting.jpg "Open network set up"
[network-setting]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/network-setting.jpg "Network Settings"
[right-click-adapter]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/right-click-adapter.jpg "Open the adapter Attributes"
[open-ipv4-property]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/open-ipv4-property.jpg "Open IPv4 Attributes"
[fill-dns]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/fill-dns.jpg "Fill in DNS"
[open-run]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/open-run.jpg "Open and run"
[run-cmd]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/run-cmd.jpg "Start command line"
[cmd-flushdns]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.1.1/assets/faq/change-dns-windows/cmd-flushdns.jpg "Flush DNS"
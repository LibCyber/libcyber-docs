# PAC mode introduction

This page mainly explains the PAC mode. Right-click the paper airplane program. The options in the PAC menu are all options for operating the SSR PAC file. If you don't use the "PAC mode" proxy, you can just ignore it.

Right click on the plane-select PAC

![pac menu][pac-in-menu]



In the PAC menu, there are several options:

![All pac rules][pac-full-menu]

As the name suggests, the following modes are more commonly used:

1. Update to bypass the list of common domain names in mainland China (suitable for users who visit **foreign websites>China-mainland websites**): Common China-mainland websites will be recorded in the rules, and all other websites will forward data through the server by default, and statistics are required Server usage traffic. That is to say, a **whitelist** strategy is adopted, which corresponds to the whitelist mode of other operating systems. This part of the common China-mainland websites is on the list, and the rules are directly connected when the rules are matched. In other cases, the server proxy forwards the data.
2. Update to GFWList (suitable for users who visit **China-mainland websites>foreign websites**): The rules will record common foreign **walled** websites, and only go when they encounter these websites that have been registered for being walled. The number of server proxy forwarding, in other cases are directly connected to the Internet. That is to say, the **blacklist** strategy is adopted. Only foreign websites that are walled off use foreign nodes as agents to forward data, and in other cases, they are directly connected to the Internet.
3. Update to only use common domain names in mainland China (suitable for **international students**): Only common websites in China can forward data through the server (for the node used at this time, please select the China-mainland server), from outside the wall to inside the wall , Back to the embrace of the motherland QQ Music, Bilibili, Youku, iQiyi. When you go to other websites, such as Google and FB, you can directly connect to the Google server through the network of a foreign local operator.
4. Other modes are not commonly used, you can make up your own brain.


[pac-in-menu]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/faq/pac-in-menu.jpg "pac menu"
[pac-full-menu]: https://cdn.jsdelivr.net/gh/LibCyber/docs-cdn@v1.0.0/assets/faq/pac-full-menu.jpg "All pac rules"
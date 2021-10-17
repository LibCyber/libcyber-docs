# Customize PAC smart distribution rules



### Pre-order knowledge concept:

-Proxy: Indicates that the website traffic is designated to be forwarded and accelerated by LibCyber
-Direct connection: means to visit the site directly, which is equivalent to not using LibCyber ​​software



### Under Windows:

In the same level directory of LibCyber.exe, create a new file named user-rule.txt and add content according to the following rules

```
# The following line represents the hope that the website starting with amazon.com will be a proxy
||amazon.com^

# The following line represents the hope that the website beginning with baidu.com will be connected directly
@@baidu.com^


# More examples
# Let scholar.google.com be a proxy
# Let xueshu.baidu.com a type of website direct access
||*.google.com^
@@*.baidu.com^

```

After the modification is saved, right-click the LibCyber ​​paper airplane in the lower right corner => click "Replace Rule" in the menu => Choose a rule to trigger a rule update. Restart the software. At this time, the software will splice the remote download rules and use your customized rules together.



### Under macOS:

Click the paper airplane software icon in the menu bar => Proxy Settings => edit user PAC rules, add content according to the following rules

```
# The following line represents the hope that the website starting with google.com will be a proxy
||google.com^

# The following line represents the hope that the website beginning with baidu.com will be connected directly
@@baidu.com^


# More examples
# Let scholar.google.com be a proxy
# Let xueshu.baidu.com a type of website direct access
||*.google.com^
@@*.baidu.com^
```

After the modification is saved, click the paper plane in the menu bar => Rule Settings => select Update GFWList PAC rules to trigger a rule update, and the remote download rules will be spliced ​​and used together with your customized rules. Close the software and re-enable it again.



### Under iOS:

Open the small rocket APP, click on the bottom bar "Configuration" => click on the configuration file being used in the "local file" list => click on "Edit configuration" in the pop-up menu => add rule

Please understand the following common case syntax before use:

```
Example 1:
Type: DOMIN-SUFFIX
Option: PROXY
Domain name: google.com
At this time, the effect is: all google.com\scholar.google.com\www.google.com websites use proxy acceleration

Example 2:
Type: DOMIN-KEYWORD
Option: PROXY
Domain name: google
At this time, the effect is: as long as the Internet traffic containing the google keyword in all network data is forwarded through the proxy, some negative effects will occur. For example, if you are searching for "google entry" in Baidu, the proxy will also be forwarded through the LibCyber ​​server, which will change. After accessing the overseas version of Baidu, the speed has deteriorated.

Example 3:
Type: USER-AGENT
Option: DIRECT
User Agent: *NeteaseMusic*
The effect at this time is: among all network data, the Internet traffic using the NetEase Cloud Music APP is directly connected. TIPS: In the user agent here, the content is obtained from the User-Agent field in the Header according to the packet capture in the small rocket to observe the characteristics of each APP data packet. If you don’t know what it is, please first understand the knowledge of computer network briefly.

```

After the modification is saved, on the configuration page, click the configuration file you just modified, click once to use the configuration, and then reconnect to the node server.



### Not currently supported under Android
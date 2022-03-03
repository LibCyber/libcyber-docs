---
sidebar_label: "macOS"
sidebar_position: 4
---
# macOS

:::note
This page describes how to use the ShadowsocksX-NG-R8 client on macOS
:::

## Tutorial content,

### Download, install, start

(If you need **remote assistance** to complete all configurations, you can download the remote software at the bottom of this page, and then [click here](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6) Looking for customer service)

- [Click here](https://panel.libcyber.xyz/clients/ShadowsocksX-NG-R8-1.4.4.dmg) to download the client. China-mainland network disk download: https://wwi.lanzoui.com/iOKz5kykaqf Password: 8abu

![Software Icon][dmg-icon]

- Unzip, drag the app to the application folder

![Drag into the application folder to install][install]

- Click the launcher in the dock to enter the software menu

![Open app launch pad][launchpad]

- Click ShadowsocksX-NG-R8 to start

![Software icon][app-icon]

- If you encounter "Cannot open xxx because it is from an unknown developer" during the opening process, as shown below:

![First open trust request][trust]

- Please go to **System Preferences-Security and Privacy-Click on the bottom of Settings-"Open anyway" in the application permission section**

:::tip
Our software is **open source software**, safe and non-toxic, but it has not yet been registered with Apple.
:::

- Authorization is required for the first use, enter your power-on user name and password

:::caution
This step must be carried out, if it does not appear, there may be problems in the follow-up
:::

![First use authorization][authorize]

- After clicking "OK", the app is already running in the background, see the airplane icon in the figure below

![Background running state][running]

### Add subscription, load node

- Click Paper Plane in the status bar -> Server -> Edit subscription

![Open Subscription Settings][sub-setting]

- In the pop-up window, click the "+" sign in the lower left corner to add a new subscription,

![Add Subscription][add-sub]

- Open [this page](https://panel.libcyber.xyz/nodeList) (i.e. **website** node list), go in and copy the link of "Subscription Service" completely, and paste it into **software** In the "Subscription Address" column, click "OK" in the lower right corner, as shown in the figure below

![Paste subscription link][paste-link]

- Click Paper Airplane -> Server -> Manually update subscription


![Update Subscription][update-node]


- Under normal circumstances, a notification of successful subscription renewal will be displayed

![Update subscription successfully][update-node-success]


### Connect the nodes and update the diversion rules

- Click Paper Airplane -> LibCyber ​​Group-Server, select the appropriate server

![Select node][select-node]


- Click Proxy Settings --> Update PAC from GFW List, as shown below:

:::caution
**If the rule update fails, first switch to the global mode, then update, and then switch back to the PAC mode after the update is successful. **
:::

![Update diversion rules][update-pac]

- Wait for a while, the success notification as shown in the figure below will appear:

![Successful update rule][update-pac-success]


- Click on the small plane --> "Launch Shadowsocks" (If it is already started, the first line will show **grey "Shadowsocks: On"**)
- Open the browser, close the plug-ins with similar functions (such as Google Assistant, Youku Unlock, Chinese Returning to China, ProxyOmega, etc. may cause functional conflicts), and test it on [www.google.com](https://www.google.com/ )


### Go online successfully

![Successful][success]

- Success~

- If it still doesn't work, reconnect to the Internet and try to use the global mode, click on the "Global Mode" in the figure below:

![Select global mode][all-proxy]


### Must operate after purchasing/upgrading packages and renewal

:::tip
After purchasing or renewing the product, you need to renew the subscription again (it is recommended to check **Automatically renew subscription when opening**):
:::

![Update Subscription][update-node]

- After seeing the success notification, more nodes will come

![Update subscription successfully][update-node-success]



---

## remote Assistance

It really doesn't work, you can ask the old captain to do it remotely!

Install the remote software Sunflower first

Download: https://www.lanzoui.com/iUD4Rfoa7bc Password: 9ezg

During installation, if there is a use option, select "Personal Use" instead of commercial use, otherwise you will encounter additional problems.

After the installation is successful, open it, and tell the customer service the ID and password ** displayed in the software, [click here](https://go.crisp.chat/chat/embed/?website_id=9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6) Find customer service.


[dmg-icon]: /img/shadow-macos/dmg-icon.jpg "installation package"
[install]: /img/shadow-macos/install.jpg "Drag into the application folder to install"
[launchpad]: /img/shadow-macos/launchpad.jpg "Open the app launch pad"
[app-icon]: /img/shadow-macos/app-icon.jpg "software icon"
[trust]: /img/shadow-macos/trust.jpg "First Open Trust Request"
[authorize]: /img/shadow-macos/authorize.jpg "Authorization for the first use"
[running]: /img/shadow-macos/running.jpg "Background running status"
[sub-setting]: /img/shadow-macos/sub-setting.jpg "Open subscription settings"
[add-sub]: /img/shadow-macos/add-sub.jpg "Add Subscription"
[paste-link]: /img/shadow-macos/paste-link.jpg "Paste Subscription Link"
[update-node]: /img/shadow-macos/update-node.jpg "Update Subscription"
[update-node-success]: /img/shadow-macos/update-node-success.jpg "Successfully updated subscription"
[select-node]: /img/shadow-macos/select-node.jpg "Select Node"
[update-pac]: /img/shadow-macos/update-pac.jpg "Update Diversion Rules"
[update-pac-success]: /img/shadow-macos/update-pac-success.jpg "Successful update rule"
[all-proxy]: /img/shadow-macos/all-proxy.jpg "Select global mode"
[success]: /img/shadow-macos/success.jpg "You're done"
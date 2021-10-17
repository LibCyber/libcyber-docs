# Campus network, dial-up connection cannot be used



:::note
Solve the problem of unavailable campus network broadband connection
:::

If you find that the computer is connected to the campus network with a network cable, the proxy cannot be used, but the mobile phone hotspot connected via wifi is normally used, it is most likely because your PPPOE dial-up uses Chinese naming.



You need to disconnect the broadband/dial-up connection first, then change the name to an English name, restart the computer, and then open the LibCyber ​​software to use it normally.



For details on how to modify the broadband name, please refer to the tutorial here, https://www.ithome.com/html/win10/253485.htm



The steps are roughly as follows:

1. Enter regedit in the search bar of the start menu and press Enter to enter the registry editor
2. Expand on the left and locate to `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles`
3. Click the arrow on the left of **Profiles**, you will find your connections are displayed here
4. Click on these long name folders, the last line **ProfileName** is the network connection name that can be modified
5. After finding the connection whose name you want to modify, double-click **ProfileName**, and modify **value data** to a name you like, such as "internet" (if necessary, you can change all the connections under Profiles Renamed, wired network and wireless network can be named differently)
6. At this time, you should see the changes in the network icon in the taskbar, the "Network and Sharing Center" of the control panel, and "Settings → Network and Internet".
7. Finally, it is recommended to go to Control Panel-Network-Network Adapter Settings, and change the name of the adapter settings inside to English
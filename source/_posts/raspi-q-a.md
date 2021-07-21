---
title: 树莓派操作与安装Q&A
categories: RaspberryPi
tags: [Arm,Raspi]
date: 2021-7-12 09:00:00
---

买了一个树莓派400，问题还真多呢..

<!- more -->

声明：本 Q&A 只是适用于树莓派4b 4GB及以上的版本（包括 树莓派 400），别的版本可能有共同之处，但是不可打包票。

### Q1: 初次使用树莓派，应该买些什么？

答：买一个主机（建议树莓派4b 4GB）。一个 Micro HDMI 接口，Boot会有用的。然后买上一个 16 GB 以上的TF卡或者是优盘。

### Q2：终于拿到了树莓派，怎么开机呢？

答：首先烧录系统，然后接到显示器上开机。

### Q3：推荐什么系统呢？

答：首先我自己用的是 Manjaro on Arm.虽然在主机上使用 Deepin, 是Debian系的系统，但这次我选了 Arch 系。因为舒服。

### Q4: 输入法？

```bash
sudo pacman -S fcitx fcitx-im fcitx-configtool kcm-fcitx
```

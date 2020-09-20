---
template: "post"
title: "How to use vi editor"
date: "2020-09-04 09:50"
cover: "../images/20200904/2020090401.png"// 660x400
slug: "how-to-use-vi-editor"
keywords: "RaspberryPi"
categories:
    - RaspberryPi
tags:
  - RaspberryPi
  - vi editor
  - vi/vim
language: Korean
---

![](../images/20200904/2020090401.png) // 배너 1200x250

<br>

> 
> 
<br>

![](../images/20200904/2020090401.png)
<br>
<br>


라즈베리파이 OS의 특정 폴더에 EEPROM 파일들이 있기 때문에 설치 후 업데이를 진행해야 한다. [Raspberry Pi imager로 라즈베리파이 OS 설치](/raspberry-pi-os-installation)편을 참고하여 라즈베리파이 OS를 SD카드에 설치하고 라즈베리파이를 부팅한다.

<br>

## 라즈베리파이 업데이트
최신 EEPROM 파일을 EEPROM에 업로드 하기 위해 라즈베리파이를 업데이트 한다.

```
sudo apt update
sudo apt full-upgrade
```

<br>

## bootloader 업데이트
stable version의 bootloader를 업데이트 하기 위해 vi 편집기로 firmware relese status를 crital에서 stable로 변경한다. vi 편집기 사용법은 [vi편집기 사용법]()을 사용하기 바란다.

<br>

``` 
sudo vi /etc/default/rpi-eeprom-update
```

<br>

![](../images/20200830/2020083006.png)

<br>

변경 후 라즈베리파이의 다음 경로 (/lib/firmware/raspberrypi/bootloader/stable)에 최신 EEPROM 버전을 확인 후 다음 명령어를 터미널에 입력한다.

![](../images/20200830/202008307.png)

<br>



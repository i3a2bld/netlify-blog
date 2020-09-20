---
template: "post"
title: "How to use vi editor"
date: "2020-09-04 09:50"
cover: "../images/20200904/2020090401.png"
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

![](../images/20200904/2020090402.png)

<br>

>[vi](https://staff.washington.edu/rells/R110/)는 1976년 [윌리엄 넬슨 조이](https://ko.wikipedia.org/wiki/빌_조이)가 초기 [BSD](https://ko.wikipedia.org/wiki/BSD) 배포에 포함될 편집기로 만들었으며 라즈베리파이에서 사용하는 vi편집기는 [Vim: Vi improved](https://ko.wikipedia.org/wiki/Vim)버전이다.Vi의 뜻은 한줄 씩 편집하는 준단위 편집기가 아니라 한 화면을 편집하는 **V**isual ed**i**tor라는 뜻이며 복잡하지 않아서 리눅스를 사용하는 사람들이 많이 사용한다. 처음 사용할 때는 매우 불편하나 익숙해지면 나름 편하다.

<br>

라즈베리파이 OS를 설치 하면 기본 프로그램으로 vi 편집기도 설치가 되며 라즈베리파이의 vi 편집기는 Vim 편집기 이다. 라즈베리파이를 사용하려면 vi편집기를 사용할 일이 종종 있으니 사용법에 대해 설명하도록 하겠다.

![](../images/20200904/2020090403.png)

<br>

### vi 편집기 동작 모드

vi 편집기는 우리가 익숙한 윈도우의 메모장과는 다르며 메뉴가 보이지 않아 사용하는 명령어와 구조를 알면 사용할때 편하다. 이해를 돕기 위해 라즈베리파이를 세팅할 때 vi 편집기를 사용하는 예를 들어서 설명하도록 하겠다. 

![](../images/20200904/2020090404.png)

<br>

vi 편집기를 시작하면 command mode로 들어오며 편집할 파일의 내용이 터미널에 보이며 편집할 위치에서 i를 누르면 insert mode로 변경이 되어 편집이 가능해진다. 편집이 끝나거나 다른 동작(예를 들어 지우기)을 하려면 ESC키를 눌러 command mode로 가서 ```:```을 누르면 명령어를 입력할 수 있게 된다. 라즈베리파이 설치 시 편집한 걸 저장하고 종료를 할 때 ```:wq```를 입력한다.

<br>

### vi 조작법

vi 편집기 실행은 편집할 파일과 같은 폴더에서는 ```vi 파일이름``` 다른 폴더에서 편집 하려면 ```vi 파일경로와 이름```을 입력하면 된다.

예를 들어 ```/home/pi/test/```폴더에 있는 ```test.txt```파일을 편집한다고 가정하다.

![](../images/20200904/2020090405.png)

<br>

최상위 폴더(Root)에서는 아래와 같이 파일 경로와 변경할 파일 이름을 vi와 같이 입력해 준다.

 ```
 vi /home/pi/test/test.txt
 ``` 

 ![](../images/20200904/2020090406.png)

권한 문제로 편집이 안될 경우 sudo를 추가적으로 입력해 준다. 

 ```
 sudo vi /home/pi/test/test.txt
 ```
입력하고 나면 다음과 같이 편집 모드로 들어가게 된다.

 ![](../images/20200904/2020090407.png)

<br>

변경하려는 파일이 같은 폴더에 있다면 vi명령어와 편집하려는 파일이름을 다음과 같이 터미널에 입력한다.

```
vi test.txt
```

![](../images/20200904/2020090408.png)

<br>

입력하고 나면 다음과 같이 편집 모드로 들어간다.

![](../images/20200904/2020090409.png)


### vi 명령어 모음

i - Insert at cursor (goes into insert mode)
a - Write after cursor (goes into insert mode)
A - Write at the end of line (goes into insert mode)
ESC - Terminate insert mode
u - Undo last change
U - Undo all changes to the entire line
o - Open a new line (goes into insert mode)
dd - Delete line
3dd - Delete 3 lines.
D - Delete contents of line after the cursor
C - Delete contents of a line after the cursor and insert new text. Press ESC key to end insertion.
dw - Delete word
4dw - Delete 4 words
cw - Change word
x - Delete character at the cursor
r - Replace character
R - Overwrite characters from cursor onward
s - Substitute one character under cursor continue to insert
S - Substitute entire line and begin to insert at the beginning of the line
~ - Change case of individual character
Note: You should be in the "command mode" to execute these commands. VI editor is case-sensitive so make sure you type the commands in the right letter-case.

Make sure you press the right command otherwise you will end up making undesirable changes to the file. You can also enter the insert mode by pressing a, A, o, as required.

Moving within a file
k - Move cursor up
j - Move cursor down
h - Move cursor left
l - Move cursor right
You need to be in the command mode to move within a file. The default keys for navigation are mentioned below else; You can also use the arrow keys on the keyboard.

Saving and Closing the file
Shift+zz - Save the file and quit
:w - Save the file but keep it open
:q - Quit without saving
:wq - Save the file and quit




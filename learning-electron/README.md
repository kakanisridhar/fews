# Learning electron
Setup from this video 
https://www.youtube.com/watch?v=fP-371MN0Ck&t=12627s


## How to run

npm install
npm run dev

dist:win - requires elevated permissions so run in admin mode

## What I learned

### Lesson1

just bootstrap electron , renderer process and main process basics

windows release requires to be done in admin mode

usins nsis as option for electron-builder will enable installer to chose the directory of installation(remove one click)

### lesson2 - IPC 

using 2 way async 

on - for listening to events from main and renderer processess
send - to send event to other process
sendSync - sync way - rendere will freeze
event.reply - to topic


from renderer to main

invoke -  for expecting a promise from other process
handle -  for handling promise requests

main to renderer

window.webContents.send
ipcrenderer on 
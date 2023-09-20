# bud-localtunnel

**Use with Bud `^6.16.1`**

Automatically forwards your bud dev server to the web, for showing your mum. Or testing on other devices.

Uses [localtunnel](https://theboroer.github.io/localtunnel-www/), a free and open forwarding proxy.

## Install

`npm install bud-localtunnel --save-dev` or `yarn add bud-localtunnel -D`

## How to use

1. Install it.
2. Visit the URL shown on the Bud dashboard

```
@talss89 ➜ /workspaces/sandbox $ yarn dev
yarn run v1.22.19
$ bud build development

╭ bud-sandbox [ecc1747ace2cea70]                                                                                                                                       ./dist
│
│ app
│  ◯ js/runtime.js                                                                                                                                                   45.32 kB
│  ◯ js/app.js                                                                                                                                                       49.19 kB
│
│ assets
│  ◯ logo.svg                                                                                                                                                         1.21 kB
│  ◯ index.html                                                                                                                                                     374 bytes
│  … 4 additional assets not shown
│
╰ 579ms 25 modules [0/25 modules cached]

Network

 › Dev    ┄ http://0.0.0.0:3000/
          ┄ http://172.16.5.4:3000/
          ┄ https://bud-sandbox.loca.lt/ <-- This is your public URL
```
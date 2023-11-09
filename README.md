# Lengux （a Hexo theme built using <a href="https://www.bootcss.com/"></a> bootstript is very concise）

## 💻 Installation

```
git clone https://github.com/XUSHAO11/Lengux.git
```

- node>=12
- Example Modify the hexo root directory "_config.yml"

```
theme: Lengux
-------------
highlight:
  enable: false
```

### Installation dependency

```
npm install hexo-renderer-sass
npm install hexo-generator-search
```

# 1、Install rss plug-in

Install it in the site root directory
```
npm install hexo-generator-feed
```
## 2、The hexo root configures the _config.yml file to enable the plug-in
```
# Extensions
plugins:
  hexo-generator-feed
#Feed Atom
feed:
  type: atom
  path: atom.xml
  limit: 20
```
### 3、Add an RSS subscription configuration to the Lengux topic
rss: /atom.xml
```
title: lengux
author: lengux
```
### Article title configuration

```
---
# md article default
page:
  article:  # 标签
  intro:    # 文章摘要
  img:      # 文章缩略图
---
```
> theme: Lengux

## 🎉 Features
- [x] Rss
- [x] Card UI design
- [x] Responsive web design
- [x] valine
- [x] Typewriter effect
- [x] <a href="https://darkmodejs.learn.uno/">darkmode🌓</a>

## ✨ Contributors

 <a href="https://github.com/XUSHAO11"><img src="https://avatars.githubusercontent.com/u/52852249?v=4" alt="yangshaoxu" style="width: 50px;height:50px;"></a> 

## 📷 Screenshots
pc:
<img src="https://img1.imgtp.com/2023/11/08/ndLTGPmD.jpeg" alt="Lengux" width="50%"/>
Move:
<img src="https://img1.imgtp.com/2023/11/08/5vuoCazn.png" alt="Lengux" width="50%"/>


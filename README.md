# Lengux-theme
<a href="./README.en.md">English</a>
## 💻 Installation

```
git clone https://github.com/XUSHAO11/Lengux.git
```

- node>=12
- 修改hexo根目录 _config.yml

```
theme: Lengux
-------------
highlight:
  enable: false
```

### 安装依赖

```
npm install hexo-renderer-sass
npm install hexo-generator-search
```

# 1、安装rss插件

在站点根目录下安装
```
npm install hexo-generator-feed
```
## 2、hexo根目录配置_config.yml文件，启用插件
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
### 3、在Lengux主题添加RSS订阅配置
# RSS订阅
rss: /atom.xml

```
title: lengux
author: lengux
```
### 文章标题配置

```
---
# md文章默认
page:
  article:  # 标签
  intro:    # 文章摘要
  img:      # 文章缩略图
---
```
> theme: Lengux

## 🎉 Features
- [x] 卡片UI设计
- [x] 两列布局
- [x] 响应式网页设计
- [x] 评论 （valine)
- [x] 打字机效果
- [x] 深色模式

## ✨ Contributors

 <a href="https://github.com/XUSHAO11"><img src="https://avatars.githubusercontent.com/u/52852249?v=4" alt="yangshaoxu" style="width: 50px;height:50px;"></a> 


# Lengux-theme
<a href="./README.en.md">English</a>
## 💻 安装

```
git clone https://github.com/XUSHAO11/Lengux.git
```

- node>=12
- 修改hexo根目录 _config.yml

```
theme: Lengux
-------------
highlight:
  hljs: true
```

### 安装依赖

```
npm install hexo-renderer-sass
npm install hexo-generator-search
```

### 安装rss插件
```
npm install hexo-generator-feed
```
2、hexo根目录_config.yml 添加
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
3、在Lengux-_config.yml
添加RSS订阅
```
rss: /atom.xml
```
### 文章标题

```
---
# md文章默认
page:
  title: Hello World
  label:    # 标签
  intro:    # 文章摘要
  date:     # 日期
  img:      # 文章缩略图
---
```
> theme: Lengux

## 🎉 特性
- [x] 卡片UI设计
- [x] 两列布局
- [x] 响应式网页设计
- [x] 评论 （valine)
- [x] 打字机效果
- [x] 深色模式

## ✨ 贡献者

 <a href="https://github.com/XUSHAO11"><img src="https://avatars.githubusercontent.com/u/52852249?v=4" alt="yangshaoxu" style="width: 50px;height:50px;"></a> 


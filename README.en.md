# Lengux-theme
<a href="./README.md">翻译</a>
## 💻 Installation

```
git clone https://github.com/XUSHAO11/Lengux.git
```

- node>=12
- Change the hexo root directory _config.yml
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

### Install rss plug-in
```
npm install hexo-generator-feed
```
2、hexo root directory _config.yml added
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
Add an RSS feed
```
rss: /atom.xml
```
### Article title

```
---
# md article default
page:
  title: Hello World
  label:    # tag
  intro:    # Abstract of article
  date:     # date
  img:      # Article thumbnail
---
```
> theme: Lengux

## 🎉 Features
- [x] Card UI design
- [x] Two-column layout
- [x] Responsive web design
- [x] Review (valine)
- [x] Typewriter effect
- [x] Dark pattern

## ✨ Contributors

 <a href="https://github.com/XUSHAO11"><img src="https://avatars.githubusercontent.com/u/52852249?v=4" alt="yangshaoxu" style="width: 50px;height:50px;"></a> 


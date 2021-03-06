# kugou-music
> 谷歌浏览器手机模式下预览
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
```html
https://github.com/ecitlm/Kugou-api

音乐新歌榜
说明: 获取新歌曲榜单
必选参数:
page: json
接口地址: http://m.kugou.com/?json=true
用vant swipe做轮播
用song组件渲染歌曲列表

音乐排行榜
说明: 获取音乐排行榜
必选参数:
接口地址: http://m.kugou.com/rank/list&json=true
返回数据(这里只显示3条数据)

排行版分类歌曲列表

说明: 获取音乐排行榜

必选参数:
rankid 排行榜分类下id
json 返回类型

接口地址: http://m.kugou.com/rank/info/?rankid=8888&page=1&json=true

返回数据

音乐歌单
说明: 获取音乐排行榜

必选参数:

接口地址: http://m.kugou.com/plist/index&json=true

返回数据

歌单下的音乐列表
说明: 获取 歌单下的音乐列表，需要添加 specialid

必选参数:
specialid 125032

接口地址: http://m.kugou.com/plist/list/125032?json=true

返回数据

歌手分类
说明: 获取 歌手分类

必选参数:

无
接口地址: http://m.kugou.com/singer/class&json=true

歌手分类下面的歌手列表
说明: 获取 歌手分类

必选参数:

classid

接口地址: http://m.kugou.com/singer/list/88?json=true

歌手信息
说明: 获取 歌手分类

必选参数:

singerid : 歌手id 3060

接口地址: http://m.kugou.com/singer/info/3060&json=true

歌曲音乐详情
说明: 获取 歌曲音乐详情信息

必选参数:

hash : 音乐列表下的 音乐id

接口地址: http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=CB7EE97F4CC11C4EA7A1FA4B516A5D97

歌词
http://m.kugou.com/app/i/krc.php?cmd=100&keyword=%E5%88%98%E7%8F%82%E7%9F%A3%20-%20%E4%B8%80%E5%B0%98%E6%A2%A6&hash=03E4E73A8EA861FD459E030AC3E665AF&timelength=249000&d=0.07441667594792145

音乐详情-带歌词版本
说明: 获取 音乐详情-带歌词版本

必选参数:

hash : 音乐列表下的 音乐id

接口地址: http://www.kugou.com/yy/index.php?r=play/getdata&hash=CB7EE97F4CC11C4EA7A1FA4B516A5D97

热门搜索列表
说明: 获取 热门搜索列表

必选参数:
plat :开始数
count : 热门搜索关键字返回

接口地址: http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30

音乐搜索
说明: 获取 音乐搜索结果

必选参数:

keyword : 关键字

接口地址:

http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

//logs.js
var app = getApp()
var API_URL = "https://api.douban.com/v2/movie/top250"
Page({
  data: {
    page: 1,
    size: 20,
    title: "数据正在加载中...",
    movie: [],
    loading: true,
    hasMore: true
  },

  onLoad: function() {
    var _this = this
    app.fetchApi(API_URL, 0, function(err, data) {
      console.log(data);
      _this.setData({
        title: data.title,
        movies: data.subjects,
        loading: false
      })
    })
  },
  loadMore: function() {
    var _this = this
    var start = (_this.data.page++)*_this.data.size
    app.fetchApi(API_URL, start, function(err, data) {
      console.log(data);
      if (start) {
        _this.setData({
          title: data.title,
          movies: data.subjects,
          loading: false
        })
      }else{
        console.log("电影已加载完毕。。。");
      }
    })
  }
})

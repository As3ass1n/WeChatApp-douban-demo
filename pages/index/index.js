//logs.js
var app = getApp()
var API_URL = "https://api.douban.com/v2/movie/top250"
Page({
  data: {
    page: 1,
    size: 20,
    title: "数据加载中...",
    movies: [],
    loading: true,
    hasMore: true
  },

  onLoad: function() {
    var _this = this
    console.log(_this.data)
    app.fetchApi(API_URL, 0, function(err, data) {
      _this.setData({
        movies: data.subjects,
        loading: false
      })
    })
  },


  loadMore: function() {
    var _this = this
    var params = {
      start: (_this.data.page++) * _this.data.size,
      count: _this.data.count
    }
    _this.setData({ loading: true })
    console.log(_this.data)
      //fetchApi第一个参数是API接口地址，第二个参数为一个对象(设置start和count)
    app.fetchApi(API_URL, params, function(err, data) {
      if (data.subjects.length) {
        _this.setData({ title: data.title, movies: _this.data.movies.concat(data.subjects), loading: false })
      } else {
        _this.setData({ hasMore: false, loading: false })
      }
    })
  }
})

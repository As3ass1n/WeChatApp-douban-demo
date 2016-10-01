//logs.js
var app = getApp()
var API_URL = "https://api.douban.com/v2/movie/top250"
Page({
  data: {
    page:1,
    size:20,
    title:"数据正在加载中...",
    movie:[],
    loading:true,
    hasMore: true
  },

  onLoad: function () {
    var _this = this
    app.fetchApi(API_URL,function (err, data) {
      console.log(data);
      _this.setData({
        title:data.title,
        movies:data.subjects,
        loading: false
      })
    })
  },
  lower: function () {
    var _this = this
    if(_this.data.hasMore) return
    
    app.fetchApi(API_URL,function (err,data) {
      

      //TODO
      // 上拉加载更多  查看angular中下一页请求的数据方式
    })
  }
})

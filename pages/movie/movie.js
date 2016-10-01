//logs.js
var app = getApp()
var API_URL = "https://api.douban.com/v2/movie/subject/"
Page({
  data: {
    title:"",
    movie:[],
    loading:true
  },

  onLoad: function (params) {
    var _this = this
    console.log(params)
    app.fetchApi(API_URL+params.id,function (err, data) {
      _this.setData({
        title:data.title,
        movie:data,
        loading: false
      })
      wx.setNavigationBarTitle({
        title:_this.data.title
      })
    })
  },
  onReady:function () {
    wx.setNavigationBarTitle({
        title:this.data.title
      })
  }
})

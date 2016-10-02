//logs.js
var app = getApp()
var API_URL = "https://api.douban.com/v2/movie/subject"
Page({
  data: {
    title:"",
    movie:[],
    loading:true
  },

  onLoad: function (params) {
    var _this = this
    console.log(params)
    app.fetchApi(API_URL+"/"+params.id,0,function (err, data) {
      console.log(data)
      _this.setData({
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

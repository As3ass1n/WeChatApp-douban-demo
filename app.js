//app.js
// .js后缀的是脚本文件
App({
	fetchApi: function(url,callback) {
		wx.request({
			url:url,
			data:{},
			header: {"Content-Type":"application/json"},
			success: function (res) {
				callback(null,res.data)
			},
			fail: function (e) {
				callback(e)
			}
		})
	},
	onLaunch:function () {
		console.log("App onLoad")
	},
	onShow: function() {
		console.log("App onShow")
	},
	onHide: function () {
		console.log("App onHide")
	}
})
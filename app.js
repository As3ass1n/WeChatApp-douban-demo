//app.js
// .js后缀的是脚本文件
App({
	fetchApi: function(url,params,callback) {
		wx.request({
			url:url,
			data:params,
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
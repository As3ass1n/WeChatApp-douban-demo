'use strict';
var app = getApp()
Page({
	data:{
		userName:"",
		userAvatar:""
	},
	onLoad:function () {
		var _this = this
		wx.getUserInfo({
			success:function (res) {
				console.log(res.userInfo);
				_this.setData({
					userName:res.userInfo.nickName,
					userAvatar:res.userInfo.avatarUrl
				})
			}
		})
	}
})
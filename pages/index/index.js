// index.js
// 获取应用实例
const app = getApp()

// 引用公共js
var common = require('../../utils/common.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    userLocation: '',
    array: ['张三1', '张三2', '张三3'],
    ints: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onPullDownRefresh() {
    console.log("====>")
  },
  onReachBottom() {

  },
  // 转发事件
  onShareAppMessage(e) {
    // 更新数据
    this.setData({
      motto: "Hello LiAo"
    })

    return {
      title: "LiAo is WeChat"
    }
  },
  onTabItemTap(e) {
    console.log(e);
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          userLocation: res.userLocation
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 单击事件
  changeData() {
    common.sayHello("==>")
  },
  mtTap(e){
    console.log(e)
  },
  tap1(){
    console.log("====>A")
  },
  tap2(){
    console.log("====>B")
  },
  tap3(){
    console.log("====>C")
  }
})
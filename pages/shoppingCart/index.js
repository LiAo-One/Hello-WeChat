// pages/shoppingCart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goTop(e) {
    this.setData({
      topNum: 0
    })

    console.log(this.data.topNum)
  },

  // 滚动到顶部 和 左边触发事件
  toTopLeft(e) {
    console.log(e)
    console.log("滚动到了顶部")
  },

  // 滚动到底部 右边触发事件
  toBotRight(e) {
    console.log(e)
    console.log("滚动到了底部")
  },
  // 滚动事件
  scrollEvent(e) {
    console.log(e);
    console.log("滚事件")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
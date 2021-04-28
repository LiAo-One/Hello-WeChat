// pages/shoppingCart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconType: ['success', 'success-no-circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'cleal'],
    iconColor: ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'],
    icinSize: [20, 25, 30, 35, 40, 45, 50],
    nodes: '<div style="line-height: 60px; color: red;">Hello World!</div>',
    nodes01: [{
      name: 'div',
      attrs: {
        style: 'line-height: 30px; color: blue; font-weigth: bold',
      },
      children: [{
        type: 'text',
        text: 'Hello World'
      }]
    }],
    nodes02: [{
      name: 'div',
      attrs: {
        class: 'myStyle'
      },
      children: [{
        type: 'text',
        text: 'Hello World'
      }]
    }],
    selector: '',
    selectItems: ['苹果', '香蕉', '橘子']
  },
  selectorChange: function (e) {

    console.log(e)
    this.setData({
      selector: e.detail.value
    })
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
  // 多选框选中事件
  getUserDetail: function (e) {
    console.log(e.detail.userInfo)
    console.log(e)
  },
  getInput: function (e) {
    console.log("输入触发事件===>" + e.detail.value)
  },
  getBlur: function (e) {
    console.log("失去焦点触发事件===>" + e.detail.value)
  },
  onSubmit: function (e) {
    console.log(e)
  },
  onReset: function (e) {
    console.log(e)
  },
  checkBoxChange: function (e) {
    // 多选框的选中数据集合
    console.log(e.detail.value)
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
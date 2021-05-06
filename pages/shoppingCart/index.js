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
    selectItems: ['苹果', '香蕉', '橘子'],
    multiSelectorItems: [
      ['蛋花汤', '苹果汤'],
      ['鸡排', '牛排', '鱼排'],
      ['苹果', '香蕉', '橘子']
    ],
    // 存放多列选择的结果值
    multiSelector: '',
    // 存放选择事件值
    time: '',
    // 存放日期选择时间值
    date: '',
    // 存放省份的值
    region: '',
    soup: ['a', 'b', 'c'],
    maincourse: ['aa', 'bb', 'cc'],
    dessert: ['aaa', 'bbb', 'ccc'],
    value: [1, 1, 1],
    menu: []
  },
  // switch 绑定事件
  switchBindChange(e) {
    console.log(e.detail.value)
  },
  // 滑动停止事件
  sliderBindChanging(e) {
    console.log(e.detail.value)
  },
  // 滑动事件
  sliderBindChange(e) {
    console.log(e.detail.value)
  },
  // 单选按钮事件
  radioGroupChange(e) {
    console.log(e.detail.value)
  },
  // 页面嵌入滚动器 滚动事件
  pickerViewChange(e) {
    let indexs = e.detail.value;
    let menu = [];

    menu.push(this.data.soup[indexs[0]])
    menu.push(this.data.maincourse[indexs[1]])
    menu.push(this.data.dessert[indexs[2]])

    this.setData({
      menu: menu
    });
  },
  // 省份选择触发事件
  regionChange(e) {
    let value = e.detail.value;
    this.setData({
      region: value
    })
  },
  // 日期选择器
  dateChange(e) {
    let value = e.detail.value;
    this.setData({
      date: value
    })
  },
  // 时间选择事件
  timeChange(e) {
    let value = e.detail.value;

    this.setData({
      time: value
    })
  },
  // 多列选择器触发事件
  multiSelectorChange(e) {
    // 获取选择下标的集合
    let arrayIndex = e.detail.value;

    // 获取数据
    let array = this.data.multiSelectorItems;
    // 用于存放选中的元素集合
    let valye = new Array();
    for (let i = 0; i < arrayIndex.length; i++) {
      // 获取到对应列的下标
      let k = arrayIndex[i];
      // 获取到对应列下标值
      let v = array[i][k];
      // 添加进集合
      valye.push(v);
    }

    this.setData({
      multiSelector: valye
    })
  },
  // 单列选择器触发事件
  selectorChange: function (e) {

    var value = this.data.selectItems[e.detail.value];
    this.setData({

      selector: value
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
  onLoad: function (options) {},

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
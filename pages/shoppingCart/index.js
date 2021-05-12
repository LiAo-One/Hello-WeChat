// pages/shoppingCart/index.js
import request from '../../utils/network.js'
Page({

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext();

    this.rm = wx.getRecorderManager()
    this.rm.onStop((res) => {
      const audioCtx = wx.createInnerAudioContext();
      console.log(res)
      console.log(audioCtx)
      audioCtx.src = res.tempFilePath;
      audioCtx.play();
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.vedioCtx = wx.createVideoContext('myVedio')

  },

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
    menu: [],
    poster: 'https://bkimg.cdn.bcebos.com/pic/902397dda144ad345982f081c2e91bf431adcbef2f28?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
    name: '星辰大海',
    author: '黄霄云',
    src: 'http://music.163.com/song/media/outer/url?id=1811921555.mp3',
    videoSrc: 'http://1252596634.vod2.myqcloud.com/52afcb8dvodcq1252596634/77cc4d725285890818077040768/U0ZqA1QnqdQA.mp4',
    danmuList: [],
    danmuData: [{
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 1
      },
      {
        text: '都几点了，你才来',
        color: '#45326E',
        time: 2
      },
      {
        text: '都几点了，你才来',
        color: '#45326E',
        time: 3
      },
      {
        text: '都几点了，你才来',
        color: '#45326E',
        time: 4
      },
      {
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 5
      },
      {
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 6
      },
      {
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 7
      },
    ],
    phohSrc: '',
    videoSrcs: '',

    // 地图组件
    markers: [{
      id: "31968427",
      latitude: '31.968427',
      longitude: '118.798891',
      title: '南京南站',
      rotate: '25',
      alpha: '0.2',
      width: '100rpx',
      height: '100rpx',
      callout: {
        content: '你好',
        color: '#45326E'
      },
      label: {
        content: '123',
      },


    }, {
      id: "32087283",
      latitude: '32.087283',
      longitude: '118.797635',
      title: '南京站'
    }],
    polyline: {
      points: [{
          latitude: 31.968768,
          longitude: 118.798346
        },
        {
          latitude: 31.963786,
          longitude: 118.796436
        },
        {
          latitude: 31.955846,
          longitude: 118.794812
        }
      ],
      color: '#45326E'
    },
    circles: {
      latitude: 31.968768,
      longitude: 118.798346,
      color: "45326Eaa",
      fillColor: '#ffffffaa',
      radius: '50'
    },
    chooseImage: ''
  },
  // 结束录音
  stop: function () {
    
  },
  // 开始录音
  start: function () {

  },
  // 选择图片
  chooseImage: function () {
    var this_ = this;
    wx.chooseImage({
      count: 2,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        this_.data.chooseImage = res.tempFilePaths[0];
        this_.setData({
          chooseImage: res.tempFilePaths[0]
        })
      }
    })
  },
  // 获取图片信息
  getImageInfo: function () {
    let this_ = this;
    wx.getImageInfo({
      src: this_.data.chooseImage,
      success: function (res) {
        console.log(res);
        wx.showToast({
          icon: 'no',
          title: res.path,
        })
      }
    })
  },
  // 保存图片
  saveImage: function () {
    var this_ = this;
    wx.saveImageToPhotosAlbum({
      filePath: this_.data.chooseImage,
      success: function (res) {
        console.log(res);
        wx.showToast({
          title: "ok",
        })
      }
    })
  },
  // 预览图片
  previewImage: function () {
    let this_ = this;
    wx.previewImage({
      urls: [this_.data.chooseImage],
    })
  },
  // 发送请求
  baiduSearch: function () {
    request({
      url: 't-sczyxt-user-netgate/user_trends',
      method: 'POST',
      port: 8967,
      data: {},
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
    }).then((res) => {
      console.log(res);
    })
  },
  // 拍照
  takePhoto: function () {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          phohSrc: res.tempImagePath
        })
      }
    })
  },
  //录像
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      }
    })
  },
  // 结束录像 
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  // 关闭弹幕
  clerDanmu: function () {
    this.data.danmuList = null;
    this.setData({
      danmuList: null
    })
  },
  // 开启弹幕
  openDanmu: function () {
    this.data.danmuList = this.data.danmuData;
    this.setData({
      danmuList: this.data.danmuData
    })
  },
  // 添加弹幕
  addDanmu: function () {
    var danmu = [{
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 1
      },
      {
        text: '都几点了，你才来',
        color: '#45326E',
        time: 2
      },
      {
        text: '都几点了，你才来',
        color: '#45326E',
        time: 3
      },
      {
        text: '都几点了，你才来',
        color: '#45326E',
        time: 4
      },
      {
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 5
      },
      {
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 6
      },
      {
        text: '来都来了，看完就回去了',
        color: '#45326E',
        time: 7
      },
    ]

    this.data.danmuList = danmu;

    // 绑定页面数据
    this.setData({
      danmuList: danmu
    })

    console.log(this.vedioCtx)

  },
  // 播放
  audioPlay: function () {
    this.audioCtx.play()
  },
  // 暂停
  audioPause: function () {
    this.audioCtx.pause()
  },
  // 设置当前播放时间为14秒
  audio14: function () {
    this.audioCtx.play()
    this.audioCtx.seek(175)
  },
  // 重新播放
  audioStart: function () {
    this.audioCtx.seek(0)
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
// 随机生成颜色
function getRandomColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }

  return '#' + rgb.join('');
}  
// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   * http://1252596634.vod2.myqcloud.com/52afcb8dvodcq1252596634/77cc4d725285890818077040768/U0ZqA1QnqdQA.mp4
   */
  data: {
    videoSrc: '',

  },
  inputeValue: '',

  onLoad: function (options) {
    this.bgAudioManager = wx.getBackgroundAudioManager();
    this.videoContext = wx.createVideoContext('myVideo')
  },

  // 更新弹幕文本
  bindInputBlur: function (e) {
    this.inputeValue = e.detail.value;
  },
  // 发送弹幕
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputeValue,
      color: getRandomColor()
    })
  },
  // 保存视频
  saveVideo: function () {
    let this_ = this;
    wx.saveVideoToPhotosAlbum({
      filePath: this_.data.videoSrc,
      success: function (res) {
        wx.showToast({
          title: '保存成功',
        })
      }
    })
  },
  // 暂停播放
  voideoPause: function () {
    this.videoContext.pause();
  },
  voideoPlay: function () {
    this.videoContext.play();
  },
  // 选择视频
  chooseVideo: function () {
    let this_ = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        this_.setData({
          videoSrc: res.tempFilePath
        })
      }
    })
  },

  // 初始化播放音频
  initialAudio: function () {
    let bgAudioManager = this.bgAudioManager;
    bgAudioManager.title = '星辰大海',
      bgAudioManager.epname = '此时此刻',
      bgAudioManager.singer = '黄霄云',
      bgAudioManager.coverImgUrl = 'https://bkimg.cdn.bcebos.com/pic/902397dda144ad345982f081c2e91bf431adcbef2f28?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      bgAudioManager.src = 'http://music.163.com/song/media/outer/url?id=1811921555.mp3'
  },
  play: function () {
    this.initialAudio();
    this.bgAudioManager.play();
    this.bgAudioManager.onTimeUpdate(e => {
      console.log(e)
    })
    this.bgAudioManager.onPause(function () {
      console.log("暂停事件")
    })
  },
  pause: function () {
    this.bgAudioManager.pause();
  },
  /**
   * 生命周期函数--监听页面加载
   */
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
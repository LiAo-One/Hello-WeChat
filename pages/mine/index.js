// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onLoad: function (options) {
    this.bgAudioManager = wx.getBackgroundAudioManager();

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
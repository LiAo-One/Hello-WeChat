export default function request(option) {
  // 清空创建时间
  if (option.data.createTime) {
    option.data.createTime = '';
  }
  // 清空修改时间
  if (option.data.updateTime) {
    option.data.updateTime = '';
  }
  // 清空逻辑删除
  if (option.data.deleted) {
    option.data.deleted = '';
  }
  // 清空乐观锁
  if (option.data.version) {
    option.data.version = '';
  }
  // 端口号
  var port = 8967;

  if (option.port != undefined) {
    port = option.port;
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://zhny.longyuanspace.com:" + port + "/" + option.url,
      method: option.method || 'GET',
      data: option.data || {},
      dataType: option.dataType || 'json',
      header: option.header,
      success: resolve,
      fail: reject
    })
  })
}
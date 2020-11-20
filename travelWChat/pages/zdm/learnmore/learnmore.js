// pages/zdm/learnmore/learnmore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      {
        "classname": 'demo-text-1',
        "imageurl":'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603460330996&di=f25d1ba23b72afff2d967209bb775b25&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F371736%2Ff%2F6174414.jpg'
      },
      {
        "classname": 'demo-text-2',
        "imageurl":'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603460330996&di=f25d1ba23b72afff2d967209bb775b25&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F371736%2Ff%2F6174414.jpg'
      },
      {
        "classname": 'demo-text-3',
        "imageurl":'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603460330996&di=f25d1ba23b72afff2d967209bb775b25&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F371736%2Ff%2F6174414.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    content:true,
    previousMargin: 0,
    nextMargin: 0
  },
  /**
   * 文字的收起和展开函数
   */
  content:function(){
    // 取反就好
    var value = !this.data.content;
    this.setData({
      content: value
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  /**
   * 跳转页面到全部都是图片的页面
   */
  tomoreimage:function(){
    wx.navigateTo({
      url: './moreimage/moreimage',
    })
  },
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
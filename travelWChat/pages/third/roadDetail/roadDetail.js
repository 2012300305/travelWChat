// pages/third/roadDetail/roadDetail.js
// pages/zdm/learnmore/learnmore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      {
        "classname": 'demo-text-1',
        "imageurl":'../../../images/thirdPage/三星堆.jpg'
      },
      {
        "classname": 'demo-text-2',
        "imageurl":'../../../images/thirdPage/三星堆轮播图.jpg'
      },
      {
        "classname": 'demo-text-3',
        "imageurl":'../../../images/thirdPage/三星堆序厅.jpg'
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
// pages/zdm/zdmDetail/zdmDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../../images/secondPage/熊猫1.jpg',
      '../../../images/secondPage/熊猫2.jpg',
      '../../../images/secondPage/熊猫3.jpg'
    ],
    show: true
  },
  change(e) {
    console.log('current index has changed', e.detail)
  },
  hideImage:function(){
    wx.switchTab({
      url: '../listview',
    })
  },
  /*hide() {
    console.log('component hide')
    setTimeout(() => {
        console.log('component show')
        this.setData({
            show: true
        })
    }, 1000)
  },*/
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
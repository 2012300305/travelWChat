// pages/second/third.js
const app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    toView: 'green',
    loading: true,
    color: '#000',
    background: '#ededed',
    show: true,
    animated: false,
    /**
     * 下面是新加的内容
     */
    background: [
      {
        "classname": 'demo-text-1',
        "imageurl":'../../images/thirdPage/轮播图.jpg'
      },
      {
        "classname": 'demo-text-2',
        "imageurl":'../../images/thirdPage/三星堆轮播图.jpg'
      },
      {
        "classname": 'demo-text-3',
        "imageurl":'../../images/thirdPage/长海轮播图.jpg'
      }
    ],
    indicatorDots: true,
    vertical: false,/**这个值的作用是滚动的时候下面三个点的位置，如果是true的话就是竖着在右边，如果是false的话就会在下面 */
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  roadDetail: function () {
    wx.navigateTo({
      url: '../third/roadDetail/roadDetail',
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    // var that = this
  	// //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    //   that.update()
    // })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  onReady: function(){
    // console.log('onReady');
  },
  onShow: function(){
    // console.log('onShow');
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  onHide: function(){
    // console.log('onHide');
  },
  onUnload(){
    // console.log('onUnload');
  }
})

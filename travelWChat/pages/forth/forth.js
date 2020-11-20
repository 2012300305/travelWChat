// pages/forth/forth.js
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
    isHide:'none'
  },
  userLogin:function() {
    if(this.data.isHide==='none'){
      this.setData({
        isHide: 'block'
      })
    }
  },
  bindGetUserInfo(event) {
    console.log(event.detail)
  },
  //事件处理函数
  // bindViewTap: function() {
  //   /**
  //    * 路由处理
  //    *
  //    *  1. navigationTo    保留当前页面，跳转到指定页面
  //    *  2. redirectTo      不保留当前页面，跳转到指定页面
  //    *  3. navigationBack  关闭当前页面，回退前一页面
  //    */
  //   console.log('点击了页面')
  //   wx.navigateTo({
  //     url: '../cepin/index'
  //   })
  // },
  /*upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0,
      scrollLeft: 0
    })
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200,
          scrollLeft: (i + 1) * 200
        })
        console.log(scrollTop)
        break
      }
    }
  },
  tapMove() {
    this.setData({
     scrollTop: this.data.scrollTop + 10,
     scrollLeft: this.data.scrollLeft + 10
   })
  },*/
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
    //this.setData({
     // search: this.search.bind(this)
  //})
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
        selected: 3
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

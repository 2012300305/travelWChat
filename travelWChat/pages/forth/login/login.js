// pages/zdm/login/login.js
var globalOpenId = getApp().globalData.openId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')//获取用户信息是否在当前版本可用
  },
  properties: {
    isHide: {
      type:String,
      value:'block'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //查看是否授权
    wx.getSetting({
      success:function(res){
        if(res.authSetting['scope.userInfo']){
          console.log("用户授权了");
          console.log(res.authSetting['scope.userInfo'])
        } else {
          //用户没有授权
          console.log("用户没有授权");
        }
      }
    })
  },
  bindGetUserInfo:function(res){
    if(res.detail.userInfo){
      var that = this;
      console.log("用户的信息如下：");
      console.log(res.detail.userInfo);
      //授权之后通过改变isHide的值，让实现页面显示出来，把授权页面隐藏起来
      this.setData({
        isHide:'none'
      });
      requestUrl.requestUrl({//将用户信息传给后台数据库
        url: "/QXEV/xxx/xxx",
        params: {
          openId: globalOpenId,//用户的唯一标识
          nickName: e.detail.userInfo.nickName,//微信昵称
          avatarUrl: e.detail.userInfo.avatarUrl,//微信头像
          province: e.detail.userInfo.province,//用户注册的省
          city: e.detail.userInfo.city//用户注册的市
        },
        method: "post",
      })
        .then((data) => {//then接收一个参数，是函数，并且会拿到我们在requestUrl中调用resolve时传的的参数
          console.log("允许授权了");
        })
        .catch((errorMsg) => {
          console.log(errorMsg)
        })

    } else {
      //用户拒绝按钮
      wx.showModal({
        title:'警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入',
        showCancel:false,
        confirmText:'返回授权',
        success:function(res){
          //用户没有授权成功，不需要改变isHide的值
          if(res.confirm){
            console.log('用户点击了“返回授权”');
          }
        }
      })
    }
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
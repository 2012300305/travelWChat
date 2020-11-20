//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    switchViewActive: {},
    isPlay:true
  },
  //控制音乐播放
  controlMusic: function(){
    if(this.data.isPlay){
      this.audioCtx.pause();
      this.setData({
        isPlay: false
      });
    } else{
      this.audioCtx.play();
      this.setData({
        isPlay: true
      });
    }
  },
  onLoad: function () {
  },
  onReady: function(){  
    this.audioCtx = wx.createAudioContext('myAudio')
    //这里的音乐链接需要更改
    this.audioCtx.setSrc('https://m801.music.126.net/20201018181149/641a913dac89fc9e4040fa4039907135/jdyyaac/0059/015b/0359/73cbe287e2610e5758de43ec9918fa51.m4a')
    this.audioCtx.play()
  },
  onShow: function(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onHide: function(){
  },
  onUnload(){
  }
})

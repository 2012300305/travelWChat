Component({
  data: {
    selected: 0,
    color: "#AAAAAA",
    selectedColor: "#BB5500",
    list: [{
      pagePath: "/pages/index/index",
      text: "首页",
      iconPath: "../icon/images/首页.png",
      selectedIconPath: "",
      isSpecial: false
    },
    {
      pagePath: "/pages/zdm/listview",
      text: "搜索",
      iconPath: "../icon/images/搜索.png",
      selectedIconPath: "",
      isSpecial: false
    },
    {
      pagePath: "/pages/third/third",
      text: "商城",
      iconPath: "../icon/images/商城.png",
      selectedIconPath: "",
      isSpecial: false
    },
    {
      pagePath: "/pages/forth/forth",
      text: "我的",
      iconPath: "../icon/images/个人.png",
      selectedIconPath: "",
      isSpecial: false
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      const idx = e.currentTarget.dataset.index
      if (this.data.list[idx].isSpecial) {
        wx.navigateTo({ url })
      }
      else {
        wx.switchTab({ url })
        this.setData({
          selected: data.index
        })
        console.log(data.index)
      }
    }
  }
})
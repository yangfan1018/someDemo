//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    chooseId:{},
    emojiDetail:{},
    emojiImgList: {},
    emojiUrlList:{}
  },
  //事件处理函数
  previewImage: function(event) {
    var chooseUrl="http://www.hotkidclub.com/emoji/images/43/"+event.target.dataset.hi+".gif"
    console.log(event)
    wx.previewImage({
      current: chooseUrl,
      urls:this.data.emojiUrlList
    })
  },
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    that.setData({
      chooseId:options.id
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.request({
      url: 'http://www.hotkidclub.com/emoji/select.ctrl', //仅为示例，并非真实的接口地址
      data: {
        code: that.data.chooseId
      },
      method:"POST",
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        var emojiImgList=new Array;
        var urlList=new Array;
        var code=that.data.chooseId;
        for(var i=0;i<res.data.object.quantity;i++){
          var url="www.hotkidclub.com/emoji/images/"+code+"/"+(i+1)+".gif";
          emojiImgList.push({
            "key":i,
            "url":url
          })
          urlList[i]="http://www.hotkidclub.com/emoji/images/"+code+"/"+(i+1)+".gif";
        }
        that.setData({
          emojiDetail:res.data.object,
          emojiImgList:emojiImgList,
          emojiUrlList:urlList
        })
      }
    })
  }
})

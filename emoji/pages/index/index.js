//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    emojiList: {},
    page:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    getemojiList("0",function(e){
      that.setData({
          emojiList:e
        })
    })
  },

  onReachBottom: function( e ) {
    this.setData( {
      page: this.data.page + 1
    })

    getemojiList( this.data.page ,function(e){
      var emojiList=that.data.emojiList;
        if(emojiList.length){
          for(x in e){
            emojiList.push(x)
          }
        }else{
          emojiList=e
        }
        that.setData({
          emojiList:emojiList
        })
    })
  }
  
})
function getemojiList(page,addList){
    wx.request({
      url: 'http://www.hotkidclub.com/emoji/list.ctrl', //仅为示例，并非真实的接口地址
      data: {
        page: page
      },
      method:"POST",
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        addList(res.data.object)
      }
    })
  }


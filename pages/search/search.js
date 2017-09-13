// pages/search/search.js
const API_URL = 'https://api.douban.com/v2/movie/search?q='
Page({
    data: {
        movies:[]
    },
    search(e) {
        if (!e.detail.value) {
            return;
        }
        wx.showLoading({
            title: '加载中',
        }),
            wx.request({
            url: API_URL + e.detail.value,
                data: {},
                header: {
                    'content-type': 'json'
                },
                success: (res) => {
                    wx.hideLoading()
                    console.log(res.data)
                    this.setData({
                        movies: res.data.subjects
                    })
                    
                }
            })

    }
})
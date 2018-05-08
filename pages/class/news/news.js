// pages/class/news/news.js
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        name: '最新通知',
        projects: [
          {
            title: '题目',
            details: '要求至少写在作业本上的有六道3.17 3.20 3.21 3.24 3.26 3.33其他的也可以写在作业本上，也可以不用。', time: '2018-05-04 08:21 '
          },
          {
            title: '汇编作业',
            details: '要求至少写在作业本上的有六道3.17 3.20 3.21 3.24 3.26 3.33其他的也可以写在作业本上，也可以不用。',
            time: '2018-05-04 08:21 '
          },
          {
            title: '英语作业', time: '', details: ''
          },
          {
            title: '以太网帧', time: '', details: ''
          }
        ]
      },
      {
        name: '作业通知',
        projects: [
          {
            title: 'Week9',
            details: "Description.",
            submit: 0,
            time: '2018-05-02',
          }
        ]
      },
      {
        name: '实验通知',
        projects: [
          {
            title: '发士大夫'
          },
          {
            title: '汇编作业'
          },
          {
            title: '英语作业'
          },
          {
            title: '以太网帧'
          }
        ]
      },
      {
        name: '小测通知',
        projects: [
          {
            title: '发士大夫'
          },
          {
            title: '汇编作业'
          },
          {
            title: '英语作业'
          },
          {
            title: '以太网帧'
          }
        ]
      },
      {
        name: '上层通知',
        projects: [
          {
            title: '汇编作业',
            details: '要求至少写在作业本上的有六道3.17 3.20 3.21 3.24 3.26 3.33其他的也可以写在作业本上，也可以不用。',
            time: '2018-05-04 08:21 '
          },
          {
            title: '汇编作业',
            details: '要求至少写在作业本上的有六道3.17 3.20 3.21 3.24 3.26 3.33其他的也可以写在作业本上，也可以不用。',
            time: '2018-05-04 08:21 '
          },

          {
            title: '汇编作业'
          },
          {
            title: '英语作业'
          },
          {
            title: '以太网帧'
          }
        ]
      },
    ],
    activeIndex: 0,
    submitted: 0,
    total: 0,
    toView: 'a0',
    scrollTop: 0,
    showModalStatus: false,
    currentType: 0,
    currentIndex: 0,
  },
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      activeIndex: index,
      toView: 'a' + index,
    })
  },
  scroll: function (e) {
    var dis = e.detail.scrollTop;
    var disItems = new Array();
    for (let i = 0; i < this.data.listData.length; i++) {
      disItems[i] = 91 * (this.data.listData[i].projects.length) + 20;
    }
    if (dis > 0 && dis < disItems[0]) {
      this.setData({
        activeIndex: 0,
      })
    }
    if (dis > disItems[0] && dis < disItems[0] + disItems[1]) {
      this.setData({
        activeIndex: 1,
      })
    }
    if (dis > disItems[0] + disItems[1] && dis < disItems[0] + disItems[1] + disItems[2]) {
      this.setData({
        activeIndex: 2,
      })
    }
    if (dis > disItems[0] + disItems[1] + disItems[2] && dis < disItems[0] + disItems[1] + disItems[2] + disItems[3]) {
      this.setData({
        activeIndex: 3,
      })
    }
    if (dis > disItems[0] + disItems[1] + disItems[2] + disItems[3] && dis < disItems[0] + disItems[1] + disItems[2] + disItems[3] + disItems[4]) {
      this.setData({
        activeIndex: 4,
      })
    }
    if (dis > disItems[0] + disItems[1] + disItems[2] + disItems[3] + disItems[4] && dis < disItems[0] + disItems[1] + disItems[2] + disItems[3] + disItems[4] + disItems[5]) {
      this.setData({
        activeIndex: 5,
      })
    }
  },
  selectInfo: function (e) {
    var Type = e.currentTarget.dataset.type;
    var index = e.currentTarget.dataset.index;
    this.setData({
      showModalStatus: !this.data.showModalStatus,
      currentType: Type,
      currentIndex: index
    });
  }
})
import Vue from 'vue'
import { http } from './request'

const TAB_PAGES = [

]

Vue.prototype.$go = (url, type = 'navigate', opt = {}) => {
  url = `${url}`
  if (url.startsWith('http')) {
    url = `/pages/h5/index?src=${encodeURIComponent(url)}`
  }
  if (TAB_PAGES.findIndex(i => i.startsWith(url))>-1) {
    type = 'switch'
  }
  switch (type) {
    case 'navigate':
      uni.navigateTo({
        url,
      })
      break
    case 'relaunch':
      uni.reLaunch({
        url,
      })
      break
    case 'redirect':
      uni.redirectTo({
        url,
      })
      break
    case 'switch':
      uni.switchTab({
        url,
      })
      break
    case 'back':
      let n = getCurrentPages().length
      if (n == 1) {
        uni.switchTab({
          url: '/pages/home/index'
        })
      } else {
        uni.navigateBack({
          delta: url,
        })
      }
      
      break
    // case 'single':
    //   let urls = getCurrentPages().map((i) => i.route)
    //   let inx = urls.findIndex((i) => i == getRoute(url))
    //   if (inx >= 0) {
    //     uni.navigateBack({
    //       delta: urls.length - 1 - inx,
    //     })
    //   } else {
    //     uni.navigateTo({ url })
    //   }
    //   break
    case 'mp':
      uni.navigateToMiniProgram({
        appId: opt.appId,
        path: url,
        extraData: opt.extraData,
        success: opt.success,
        fail: opt.fail,
      })
      break
  }
}

Vue.prototype.$showModal = ({
  title = '温馨提示',
  content,
  successCb,
  failCb,
  showCancel = false,
  confirmText = '确定',
  cancelText='取消',
}) => {
  uni.showModal({
    title,
    content,
    showCancel,
    confirmText,
    cancelText,
    success: (r) => {
      if (r.confirm && successCb) {
        successCb()
      }
      if (failCb && r.cancel) {
        failCb()
      }
    }
  })
}

Vue.prototype.$showLoading = (title='加载中...') => {
  uni.showLoading({
    title,
    mask: true,
  })
}

Vue.prototype.$hideLoading = (_) => {
  uni.hideLoading()
}

Vue.prototype.$setStorage = (key, val) => {
  try {
    uni.setStorageSync(key, val)
  } catch (e) {
    uni.showModal({
      title: '缓存api出错',
      content: e.toString(),
      showCancel: false,
      confirmText: '去反馈',
    })
  }
}

Vue.prototype.$getStorage = (key, defaultVal) => {
  try {
    let val = uni.getStorageSync(key)
    return val ? val : defaultVal
  } catch (e) {
    uni.showModal({
      title: '缓存api出错',
      content: e.toString(),
      showCancel: false,
      confirmText: '去反馈',
    })
  }
}

Vue.prototype.$get = (url, data, showErrToast = true) =>
  http(url, data, 'get', showErrToast)
Vue.prototype.$post = (url, data, showErrToast = true) =>
  http(url, data, 'post', showErrToast)
Vue.prototype.$put = (url, data, showErrToast = true) =>
  http(url, data, 'put', showErrToast)

Vue.prototype.$del = (url, data, showErrToast = true) =>
  http(url, data, 'delete', showErrToast)

Vue.prototype.$toast = (title = '', icon = 'none') =>
  uni.showToast({
    title,
    icon,
  })

Vue.prototype.$setTitle = (title='81号兵站') => wx.setNavigationBarTitle({
  title
})

Vue.prototype.$hideShare = _ => wx.hideShareMenu()

Vue.prototype.$setBadge = function (text, index = 2) {
  if(!text) {
    wx.removeTabBarBadge({index})
  } else {
    wx.setTabBarBadge({
      index,
      text: `${text}`
    })
  }
}

let throttleFlag = false
Vue.prototype.$throttle = (func, wait = 2000, immediate = false) => {
  if (throttleFlag) {
    return
  }
  if (immediate) {
    func()
    throttleFlag = true
    setTimeout( _ => {
      throttleFlag = false
    } , wait)
  } else {
    throttleFlag = true
    setTimeout( _ => {
      throttleFlag = false
      finc()
    } , wait)
  }
}
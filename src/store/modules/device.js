export default {
  namespaced: true,
  state: {
    statusBarHeight: 20,
    navBarHeight: 60,
    navBarPadding: '24px 107px 4px 10px',
    navBarContentHeight: 32,
    isIponeX: false,
  },
  mutations: {
    setStatusBarHeight(state, val) {
      state.statusBarHeight = val
    },
    setNavBarHeight(state, val) {
      state.navBarHeight = val
    },
    setNavBarPadding(state, val) {
      state.navBarPadding = val
    },
    setNavBarContentHeight(state, val) {
      state.navBarContentHeight = val
    },
    setIsIphoneX(state, val) {
      state.isIponeX = val
    },
  },
  actions:{
    setDeviceInfo({commit}) {
      const info = uni.getSystemInfoSync()
      const menu = uni.getMenuButtonBoundingClientRect()

      commit('setIsIphoneX', info.model.indexOf('iPhone X') > -1)
      commit('setStatusBarHeight', info.statusBarHeight)
      commit('setNavBarHeight', menu.bottom + menu.top - info.statusBarHeight)

      let paddingY = menu.top - info.statusBarHeight
      let paddingL = info.windowWidth - menu.right
      let paddingR =  2 * paddingL + menu.width

      commit('setNavBarPadding', `${paddingY + info.statusBarHeight}px ${paddingR}px ${paddingY}px ${paddingL}px`)
      commit('setNavBarContentHeight', menu.height)
    }
  }
}
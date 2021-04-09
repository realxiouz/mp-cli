import {http} from '@/utils/request'
export default {
  namespaced: true,
  state: {
    token: '',
    info: {
      name: '还未登录',
      avatar: 'http://static.81hbz.com/static/img/unlogin.png',
      is_soldier: 0,
      uid: '',
      credit: 0,
      tel: '',
      sex: 0,
      birthday:''
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setInfo(state, info) {
      state.info = info
    },
  },
  actions:{
    updateInfo({commit}) {
      return new Promise((resolve, reject) => {
        http('/user/index', null, 'get')
          .then(r => {
            commit('setInfo', r.data)
            commit('setInviteCode', r.data.inviteCode)
            console.log('设置code---')
            console.log(r.data.inviteCode)
            resolve(r.data)
          })
          .catch(e => {
            reject(e)
          })
      })
    },

    getVipShareInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        if (state.vipShareImgs.length) {
          resolve('ok')
        } else {
          http('/share/vipPost', null, 'get')
            .then(r => {
              let { img, cover, title} = r.data
              commit('setVipShareImgs', img)
              commit('setVipShareTitle', title)
              commit('setVipShareCover', cover)
              resolve('ok')
            })
            .catch(e => {
              reject(e)
            })
        }
      })
    }
  }
}
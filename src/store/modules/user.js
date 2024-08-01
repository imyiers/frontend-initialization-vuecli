import { userLogin } from '@/api/user'
import { defineStore } from 'pinia'

const useUserStore = defineStore('app-user', ({
  state:() => {
    return {
      // 用户基础资料
      userInfo: {},
      // 用户权限信息 '[*:*:*]'
      userPermission: [],
      // 用户身份信息 'user|super'
      userType: undefined,
      // 用户Token信息
      userToken: {
        accessToken: undefined, // Token
        refreshToken: undefined, // 刷新Token
        expiresIn: undefined // 过期时间
      }
    }
  },
  getters: {

  },
  actions: {
    /**
     * 登录
     * @param {object} loginInfo 
     */
    async login(loginInfo) {
      const data = await userLogin(loginInfo)
      this.userInfo = data.userInfo
      this.userPermission = data.common.permission
      this.userType = data.common.userType
      this.userToken = {
        accessToken: data.token?.accessToken,
        refreshToken: data.token?.refreshToken,
        expiresIn: data.token?.expiresIn
      }
    },

    /**
     * 注销
     */
    async logout() {
      this.userInfo = {}
      this.userPermission = []
      this.userType = undefined
      this.userToken = {}
    }
  },
  persist: {
    storage: localStorage,
    path: []
  }
}))

export default useUserStore
import { defineStore } from 'pinia'

const useUserStore = defineStore('app-user', ({
  state:() => {
    return {
      // 用户基础资料
      userInfo: {},
      // 用户权限信息 '*:*:*'
      userPermission: undefined,
      // 用户身份信息 'user|super'
      userType: undefined,
    }
  },
  getters: {

  },
  actions: {

  },
  persist: {
    storage: localStorage,
    path: []
  }
}))

export default useUserStore
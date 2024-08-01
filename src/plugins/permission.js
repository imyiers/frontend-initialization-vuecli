/**
 * 用户权限判断
 * 
 * @fork by 'fantastic-admin -> https://github.com/fantastic-admin'
 */

import { storeToRefs } from 'pinia'

import globalConfig from "@/config";
import { userStore } from "@/store";

export default function authPermission() {
  function hasPermission(permission) {
    const user = userStore()
    const { userPermission } = storeToRefs(user)
    if (globalConfig.system.enablePermission) {
      return userPermission.includes(permission)
    } else {
      return true
    }
  }

  function auth(value) {
    let auth
    if (typeof value === 'string') {
      auth = value !== '' ? hasPermission(value) : true
    } else {
      auth = value.length > 0 ? value.some(item => hasPermission(item)) : true
    }
    return auth
  }

  function authAll(value) {
    return value.length > 0 ? value.every(item => hasPermission(item)) : true
  }

  return {
    auth,
    authAll
  }
}
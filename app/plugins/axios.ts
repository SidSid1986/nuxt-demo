/*
 * @Author: Sid Li
 * @Date: 2026-02-25 14:05:12
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-25 17:11:48
 * @FilePath: \nuxt-demo\app\plugins\axios.ts
 * @Description: 
 */
 

// plugins/axios.ts（Nuxt 会自动加载 plugins 目录下的文件）
export default defineNuxtPlugin(() => {
  // 创建全局的 $apiFetch 实例，内置 Token 拦截器
  const apiFetch = $fetch.create({
    baseURL: '/api', // 基础路径，后续请求可以省略 /api
    // 请求拦截：自动添加 Token 到请求头
    onRequest({ options }) {
      // 从 Cookie 中获取 Token
      const token = useCookie('auth_token').value
      if (token) {
        // 初始化 headers（避免 undefined）
        options.headers = options.headers || new Headers()
        // 把 Token 加到请求头（后端常用 Bearer 格式）
        options.headers.set('Authorization', `Bearer ${token}`)
        // 如果后端要求 Token 放在自定义头（如 X-Token），改成：
        // options.headers.set('X-Token', token)
      }
    },
    // 响应拦截：统一处理 Token 过期
    onResponseError({ response }) {
      // 后端返回 401 表示 Token 过期/无效，跳登录页
      if (response.status === 401) {
        // 清除无效 Token
        useCookie('auth_token').value = null
        // 跳转到登录页（保留当前页面，方便登录后返回）
        navigateTo(`/login?redirect=${window.location.pathname}`)
      }
    }
  })

  // 把 apiFetch 挂载到 nuxtApp，全局可用
  return {
    provide: {
      apiFetch
    }
  }
})
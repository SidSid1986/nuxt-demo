/*
 * @Author: Sid Li
 * @Date: 2026-02-25 10:43:39
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-25 16:55:36
 * @FilePath: \nuxt-demo\app\composables\useAuth.ts
 * @Description: 
 */
// composables/useAuth.ts

export const useAuth = () => {
  const config = useRuntimeConfig()
  // 存储 Token 到 Cookie（核心配置）
  const token = useCookie('auth_token', {
    maxAge: 60 * 60 * 24 * 7, // 7天过期
    secure: config.public.nodeEnv === 'production', // 生产环境仅 HTTPS 传输
    httpOnly: true, // 防 XSS 攻击（关键）
    sameSite: 'lax' // 防 CSRF 攻击
  })

  const login = async (username: string, password: string) => {
    try {
      const response = await $fetch<any>('/api/auth/login', {
        method: 'POST',
        body: { username, password }
      })
      // 存储 Token 到 Cookie
      token.value = response.token
      return { success: true, user: response.user }
    } catch (err) {
      return { success: false, error: err as Error }
    }
  }

  const logout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' })
    token.value = null // 登出清除 Token
  }

  return { login, logout, token }
}
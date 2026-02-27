/*
 * @Author: Sid Li
 * @Date: 2026-02-25 10:42:13
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-26 15:16:43
 * @FilePath: \nuxt-demo\app\server\api\auth\login.post.ts
 * @Description: 
 */
// server/api/auth/login.post.ts

export default defineEventHandler(async (event) => {
  console.log('===== 登录请求走到这里了 =====') // 加这行日志
  console.log('前端传的账号密码：', await readBody(event)) // 打印前端参数
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const response = await $fetch(`${config.private.backendUrl}/login`, {
    method: 'POST',
    body: body,
    headers: {
      'X-Internal-Secret': config.private.internalKey
    }
  }) as any

  // 关键：必须把后端返回的 token 透传给前端
  return {
    user: response.user || {},
    token: response.token || '', // 核心：返回 token
    message: '登录成功'
  }
})
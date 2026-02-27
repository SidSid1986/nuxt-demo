// server/api/data.get.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  // 从前端请求头取 Token（axios 拦截器加的）
  const token = getHeader(event, 'Authorization')
  
  // 转发到真实后端，携带 Token 和私密密钥
  const data = await $fetch(`${config.private.backendUrl}/data`, {
    headers: {
      Authorization: token || '',
      'X-Internal-Secret': config.private.internalKey
    }
  }) as any

  return data
})
/*
 * @Author: Sid Li
 * @Date: 2026-02-26 16:06:45
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-26 16:06:52
 * @FilePath: \nuxt-demo\app\server\api\submit.post.ts
 * @Description: 
 */
// server/api/submit.post.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  // 读取前端传的表单数据
  const body = await readBody(event)
  // 从请求头取 Token
  const token = getHeader(event, 'Authorization')

  // 转发到真实后端的 submit 接口
  const res = await $fetch(`${config.private.backendUrl}/submit`, {
    method: 'POST',
    body: body,
    headers: {
      Authorization: token || '',
      'X-Internal-Secret': config.private.internalKey
    }
  }) as any

  return res
})
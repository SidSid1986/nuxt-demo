/*
 * @Author: Sid Li
 * @Date: 2026-02-24 09:19:15
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-26 09:52:54
 * @FilePath: \nuxt-demo\app\composables\useApi.ts
 * @Description: 
 */
// ~/composables/useApi.ts（Nuxt中composables目录下的文件会自动导入）
 
export const useApi = () => {
  // 获取全局的 $apiFetch（自动带 Token）
  const { $apiFetch } = useNuxtApp() as unknown as { $apiFetch: any }

  // 获取数据（自动带 Token）
  const fetchData = async () => {
    try {
      const data = await $apiFetch('/data') // 路径省略 /api（插件已配 baseURL）
      return { success: true, data }
    } catch (err) {
      return { success: false, error: err as Error }
    }
  }

  // 提交表单（自动带 Token）
  const submitForm = async (formData: Record<string, any>) => {
    try {
      const res = await $apiFetch('/submit', {
        method: 'POST',
        body: formData,
      })
      return { success: true, data: res }
    } catch (err) {
      return { success: false, error: err as Error }
    }
  }

  return { fetchData, submitForm }
}
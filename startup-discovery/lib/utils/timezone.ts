// 时区处理工具

/**
 * 将Unix时间戳转换为Date对象（UTC时间）
 * Unix时间戳本身就是UTC，直接转换即可
 * 数据库会根据时区设置自动转换为本地时间
 */
export function unixToDate(unixTimestamp: number): Date {
  return new Date(unixTimestamp * 1000)
}

/**
 * 获取当前UTC时间
 * 数据库会根据时区设置自动转换为本地时间
 */
export function nowUTC(): Date {
  return new Date()
}

/**
 * 将任意时间转换为UTC
 */
export function toUTC(date: Date | string | number): Date {
  if (typeof date === 'number') {
    // Unix时间戳 (秒)
    return new Date(date * 1000)
  }
  if (typeof date === 'string') {
    // ISO字符串
    return new Date(date)
  }
  // Date对象，直接返回（JavaScript Date内部就是UTC）
  return date
}

/**
 * 格式化显示时间（用于前端显示）
 */
export function formatDisplayTime(date: Date, timezone: string = 'Asia/Shanghai'): string {
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date)
}

/**
 * 格式化为ISO字符串（数据库存储）
 */
export function toISOString(date: Date): string {
  return date.toISOString()
}

/**
 * 计算时间差（天数）
 */
export function daysBetween(date1: Date, date2: Date = new Date()): number {
  const diffTime = Math.abs(date2.getTime() - date1.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}
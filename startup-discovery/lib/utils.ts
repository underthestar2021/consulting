import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d)
}

export function calculateScore(metrics: {
  stars?: number
  forks?: number
  issues?: number
  contributors?: number
  recentActivity?: number
}): number {
  const weights = {
    stars: 0.3,
    forks: 0.2,
    issues: 0.1,
    contributors: 0.2,
    recentActivity: 0.2
  }
  
  let score = 0
  if (metrics.stars) score += Math.log10(metrics.stars + 1) * weights.stars
  if (metrics.forks) score += Math.log10(metrics.forks + 1) * weights.forks
  if (metrics.issues) score += Math.log10(metrics.issues + 1) * weights.issues
  if (metrics.contributors) score += Math.log10(metrics.contributors + 1) * weights.contributors
  if (metrics.recentActivity) score += metrics.recentActivity * weights.recentActivity
  
  return Math.min(Math.round(score * 20), 100)
}
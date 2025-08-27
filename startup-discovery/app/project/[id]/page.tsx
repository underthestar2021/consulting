'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, ExternalLink, Star, GitFork, MessageCircle, TrendingUp, Calendar, Tag, Lightbulb, AlertTriangle, Target } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Project } from '@/types/database'

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (params.id) {
      loadProject(params.id as string)
    }
  }, [params.id])

  const loadProject = async (id: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/projects/${id}`)
      if (response.ok) {
        const data = await response.json()
        setProject(data.project)
      } else {
        setError('项目未找到')
      }
    } catch (error) {
      setError('加载项目数据失败')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">项目未找到</h1>
          <p className="text-gray-600 mb-6">{error || '项目不存在或已被删除'}</p>
          <Link href="/" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  const sourceColors: Record<string, string> = {
    github: 'bg-gray-900',
    product_hunt: 'bg-orange-500',
    reddit: 'bg-red-500',
    hackernews: 'bg-orange-600'
  }

  const trendColors: Record<string, string> = {
    rising: 'text-green-600 bg-green-50',
    stable: 'text-blue-600 bg-blue-50',
    declining: 'text-red-600 bg-red-50'
  }

  const trendIcons: Record<string, string> = {
    rising: '↗',
    stable: '→',
    declining: '↘'
  }

  // 安全访问数据，提供默认值
  const analysis = project.analysis || {
    score: 0,
    trend: 'stable',
    market_potential: 'medium',
    competition_level: 'medium',
    success_probability: 0,
    key_insights: [],
    risks: [],
    opportunities: []
  }
  
  const metrics = project.metrics || {
    stars: null,
    forks: null,
    upvotes: null,
    comments: null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回项目列表
          </Link>
        </div>

        {/* 项目头部 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className={cn('text-white text-sm px-3 py-1 rounded', sourceColors[project.source])}>
                  {project.source}
                </span>
                <span className={cn('text-sm px-3 py-1 rounded font-medium', trendColors[analysis.trend])}>
                  {trendIcons[analysis.trend]} {analysis.trend === 'rising' ? '上升' : analysis.trend === 'stable' ? '稳定' : '下降'}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{project.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{project.description}</p>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
              >
                访问项目 <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="ml-6 text-center">
              <div className="text-4xl font-bold text-indigo-600">{analysis.score}</div>
              <div className="text-sm text-gray-500">综合评分</div>
            </div>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {Array.isArray(project.tags) && project.tags.map((tag: string, index: number) => (
              <span key={index} className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* 指标 */}
          <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
            {metrics.stars && (
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="h-5 w-5" />
                <span className="font-medium">{metrics.stars.toLocaleString()}</span>
                <span className="text-sm">Stars</span>
              </div>
            )}
            {metrics.forks && (
              <div className="flex items-center gap-2 text-gray-600">
                <GitFork className="h-5 w-5" />
                <span className="font-medium">{metrics.forks.toLocaleString()}</span>
                <span className="text-sm">Forks</span>
              </div>
            )}
            {metrics.upvotes && (
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="h-5 w-5" />
                <span className="font-medium">{metrics.upvotes.toLocaleString()}</span>
                <span className="text-sm">Upvotes</span>
              </div>
            )}
            {metrics.comments && (
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">{metrics.comments}</span>
                <span className="text-sm">Comments</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">发现于 {new Date(project.discovered_at).toLocaleDateString('zh-CN', { timeZone: 'Asia/Shanghai' })}</span>
            </div>
          </div>
        </div>

        {/* 分析详情 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 市场分析 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">市场分析</h2>
            <div className="space-y-4">
              <div>
                <span className="text-sm text-gray-500">市场潜力</span>
                <div className={cn('text-lg font-semibold mt-1', {
                  'text-green-600': analysis.market_potential === 'high',
                  'text-yellow-600': analysis.market_potential === 'medium',
                  'text-red-600': analysis.market_potential === 'low'
                })}>
                  {analysis.market_potential === 'high' ? '高' : analysis.market_potential === 'medium' ? '中' : '低'}
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500">竞争程度</span>
                <div className={cn('text-lg font-semibold mt-1', {
                  'text-red-600': analysis.competition_level === 'high',
                  'text-yellow-600': analysis.competition_level === 'medium',
                  'text-green-600': analysis.competition_level === 'low'
                })}>
                  {analysis.competition_level === 'high' ? '高' : analysis.competition_level === 'medium' ? '中' : '低'}
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500">成功概率</span>
                <div className="text-lg font-semibold text-indigo-600 mt-1">
                  {Math.round(analysis.success_probability * 100)}%
                </div>
              </div>
            </div>
          </div>

          {/* 洞察 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
              关键洞察
            </h2>
            <ul className="space-y-2">
              {Array.isArray(analysis.key_insights) && analysis.key_insights.map((insight: string, index: number) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {insight}
                </li>
              ))}
              {(!analysis.key_insights || analysis.key_insights.length === 0) && (
                <li className="text-sm text-gray-400">暂无洞察数据</li>
              )}
            </ul>
          </div>

          {/* 风险与机会 */}
          <div className="space-y-6">
            {/* 风险 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                潜在风险
              </h2>
              <ul className="space-y-2">
                {Array.isArray(analysis.risks) && analysis.risks.map((risk: string, index: number) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {risk}
                  </li>
                ))}
                {(!analysis.risks || analysis.risks.length === 0) && (
                  <li className="text-sm text-gray-400">暂无风险数据</li>
                )}
              </ul>
            </div>

            {/* 机会 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="h-5 w-5 text-blue-500 mr-2" />
                发展机会
              </h2>
              <ul className="space-y-2">
                {Array.isArray(analysis.opportunities) && analysis.opportunities.map((opportunity: string, index: number) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {opportunity}
                  </li>
                ))}
                {(!analysis.opportunities || analysis.opportunities.length === 0) && (
                  <li className="text-sm text-gray-400">暂无机会数据</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
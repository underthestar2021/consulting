'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import ProjectCard from '@/components/project-card'
import { Project } from '@/types/database'
import { TrendingUp, Flame, Clock, Calendar } from 'lucide-react'

export default function TrendingPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('week')

  useEffect(() => {
    loadTrendingProjects()
  }, [timeRange])

  const loadTrendingProjects = async () => {
    setLoading(true)
    
    // 模拟数据 - 实际应该从API获取
    const mockProjects: Project[] = [
      {
        id: 'trend1',
        source: 'github',
        source_id: 'gh-trend1',
        name: 'AutoGPT',
        description: '自主AI代理，能够独立完成复杂任务，本周GitHub增长最快的AI项目',
        url: 'https://github.com/example/autogpt',
        category: ['AI', 'Automation'],
        tags: ['ai', 'gpt-4', 'autonomous', 'agent'],
        metrics: {
          stars: 15432,
          forks: 2892,
          issues: 234,
          contributors: 145,
          daily_growth: 523,
          weekly_growth: 3654
        },
        analysis: {
          score: 95,
          trend: 'rising',
          market_potential: 'high',
          competition_level: 'low',
          success_probability: 88,
          key_insights: ['周增长率245%', 'AI Agent赛道领跑者', '获得知名投资人关注'],
          risks: ['技术门槛高'],
          opportunities: ['企业自动化市场巨大']
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        discovered_at: new Date().toISOString()
      },
      {
        id: 'trend2',
        source: 'product_hunt',
        source_id: 'ph-trend1',
        name: 'Notion AI 2.0',
        description: '全新AI写作助手，集成到Notion中，提供智能文档生成和知识管理',
        url: 'https://www.producthunt.com/posts/notion-ai-2',
        category: ['Productivity', 'AI'],
        tags: ['notion', 'ai', 'writing', 'productivity'],
        metrics: {
          upvotes: 3892,
          comments: 456,
          daily_growth: 892
        },
        analysis: {
          score: 89,
          trend: 'rising',
          market_potential: 'high',
          competition_level: 'medium',
          success_probability: 82,
          key_insights: ['Product Hunt本周第一', '用户反馈极佳'],
          risks: ['竞争激烈'],
          opportunities: ['知识工作者市场']
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        discovered_at: new Date().toISOString()
      }
    ]
    
    setTimeout(() => {
      setProjects(mockProjects)
      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Flame className="h-8 w-8 text-orange-500" />
            热门趋势
          </h1>
          <p className="text-gray-600">发现增长最快的创业项目</p>
        </div>

        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setTimeRange('day')}
            className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
              timeRange === 'day' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Clock className="h-4 w-4" />
            今日
          </button>
          <button
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
              timeRange === 'week' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Calendar className="h-4 w-4" />
            本周
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
              timeRange === 'month' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Calendar className="h-4 w-4" />
            本月
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-4">
            <div className="text-2xl font-bold">🔥 523</div>
            <div className="text-sm opacity-90">今日新增Star</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-4">
            <div className="text-2xl font-bold">📈 245%</div>
            <div className="text-sm opacity-90">周增长率</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-4">
            <div className="text-2xl font-bold">⚡ 15</div>
            <div className="text-sm opacity-90">爆发项目</div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
'use client'

import { Project } from '@/types/database'
import { Star, GitFork, MessageCircle, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const sourceColors = {
    github: 'bg-gray-900',
    product_hunt: 'bg-orange-500',
    reddit: 'bg-red-500',
    hackernews: 'bg-orange-600'
  }

  const trendColors = {
    rising: 'text-green-600 bg-green-50',
    stable: 'text-blue-600 bg-blue-50',
    declining: 'text-red-600 bg-red-50'
  }

  const trendIcons = {
    rising: '↗',
    stable: '→',
    declining: '↘'
  }

  return (
    <Link href={`/project/${project.id}`}>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={cn('text-white text-xs px-2 py-1 rounded', sourceColors[project.source])}>
                {project.source}
              </span>
              <span className={cn('text-xs px-2 py-1 rounded font-medium', trendColors[project.analysis.trend])}>
                {trendIcons[project.analysis.trend]} {project.analysis.trend === 'rising' ? '上升' : project.analysis.trend === 'stable' ? '稳定' : '下降'}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
          </div>
          <div className="ml-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{project.analysis.score}</div>
              <div className="text-xs text-gray-500">评分</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          {project.metrics.stars && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{project.metrics.stars.toLocaleString()}</span>
            </div>
          )}
          {project.metrics.forks && (
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{project.metrics.forks.toLocaleString()}</span>
            </div>
          )}
          {project.metrics.upvotes && (
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>{project.metrics.upvotes.toLocaleString()}</span>
            </div>
          )}
          {project.metrics.comments && (
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{project.metrics.comments}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="text-gray-500">市场潜力</span>
              <div className={cn('font-medium mt-1', {
                'text-green-600': project.analysis.market_potential === 'high',
                'text-yellow-600': project.analysis.market_potential === 'medium',
                'text-red-600': project.analysis.market_potential === 'low'
              })}>
                {project.analysis.market_potential === 'high' ? '高' : project.analysis.market_potential === 'medium' ? '中' : '低'}
              </div>
            </div>
            <div>
              <span className="text-gray-500">竞争程度</span>
              <div className={cn('font-medium mt-1', {
                'text-red-600': project.analysis.competition_level === 'high',
                'text-yellow-600': project.analysis.competition_level === 'medium',
                'text-green-600': project.analysis.competition_level === 'low'
              })}>
                {project.analysis.competition_level === 'high' ? '高' : project.analysis.competition_level === 'medium' ? '中' : '低'}
              </div>
            </div>
            <div>
              <span className="text-gray-500">成功概率</span>
              <div className="font-medium mt-1 text-indigo-600">
                {project.analysis.success_probability}%
              </div>
            </div>
          </div>
        </div>

        {project.analysis.key_insights && project.analysis.key_insights.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-start gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5" />
              <p className="text-xs text-gray-600 line-clamp-2">
                {project.analysis.key_insights[0]}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import ProjectCard from '@/components/project-card'
import { Search, TrendingUp, Sparkles, Rocket } from 'lucide-react'
import { Project } from '@/types/database'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [filter, setFilter] = useState<'all' | 'github' | 'product_hunt' | 'reddit'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [totalProjects, setTotalProjects] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setProjects([]) // 清空现有项目
    setPage(1)      // 重置页码
    loadProjects(true) // 重置加载
  }, [filter])

  useEffect(() => {
    loadProjects(true) // 初始加载
  }, [])

  const loadProjects = async (reset = false) => {
    if (reset) {
      setLoading(true)
      setPage(1)
    } else {
      setLoadingMore(true)
    }

    try {
      const currentPage = reset ? 1 : page + 1  // 加载下一页
      const sourceParam = filter === 'all' ? '' : `&source=${filter}`
      console.log(`🌐 API请求: page=${currentPage}, reset=${reset}`)
      const response = await fetch(`/api/projects?page=${currentPage}&limit=20${sourceParam}`)
      
      if (response.ok) {
        const data = await response.json()
        
        if (reset) {
          setProjects(data.projects || [])
        } else {
          // 防止重复项目，根据ID去重
          const newProjects = data.projects || []
          setProjects(prev => {
            const existingIds = new Set(prev.map((p: Project) => p.id))
            const uniqueNewProjects = newProjects.filter((p: Project) => !existingIds.has(p.id))
            console.log(`🔄 分页加载: 新增${newProjects.length}项目, 去重后${uniqueNewProjects.length}项目`)
            return [...prev, ...uniqueNewProjects]
          })
        }
        
        setTotalProjects(data.pagination?.total || 0)
        setHasMore((data.projects || []).length === 20)
        
        if (!reset) {
          setPage(currentPage)
        }
        
        console.log(`✅ 项目加载成功: 当前${reset ? data.projects?.length || 0 : projects.length + (data.projects?.length || 0)}个, 总共${data.pagination?.total || 0}个`)
      } else {
        console.error('Failed to load projects')
      }
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  const loadMore = async () => {
    if (loadingMore || !hasMore) return
    console.log('🔄 加载更多项目...')
    await loadProjects(false)
  }

  const filteredProjects = projects.filter(project => {
    if (filter !== 'all' && project.source !== filter) return false
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      return project.name.toLowerCase().includes(term) ||
             (project.description?.toLowerCase().includes(term)) ||
             (project.category?.some((cat: string) => cat.toLowerCase().includes(term))) ||
             (project.tags?.some((tag: string) => tag.toLowerCase().includes(term)))
    }
    return true
  })

  if (loading && projects.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">加载项目中...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Rocket className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              发现下一个
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                独角兽
              </span>
              项目
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              从 GitHub、Product Hunt、Reddit 等平台实时追踪最具潜力的创业项目，
              <br />使用 AI 分析帮你找到下一个投资机会
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <TrendingUp className="h-5 w-5 inline mr-2" />
                <span className="text-sm font-medium">{totalProjects} 个项目</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Sparkles className="h-5 w-5 inline mr-2" />
                <span className="text-sm font-medium">AI 智能分析</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="搜索项目名称、描述、标签..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Source Filter */}
            <div className="flex space-x-2">
              {[
                { value: 'all', label: '全部', count: totalProjects },
                { value: 'github', label: 'GitHub' },
                { value: 'product_hunt', label: 'Product Hunt' },
                { value: 'reddit', label: 'Reddit' },
              ].map(({ value, label, count }) => (
                <button
                  key={value}
                  onClick={() => setFilter(value as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                  {count && <span className="ml-2 text-sm">({count})</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            显示 {filteredProjects.length} 个项目 
            {searchTerm && (
              <span className="text-blue-600 font-medium">
                {' '}包含 "{searchTerm}"
              </span>
            )}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">暂无项目</h3>
            <p className="text-gray-500">
              {searchTerm ? '未找到匹配的项目，尝试调整搜索条件' : '还没有发现任何项目，请稍后再来查看'}
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > 0 && hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loadingMore ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline-block mr-2"></div>
                  加载中...
                </>
              ) : (
                '加载更多'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
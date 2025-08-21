'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import ProjectCard from '@/components/project-card'
import { Project } from '@/types/database'
import { Search, TrendingUp, Sparkles, Rocket } from 'lucide-react'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'github' | 'product_hunt' | 'reddit'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    setLoading(true)
    const mockProjects: Project[] = [
      {
        id: '1',
        source: 'github',
        source_id: 'gh1',
        name: 'AI Code Assistant',
        description: '基于GPT-4的智能代码助手，支持多种编程语言的代码生成、优化和调试',
        url: 'https://github.com/example/ai-code-assistant',
        category: ['AI', 'Developer Tools'],
        tags: ['ai', 'gpt-4', 'code-generation', 'developer-tools'],
        metrics: {
          stars: 5432,
          forks: 892,
          issues: 34,
          contributors: 45
        },
        analysis: {
          score: 85,
          trend: 'rising',
          market_potential: 'high',
          competition_level: 'medium',
          success_probability: 78,
          key_insights: ['AI编程助手市场快速增长', '强大的社区支持'],
          risks: ['依赖第三方API'],
          opportunities: ['企业版本开发潜力大']
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        discovered_at: new Date().toISOString()
      },
      {
        id: '2',
        source: 'product_hunt',
        source_id: 'ph1',
        name: 'TaskFlow Pro',
        description: '革命性的项目管理工具，通过AI自动化工作流程，提升团队效率50%',
        url: 'https://www.producthunt.com/posts/taskflow-pro',
        category: ['Productivity', 'SaaS'],
        tags: ['productivity', 'project-management', 'ai', 'automation'],
        metrics: {
          upvotes: 892,
          comments: 156
        },
        analysis: {
          score: 72,
          trend: 'stable',
          market_potential: 'medium',
          competition_level: 'high',
          success_probability: 65,
          key_insights: ['项目管理市场竞争激烈但需求持续'],
          risks: ['市场饱和度高'],
          opportunities: ['垂直行业定制化']
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        discovered_at: new Date().toISOString()
      },
      {
        id: '3',
        source: 'reddit',
        source_id: 'rd1',
        name: 'CryptoWallet Plus',
        description: '安全、易用的多链加密货币钱包，支持DeFi集成和NFT管理',
        url: 'https://reddit.com/r/startups/example',
        category: ['Blockchain', 'Finance'],
        tags: ['crypto', 'wallet', 'defi', 'nft', 'web3'],
        metrics: {
          upvotes: 342,
          comments: 89
        },
        analysis: {
          score: 68,
          trend: 'rising',
          market_potential: 'high',
          competition_level: 'medium',
          success_probability: 70,
          key_insights: ['Web3领域持续增长', '用户体验是关键差异化因素'],
          risks: ['监管不确定性'],
          opportunities: ['机构客户市场']
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        discovered_at: new Date().toISOString()
      }
    ]
    
    setTimeout(() => {
      setProjects(mockProjects)
      setLoading(false)
    }, 1000)
  }

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.source === filter
    const matchesSearch = searchTerm === '' || 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              发现下一个独角兽项目
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              每日精选创业项目，AI驱动的市场分析，助您把握投资机会
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                免费试用
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="搜索项目名称、描述或标签..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setFilter('github')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === 'github' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              GitHub
            </button>
            <button
              onClick={() => setFilter('product_hunt')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === 'product_hunt' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Product Hunt
            </button>
            <button
              onClick={() => setFilter('reddit')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === 'reddit' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Reddit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1,234</div>
                <div className="text-sm text-gray-600">今日新项目</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">89</div>
                <div className="text-sm text-gray-600">高潜力项目</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">456</div>
                <div className="text-sm text-gray-600">快速增长中</div>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">没有找到符合条件的项目</p>
          </div>
        )}
      </div>
    </div>
  )
}
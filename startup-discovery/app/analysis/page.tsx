'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import { TrendingUp, BarChart3, PieChart, Activity, Calendar, Filter, Download } from 'lucide-react'

export default function AnalysisPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d')
  const [category, setCategory] = useState<'all' | 'ai' | 'fintech' | 'saas' | 'web3'>('all')

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">市场分析</h1>
            <p className="mt-2 text-gray-600">深度洞察创业项目趋势和市场机会</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as '7d' | '30d' | '90d')}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option value="7d">最近7天</option>
                  <option value="30d">最近30天</option>
                  <option value="90d">最近90天</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option value="all">所有类别</option>
                  <option value="ai">人工智能</option>
                  <option value="fintech">金融科技</option>
                  <option value="saas">SaaS</option>
                  <option value="web3">Web3</option>
                </select>
              </div>

              <button className="ml-auto flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
                <Download className="h-4 w-4" />
                导出报告
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <span className="text-sm text-green-600 font-semibold">+23.5%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1,234</h3>
              <p className="text-gray-600 text-sm mt-1">新增项目</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8 text-blue-500" />
                <span className="text-sm text-blue-600 font-semibold">+15.2%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$45.6M</h3>
              <p className="text-gray-600 text-sm mt-1">总融资额</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <PieChart className="h-8 w-8 text-purple-500" />
                <span className="text-sm text-purple-600 font-semibold">AI 35%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
              <p className="text-gray-600 text-sm mt-1">热门类别</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Activity className="h-8 w-8 text-orange-500" />
                <span className="text-sm text-orange-600 font-semibold">High</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">89</h3>
              <p className="text-gray-600 text-sm mt-1">活跃度评分</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">项目增长趋势</h3>
              <div className="h-64 flex items-center justify-center text-gray-400">
                <p>图表加载中...</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">类别分布</h3>
              <div className="h-64 flex items-center justify-center text-gray-400">
                <p>图表加载中...</p>
              </div>
            </div>
          </div>

          {/* Top Projects Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">热门项目排行</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      排名
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      项目名称
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      类别
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      评分
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      增长率
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      AI Code Assistant
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        AI
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">95</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+45.2%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      FinFlow Pro
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        FinTech
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">92</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+38.7%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      DataSync Cloud
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                        SaaS
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">88</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+31.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
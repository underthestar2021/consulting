'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import { Check, X, Zap, Rocket, Building2 } from 'lucide-react'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: '免费版',
      icon: Zap,
      price: {
        monthly: 0,
        yearly: 0
      },
      description: '适合个人开发者和初创者',
      features: [
        { text: '每日5个项目推荐', included: true },
        { text: '基础市场分析', included: true },
        { text: '7天历史数据', included: true },
        { text: '邮件通知', included: false },
        { text: 'API访问', included: false },
        { text: '高级分析报告', included: false },
        { text: '团队协作', included: false },
        { text: '专属客服', included: false }
      ],
      cta: '开始使用',
      popular: false
    },
    {
      name: '专业版',
      icon: Rocket,
      price: {
        monthly: 29,
        yearly: 290
      },
      description: '适合产品经理和独立创业者',
      features: [
        { text: '每日50个项目推荐', included: true },
        { text: '深度市场分析', included: true },
        { text: '90天历史数据', included: true },
        { text: '邮件通知', included: true },
        { text: 'API访问 (1000次/月)', included: true },
        { text: '高级分析报告', included: true },
        { text: '团队协作 (最多3人)', included: false },
        { text: '专属客服', included: false }
      ],
      cta: '立即升级',
      popular: true
    },
    {
      name: '企业版',
      icon: Building2,
      price: {
        monthly: 99,
        yearly: 990
      },
      description: '适合投资机构和创业团队',
      features: [
        { text: '无限项目推荐', included: true },
        { text: '全面市场分析', included: true },
        { text: '全部历史数据', included: true },
        { text: '邮件通知', included: true },
        { text: 'API访问 (无限制)', included: true },
        { text: '高级分析报告', included: true },
        { text: '团队协作 (无限制)', included: true },
        { text: '专属客服', included: true }
      ],
      cta: '联系销售',
      popular: false
    }
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              选择适合您的方案
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              无论您是个人开发者还是大型团队，我们都有适合的解决方案
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  billingPeriod === 'monthly'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                月付
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  billingPeriod === 'yearly'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                年付
                <span className="ml-1 text-xs">省17%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => {
              const Icon = plan.icon
              const price = plan.price[billingPeriod]
              const displayPrice = billingPeriod === 'yearly' ? Math.floor(price / 12) : price
              
              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl shadow-sm border-2 ${
                    plan.popular
                      ? 'border-indigo-600 relative'
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        最受欢迎
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ¥{displayPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingPeriod === 'yearly' ? '月' : '月'}
                      </span>
                      {billingPeriod === 'yearly' && price > 0 && (
                        <div className="text-sm text-gray-500 mt-1">
                          按年计费 ¥{price}
                        </div>
                      )}
                    </div>
                    
                    <button
                      className={`w-full py-3 px-4 rounded-lg font-medium transition ${
                        plan.popular
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </button>
                    
                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              常见问题
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  可以随时取消订阅吗？
                </h3>
                <p className="text-gray-600">
                  当然可以。您可以随时在账户设置中取消订阅，取消后将在当前计费周期结束后生效。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  支持哪些支付方式？
                </h3>
                <p className="text-gray-600">
                  我们支持支付宝、微信支付、银联卡以及主流信用卡支付。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  可以更换套餐吗？
                </h3>
                <p className="text-gray-600">
                  可以随时升级或降级您的套餐，费用将按比例调整。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  有免费试用吗？
                </h3>
                <p className="text-gray-600">
                  专业版和企业版都提供14天免费试用，无需信用卡。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
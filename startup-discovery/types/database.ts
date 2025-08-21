export interface User {
  id: string
  email: string
  name?: string
  subscription_tier: 'free' | 'basic' | 'pro'
  subscription_status: 'active' | 'canceled' | 'past_due'
  stripe_customer_id?: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  source: 'github' | 'product_hunt' | 'reddit' | 'hackernews'
  source_id: string
  name: string
  description: string
  url: string
  category: string[]
  tags: string[]
  metrics: ProjectMetrics
  analysis: ProjectAnalysis
  created_at: string
  updated_at: string
  discovered_at: string
}

export interface ProjectMetrics {
  stars?: number
  forks?: number
  issues?: number
  contributors?: number
  upvotes?: number
  comments?: number
  views?: number
  daily_growth?: number
  weekly_growth?: number
}

export interface ProjectAnalysis {
  score: number
  trend: 'rising' | 'stable' | 'declining'
  market_potential: 'high' | 'medium' | 'low'
  competition_level: 'high' | 'medium' | 'low'
  success_probability: number
  competitors?: string[]
  key_insights?: string[]
  risks?: string[]
  opportunities?: string[]
}

export interface UserSavedProject {
  id: string
  user_id: string
  project_id: string
  notes?: string
  created_at: string
}

export interface UserSubscription {
  id: string
  user_id: string
  stripe_subscription_id: string
  price_id: string
  status: 'active' | 'canceled' | 'past_due'
  current_period_start: string
  current_period_end: string
  created_at: string
  updated_at: string
}
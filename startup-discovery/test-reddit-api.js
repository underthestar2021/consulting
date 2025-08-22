// Simple Reddit API test
const crypto = require('crypto')

class SimpleRedditTest {
  constructor() {
    this.clientId = 'Turbulent_Heat_8850'
    this.clientSecret = 'c3gQ79We9UNMzuwLmbOL5Njrxb1nyw'
  }

  async getAccessToken() {
    try {
      const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')
      console.log('🔐 Auth string length:', auth.length)
      console.log('📋 Client ID:', this.clientId)
      console.log('🔑 Using credentials - ID exists:', !!this.clientId, 'Secret exists:', !!this.clientSecret)
      
      const response = await fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'StartupDiscovery/1.0'
        },
        body: 'grant_type=client_credentials'
      })

      console.log('📡 Response status:', response.status, response.statusText)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.log('❌ Error response:', errorText)
        throw new Error(`Reddit auth error: ${response.status} - ${response.statusText}`)
      }

      const data = await response.json()
      console.log('✅ Auth response:', data)
      return data.access_token
    } catch (error) {
      console.error('Error getting access token:', error)
      return null
    }
  }

  async testAPI() {
    console.log('🔍 Testing Reddit API connection...')
    
    const token = await this.getAccessToken()
    if (!token) {
      console.log('❌ Failed to get access token')
      return
    }
    
    console.log('✅ Successfully obtained access token')
    console.log('📡 Fetching posts from r/startups...')
    
    try {
      const response = await fetch('https://oauth.reddit.com/r/startups/hot?limit=5', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'User-Agent': 'StartupDiscovery/1.0'
        }
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status} - ${response.statusText}`)
      }

      const data = await response.json()
      const posts = data.data.children

      console.log(`✅ Success! Found ${posts.length} posts`)
      console.log('\n📋 Sample posts:')
      
      posts.forEach((child, index) => {
        const post = child.data
        console.log(`\n${index + 1}. ${post.title.substring(0, 60)}...`)
        console.log(`   👍 ${post.score} upvotes, 💬 ${post.num_comments} comments`)
        console.log(`   🔗 ${post.url}`)
      })
      
    } catch (error) {
      console.error('❌ Error fetching posts:', error)
    }
  }
}

const test = new SimpleRedditTest()
test.testAPI()
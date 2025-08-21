#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');

console.log('🚀 启动应用测试...\n');

// 启动开发服务器
const devServer = spawn('npm', ['run', 'dev'], {
  cwd: process.cwd(),
  env: { ...process.env, PORT: '3001' }
});

let serverReady = false;

devServer.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(`[服务器] ${output}`);
  
  if (output.includes('Ready') && !serverReady) {
    serverReady = true;
    console.log('\n✅ 服务器启动成功！\n');
    runTests();
  }
});

devServer.stderr.on('data', (data) => {
  console.error(`[错误] ${data}`);
});

// 测试函数
async function runTests() {
  console.log('📋 运行测试用例...\n');
  
  const tests = [
    {
      name: '主页加载测试',
      url: 'http://localhost:3001',
      expectedStatus: 200
    },
    {
      name: 'Favicon测试',
      url: 'http://localhost:3001/favicon.ico',
      expectedStatus: 200
    }
  ];
  
  let passedTests = 0;
  let failedTests = 0;
  
  for (const test of tests) {
    try {
      const result = await testEndpoint(test.url, test.expectedStatus);
      if (result) {
        console.log(`✅ ${test.name}: 通过`);
        passedTests++;
      } else {
        console.log(`❌ ${test.name}: 失败`);
        failedTests++;
      }
    } catch (error) {
      console.log(`❌ ${test.name}: 错误 - ${error.message}`);
      failedTests++;
    }
  }
  
  console.log('\n📊 测试结果:');
  console.log(`   通过: ${passedTests}`);
  console.log(`   失败: ${failedTests}`);
  console.log(`   总计: ${tests.length}`);
  
  // 清理
  setTimeout(() => {
    console.log('\n🛑 关闭服务器...');
    devServer.kill();
    process.exit(failedTests > 0 ? 1 : 0);
  }, 2000);
}

function testEndpoint(url, expectedStatus) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      resolve(res.statusCode === expectedStatus);
    }).on('error', reject);
  });
}

// 处理进程退出
process.on('SIGINT', () => {
  console.log('\n⚠️  中断测试...');
  devServer.kill();
  process.exit(1);
});

// 超时处理
setTimeout(() => {
  if (!serverReady) {
    console.error('\n❌ 服务器启动超时！');
    devServer.kill();
    process.exit(1);
  }
}, 30000);
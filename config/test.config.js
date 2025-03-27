// 测试环境配置
module.exports = {
  // 环境配置
  environments: {
    production: {
      baseUrl: 'https://www.saucedemo.com',
      timeout: 30000
    },
    staging: {
      baseUrl: 'https://staging.saucedemo.com',
      timeout: 30000
    }
  },

  // 默认环境
  defaultEnvironment: 'production',

  // 测试重试配置
  retries: 2,

  // 并发测试配置
  workers: 1,

  // 测试报告配置
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  // 截图配置
  screenshot: 'only-on-failure'
};
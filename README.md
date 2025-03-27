# Playwright 自动化测试项目

这是一个使用 Playwright 框架的自动化测试项目，实现了多种测试模式和最佳实践。

## 项目特点

- 使用 Page Object Model (POM) 设计模式
- 支持数据驱动测试 (DDT)
- 集成 Cucumber.js 实现行为驱动开发 (BDD)
- 灵活的配置管理
- 详细的测试报告生成

## 环境要求

- Node.js (推荐使用最新的 LTS 版本)
- npm (Node.js 包管理器)

## 项目结构

```
├── config/                 # 配置文件目录
│   └── test.config.js      # 测试配置文件
├── pages/                  # Page Object Model 页面对象
│   └── loginPage.js        # 登录页面对象
├── testdata/              # 测试数据目录
│   └── users.json         # 用户测试数据
├── tests/                 # 测试用例目录
│   ├── bddTests/          # BDD 测试
│   │   ├── features/      # Cucumber 特性文件
│   │   ├── steps/         # 步骤定义
│   │   └── world.js       # Cucumber World 对象
│   ├── ddtTests/          # 数据驱动测试
│   │   └── loginDDT.spec.js
│   └── pomTests/          # Page Object Model 测试
│       └── loginPOMTest.spec.js
└── playwright.config.js    # Playwright 配置文件
```

## 安装

1. 克隆项目到本地
2. 安装依赖：
```bash
npm install
```
3. 安装 Playwright 浏览器：
```bash
npx playwright install
```

## 运行测试

### 运行所有测试
```bash
npx playwright test
```

### 运行 BDD 测试
```bash
npm run test:cucumber
```

### 运行特定测试文件
```bash
npx playwright test tests/pomTests/loginPOMTest.spec.js
```

## 测试架构

### Page Object Model (POM)
- 页面对象位于 `pages/` 目录
- 每个页面都有独立的类来封装页面元素和操作
- 示例：`loginPage.js` 封装了登录页面的所有操作

### 数据驱动测试 (DDT)
- 测试数据存储在 `testdata/` 目录
- 使用外部数据源（如 JSON 文件）进行参数化测试
- 示例：`loginDDT.spec.js` 展示了如何使用不同的用户数据进行登录测试

### 行为驱动开发 (BDD)
- 使用 Cucumber.js 实现 BDD 测试
- 特性文件位于 `tests/bddTests/features/`
- 步骤定义位于 `tests/bddTests/steps/`

## 配置

主要配置文件：`playwright.config.js`

```javascript
module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'test-results' }]]
});
```

### 关键配置说明
- `headless`: 无头模式运行
- `screenshot`: 仅在测试失败时截图
- `video`: 仅保留失败测试的视频
- `reporter`: 使用 HTML 报告器，输出到 test-results 目录

## 测试报告

测试执行后，可以在 `test-results` 目录下查看详细的 HTML 报告：
```bash
npx playwright show-report
```

## 最佳实践

1. 使用 Page Object Model 保持代码的可维护性
2. 将测试数据与测试逻辑分离
3. 使用 BDD 提高测试用例的可读性
4. 合理使用配置文件管理不同环境的设置
5. 定期查看测试报告并分析失败原因
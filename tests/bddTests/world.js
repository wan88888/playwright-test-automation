const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  this.browser = await chromium.launch({
    headless: true,
    args: ['--start-maximized']
  });
  this.context = await this.browser.newContext({
    viewport: null
  });
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.browser.close();
});

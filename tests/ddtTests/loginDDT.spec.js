const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');
const users = require('../../testdata/users.json').users;

test.describe('Data-Driven Login Tests', () => {
  // 测试有效用户登录
  users.forEach(data => {
    test(`Login test for ${data.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.login(data.username, data.password);

      if (data.username === 'locked_out_user') {
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
      } else {
        expect(await loginPage.isLoggedIn()).toBeTruthy();
      }
    });
  });

  // 测试空用户名和密码
  test('Login with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('', '');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username is required');
  });

  // 测试错误密码
  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'wrong_password');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match');
  });
});
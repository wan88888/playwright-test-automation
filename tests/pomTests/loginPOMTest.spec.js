const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');

test('User should be able to login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/); // Başarılı giriş kontrolü
});

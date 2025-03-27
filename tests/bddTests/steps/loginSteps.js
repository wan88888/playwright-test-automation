const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../../pages/loginPage');

let loginPage;

Given('User is on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('User enters {string} and {string}', async function (username, password) {
  await loginPage.login(username, password);
});

Then('User should see the product inventory page', async function () {
  await expect(this.page).toHaveURL(/inventory/);
});
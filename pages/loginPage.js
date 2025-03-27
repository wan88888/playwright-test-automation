class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = '#user-name';
      this.passwordField = '#password';
      this.loginButton = '#login-button';
      this.errorMessage = '[data-test="error"]';
    }
  
    async navigate() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameField, username);
      await this.page.fill(this.passwordField, password);
      await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
      const errorElement = this.page.locator(this.errorMessage);
      if (await errorElement.isVisible()) {
        return await errorElement.textContent();
      }
      return null;
    }

    async isLoggedIn() {
      return this.page.url().includes('/inventory');
    }

    async clearInputs() {
      await this.page.fill(this.usernameField, '');
      await this.page.fill(this.passwordField, '');
    }

    async validateInputs(username, password) {
      if (!username || !password) {
        throw new Error('Username and password are required');
      }
    }
}
module.exports = LoginPage;
const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const config = require('../config.json');

test.describe('Login Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(config.baseUrl, config.username, config.password);
    await loginPage.verifySuccessfulLogin();
  });
});

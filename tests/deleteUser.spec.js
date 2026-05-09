const { test, expect } = require('@playwright/test');
const apiClient = require('../utils/apiClient');

test('Delete User', async () => {

    const apiContext = await apiClient.createRequestContext();

    const response = await apiContext.delete('/users/1');

    console.log("Status Code:", response.status());

    expect(response.status()).toBe(200);
});
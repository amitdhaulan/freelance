const { test, expect } = require('@playwright/test');
const apiClient = require('../utils/apiClient');

test('GET User Details', async () => {

    const apiContext = await apiClient.createRequestContext();

    const response = await apiContext.get('/users/1');

    console.log(await response.json());

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.name).toBe('Leanne Graham');
    expect(responseBody.email).toContain('@april.biz');
});
const { test, expect } = require('@playwright/test');
const apiClient = require('../utils/apiClient');

test('Update Existing User', async () => {

    const apiContext = await apiClient.createRequestContext();

    const requestBody = {
        name: 'Leanne Graham Updated',
        email: 'leanne.updated@april.biz'
    };

    const response = await apiContext.put('/users/1', {
        data: requestBody
    });

    const responseBody = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe('Leanne Graham Updated');
    expect(responseBody.email).toBe('leanne.updated@april.biz');
});
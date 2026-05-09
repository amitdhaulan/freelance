const { test, expect } = require('@playwright/test');
const apiClient = require('../utils/apiClient');

test('Create New User', async () => {

    const apiContext = await apiClient.createRequestContext();

    const requestBody = {
        name: 'Amit',
        username: 'amitqa',
        email: 'amit@example.com'
    };

    const response = await apiContext.post('/users', {
        data: requestBody
    });

    const responseBody = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(201);
    expect(responseBody.name).toBe('Amit');
    expect(responseBody.username).toBe('amitqa');
    expect(responseBody.email).toBe('amit@example.com');
    expect(responseBody.id).toBeDefined();
});
const { request } = require('@playwright/test');

class ApiClient {

    async createRequestContext() {

        return await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com'
        });
    }
}

module.exports = new ApiClient();

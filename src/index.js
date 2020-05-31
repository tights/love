/* Love */

const Client = require('./structure/Client');

const client = new Client({
    token: 'super-secret-token',
    prefix: 'not-so-secret-prefix'
});

client.login(client.token);
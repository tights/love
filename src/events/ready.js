module.exports = class {
    constructor(client) {
        this.client = client;
    }

    run() {
        console.log(`${this.client.user.username} (${this.client.user.id})`);
    }
}
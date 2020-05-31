const { MessageEmbed } = require('discord.js');

module.exports = class {
    constructor(client, options = {}) {
        this.capitilize = client.utils.capitilize;
        this.repeat = client.utils.repeat;
        this.Embed = MessageEmbed;
        this.client = client;
        this.statusReset = options.statusReset || false;
        this.name = options.name || null;
        this.desc = options.desc || null;
        this.usage = options.usage || null;
        this.alias = options.alias || [];
        this.args = options.args || false;
        this.del = options.del || false;
        this.perms = options.perms;
    }
}
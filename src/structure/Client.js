const { Client, Collection } = require('discord.js');
const Utils = require('../utils');
const fse = require('fs-extra');
const path = require('path');

module.exports = class extends Client {
    constructor(config = {}) {
        super();

        this.token = config.token;
        this.prefix = config.prefix;
        this.utils = Utils;

        this.commands = new Collection();
    }

    async login(token) {
        let commandsPath = path.join(__dirname, '../commands');

        for (let dir of fse.readdirSync(commandsPath)) {
            for (let file of fse.readdirSync(commandsPath + `/${dir}`)) {
                const command = require(commandsPath + `/${dir}/${file}`);
                const commands = new command(this);

                this.commands.set(commands.name, commands);
            }
        }

        let eventsPath = path.join(__dirname, '../events');

        for (let file of fse.readdirSync(eventsPath)) {
            const event = require(eventsPath + `/${file}`);
            const events = new event(this);
            const names = file.split('.')[0];

            super.on(names, (...args) => events.run(...args));
        }

        super.login(token);
    }
}
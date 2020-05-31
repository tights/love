const Command = require('../../structure/Commands');
const fse = require('fs-extra');
const path = require('path');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            desc: 'Displays a help menu.',
            del: true
        });
    }

    async run(msg, args) {
        let commandsPath = path.join(__dirname, '../');
        let e = new this.Embed()
            .setColor('RANDOM')
            .setDescription(':butterfly:')
            .setFooter('love - the new hate')

        for (let dir of fse.readdirSync(commandsPath)) {
            let commandsDir = [];
            
            for (let file of fse.readdirSync(commandsPath + `/${dir}`)) {
                const command = require(commandsPath + `/${dir}/${file}`);
                const commands = new command(this.client);

                commandsDir.push(`* **${commands.name}** » *${commands.desc}*`);
            }

            e.addField(dir, commandsDir);
        }

        msg.channel.send(e);
    }
}
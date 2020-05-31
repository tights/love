const Command = require('../../structure/Commands');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            desc: 'Sets your status to playing.',
            alias: ['playing'],
            statusReset: true,
            del: true
        });
    }

    async run(msg, args) {
        const { user } = this.client;

        user.setActivity(args.join(' '), { type: 'PLAYING' })
            .then(presence => msg.channel.send(`set watch to ${presence.activities[0].name}`))
            .catch(console.error);
    }
}
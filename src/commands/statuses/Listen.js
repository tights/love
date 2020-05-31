const Command = require('../../structure/Commands');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'listen',
            desc: 'Sets your status to listening.',
            alias: ['listening'],
            statusReset: true,
            del: true
        });
    }

    async run(msg, args) {
        const { user } = this.client;

        user.setActivity(args.join(' '), { type: 'LISTENING' })
            .then(presence => msg.channel.send(`set listen to ${presence.activities[0].name}`))
            .catch(console.error);
    }
}
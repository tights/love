const Command = require('../../structure/Commands');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'watch',
            desc: 'Sets your status to watching.',
            alias: ['watching'],
            statusReset: true,
            del: true
        });
    }

    async run(msg, args) {
        const { user } = this.client;

        user.setActivity(args.join(' '), { type: 'WATCHING' })
            .then(presence => msg.channel.send(`set watch to ${presence.activities[0].name}`))
            .catch(console.error);
    }
}
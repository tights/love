const Command = require('../../structure/Commands');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'stream',
            desc: 'Sets your status to streaming.',
            alias: ['streaming'],
            statusReset: true,
            del: true
        });
    }

    async run(msg, args) {
        const { user } = this.client;

        user.setActivity(args.join(' '), { type: 'STREAMING', url: 'https://twitch.tv/' + user.username })
            .then(presence => msg.channel.send(`set stream to ${presence.activities[0].name}`))
            .catch(console.error);
    }
}
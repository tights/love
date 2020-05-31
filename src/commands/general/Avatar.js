const Command = require('../../structure/Commands');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            desc: 'Displays a users avatar.',
            alias: ['av', 'avi'],
            del: true
        });
    }

    async run(msg) {
        const user = msg.mentions.users.first() || msg.author;
        const avatar = user.displayAvatarURL({ 
            dynamic: true, 
            size: 4096
        });

        msg.channel.send(avatar);
    }
}
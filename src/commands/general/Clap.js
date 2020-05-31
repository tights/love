const Command = require('../../structure/Commands');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'clap',
            desc: 'Puts a clap emoji after every argument.',
            args: true,
            del: true
        });
    }

    async run(msg, args) {
        const clapped = args.slice(0).join(' 👏 ');

        msg.edit(`${clapped}`);
    }
}
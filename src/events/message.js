module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async inhibitor(msg, args, cmd) {
        if (cmd.del) msg.delete();
        if (cmd.args && !args.length) return msg.channel.send('missing args');
        if (cmd.perms && !msg.guild.me.hasPermission(cmd.perms)) return msg.channel.send('missing perms');
        if (cmd.statusReset && !args.length) return user.setActivity(null)
            .then(() => msg.channel.send('reset ur status'))
            .catch(console.error);

        this.runCommands(msg, args, cmd);
    }

    async runCommands(msg, args, cmd) {
        try {
            cmd.run(msg, args);
        } catch (e) {
            console.log(e);
        }
    }

    async run(msg) {
        const { prefix, commands } = this.client;

        if (msg.author != this.client.user) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const trigger = args.shift().toLowerCase();
        const cmd = commands.get(trigger) || commands.find(x => x.alias.includes(trigger));

        if (cmd) this.inhibitor(msg, args, cmd);
    }
}
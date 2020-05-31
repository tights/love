const Command = require('../../structure/Commands');
const axios = require('axios');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ip',
            desc: 'Displays information about given IP address.',
            args: true,
            del: true
        });
    }

    async run(msg, args) {
        const { data } = await axios.get(`http://ip-api.com/json/${args[0]}`);
        const err = ':no_entry_sign:';

        msg.channel.send(
            new this.Embed()
                .setColor('RANDOM')
                .setDescription(':butterfly:')
                .setFooter('love - the new hate')
                .addField('Country', `${data.country != undefined ? `${data.country}` : err}`, true)
                .addField('Country Code', `${data.countryCode != undefined ? `${data.countryCode}` : err}`, true)
                .addField('City', `${data.city != undefined ? `${data.city}` : err}`, true)
                .addField('Region', `${data.regionName != undefined ? `${data.regionName}` : err}`, true)
                .addField('Timezone', `${data.timezone != undefined ? `${data.timezone}` : err}`, true)
                .addField('ISP', `${data.isp != undefined ? `${data.isp}` : err}`, true)
                .addField('ASN', `${data.as != undefined ? `${data.as}` : err}`, true)
                .addField('Longitude', `${data.lan != undefined ? `${data.lan}` : err}`, true)
                .addField('Latitude', `${data.lat != undefined ? `${data.lat}` : err}`, true)
        );
    }
}
const environments = {
    development: 'development',
    production: 'production'
};

const cfg = {
    discordToken: '',
    graphcoolId: '',
    graphcoolToken: '',
    environment: environments.production,
    server: {
        development: 'The Outhouse',
        production: 'InHouse League NA'
    },
    cmdChannels: {
        development: ['bot-spam'],
        production: ['match-bot', 'misc-commands', 'pro-match-bot']
    },
    trueskill: {
        amateur: {
            initialRating: 1500,
            initialSigma: 1.813 * 2
        },
        pro: {
            initialRating: 2500,
            initialSigma: 1.813
        }
    },
    admins: [186996009354788864]
};

export default cfg;

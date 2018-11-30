const environments = {
    development: 'development',
    production: 'production'
};

const cfg = {
    discordToken: 'NTE3NTk4MzQ5NDQ1MTY5MTU0.DuEqyA.MG0KkbOSIhwWdHlMnehuc6T0BPo',
    graphcoolId: 'cjp3ia1at5yks0147v19bteim',
    graphcoolToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDM0NzU0OTgsImNsaWVudElkIjoiY2pwMjlnam5oMnZwdzAxMDhkaTJpaWRrNSJ9.MtdcfE6ibXs_HD55S21WLcmJ9Qle3nSRIaQTFqMCIA4',
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

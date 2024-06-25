const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./pkg/config.json'));

const getSection = (env) => {
    return config[env];
};

module.exports = { getSection };

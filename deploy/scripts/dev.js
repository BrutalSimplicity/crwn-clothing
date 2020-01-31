const cp = require('child_process');
const utils = require('./utils');

const config = utils.readConfig('deploy/config.yml', 'dev');

deploy();

function deploy() {
    Object.keys(config.regions).forEach(region => {
        cp.execSync(`
            sls deploy -v -c deploy/s3.sls/serverless.yml -r ${region} -s dev
        `, { stdio: 'inherit' });
    });
}
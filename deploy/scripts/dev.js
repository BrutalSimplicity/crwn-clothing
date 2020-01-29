const cp = require('child_process');

deploy();

function deploy() {
    cp.execSync(`
    sls client deploy -c deploy/s3.sls/serverless.yml -r us-east-1 -s dev --no-delete-contents --no-confirm
    sls client deploy -c deploy/s3.sls/serverless.yml -r us-west-2 -s dev --no-delete-contents --no-confirm
    `, { stdio: 'inherit' });
}
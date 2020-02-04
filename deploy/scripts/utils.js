const yaml = require('js-yaml');
const p = require('path');
const fs = require('fs');
const cp = require('child_process');

exports.readConfig = function(path, env) {
    const config = yaml.safeLoad(fs.readFileSync(path, { encoding: 'utf-8' }), { filename: p.basename(path) });

    const rootConfig = { ...config };
    delete rootConfig.environments;

    return applyOverrides(rootConfig, config.environments[env]);
}

exports.exec = function(cmd) {
    cp.execSync(cmd, { stdio: "inherit" });
}

function applyOverrides(rootConfig, envConfig) {
    return {
        ...rootConfig,
        ...envConfig
    };
}

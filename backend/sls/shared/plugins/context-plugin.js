//This plugin is used to temporarily set the context in which to find the handler function
const path = require('path');

class ContextPlugin {
  originalServicePath;

  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'before:deploy:setupProviderConfiguration': this.beforeSetup.bind(this),
      'before:deploy:createDeploymentArtifacts': this.beforeCreateArtifacts.bind(this)
    };
  }
  
  beforeSetup() {

    this.originalServicePath = this.serverless.config.servicePath;
    const funcPath = path.resolve(this.originalServicePath,'..','..','..','src','controllers');
    this.serverless.config.servicePath = funcPath;
    this.serverless.cli.log(`beforeSetup: Serverless service path set to: ${funcPath}`);

  }

  beforeCreateArtifacts() {
    this.serverless.config.servicePath = this.originalServicePath;
    this.serverless.cli.log(`beforeCreateArtifacts: Serverless service path set to: ${this.originalServicePath}`);

  }
}

module.exports = ContextPlugin
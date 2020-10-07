module.exports = {
    apps : [,
      {
        name: "OAUTH-REGISTER-SERVICE",
          script: "../OAUTH-REGISTER-SERVICE/server.js",
          watch: true,
          instances: 1,
          node_args: "--max_old_space_size=8192",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        }
      },
      {
        name: "OAUTH-SERVICE",
        script: "../OAUTH-SERVICE/server.js",
        watch: true,
        instances: 1,
        node_args: "--max_old_space_size=8192",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
        name: "ACCOUNT-ACTIVATION-SERVICE",
        script: "../ACCOUNT-ACTIVATION-SERVICE/server.js",
        watch: true,
        instances: 1,
        node_args: "--max_old_space_size=8192",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
        name: "PASSWORD-RECOVERY-SERVICE",
        script: "../PASSWORD-RECOVERY-SERVICE/server.js",
        watch: true,
        instances: 1,
        node_args: "--max_old_space_size=8192",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
      name: "CREATE-PROJECT-SERVICE",
      script: "../CREATE-PROJECT-SERVICE/server.js",
      watch: true,
      instances: 1,
      node_args: "--max_old_space_size=8192",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
  }
  
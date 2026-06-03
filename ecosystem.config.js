module.exports = {
  apps: [
    {
      name: 'docs-techcatalyst-ru',
      cwd: '/Users/ivanborisov/Desktop/MTS/techcatalyst-admin-panel/docs.techcatalyst.ru',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3011,
      },
    },
  ],
}

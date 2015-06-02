Package.describe({
  name: 'filive:style',
  version: '1.0.0',
  summary: 'Styling for FILIVE 2015',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'standard-app-packages',
    'service-configuration',
    'accounts-ui',
    'accounts-base',
    'accounts-password',
    'mobile-status-bar@1.0.3',
    'mongo',
    'momentjs:moment@2.10.3',
    'templating',
    'tmeasday:gravatar@0.0.4',
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles('lib/server/profile-pictures.js', 'server');

  api.addFiles([
    'lib/client/main.html',
    'lib/client/styles.css'
  ], 'client');
});

Package.describe({
  name: 'filive:style',
  version: '1.0.0',
  summary: 'Styling for FILIVE 2015',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('mongo');
  api.use('tmeasday:gravatar@0.0.4');

  api.addFiles('styles.js');
  api.addFiles('styles.css', 'client');
});

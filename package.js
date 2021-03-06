var coreDependencies = [
    'check',
    'ecmascript',
    'svein:serrurier@1.0.0',
    'svein:serrurier-cadenas-defaults@1.0.0',
    'alanning:roles@2.0.0'
];

Npm.depends({
    lodash: '4.11.1'
});

Package.describe({
    name: 'svein:serrurier-cadenas-roles',
    version: '2.0.0',
    // Brief, one-line summary of the package.
    summary: 'Provides cadenas using the alanning:roles package',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/sveinburne/serrurier-cadenas-roles',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse( function( api ) {
    api.versionsFrom( '1.3.4.1' );
    api.use( coreDependencies );
    api.mainModule( 'lib/main.js' );
});
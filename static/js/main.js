require.config({
    baseUrl: 'static/js',

    paths: {
        'backbone': 'vendor/backbone',
        'jquery': 'vendor/jquery',
        'swig': 'vendor/swig',
        'underscore': 'vendor/underscore',
    },
});

require([
    'app',
], function (App) {
    'use strict';

    new App();
});

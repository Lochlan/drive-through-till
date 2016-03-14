require.config({
    baseUrl: 'static/js',

    paths: {
        'backbone': 'vendor/backbone',
        'backbone.localstorage': 'vendor/backbone.localstorage',
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

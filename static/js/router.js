define([
    'jquery',
    'backbone',
], function ($, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({

        app: undefined,

        routes: {
            '': 'home',
            '*notFound': 'notFound',
        },

        initialize: function (options) {
            this.app = options.app;

            Backbone.history.start();
        },

        // route methods

        home: function () {
            this.app.goTo.home();
        },
        notFound: function () {
            this.app.goTo.notFound();
        },
    });

    return Router;
});

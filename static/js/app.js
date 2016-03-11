define([
    'underscore',
    'lib/base-object',
    'router',
    'views/home',
], function (_, BaseObject, Router, HomeView) {
    'use strict';

    var App = BaseObject.extend({

        initialize: function () {
            this.goTo = _.result(this, 'goTo');
            this.router = _.result(this, 'router');
        },

        router: function () {
            return new Router({ app: this });
        },

        goTo: function () {
            return _.object(_.map({
                home: function () {
                    new HomeView({
                        el: '.js-Backbone',
                    });
                },

                notFound: function () {
                    console.log('not found');
                },
            }, function (method, key) {
                return [key, method.bind(this)];
            }.bind(this)));
        },
    });

    return App;
});

define([
    'backbone',
    'templates/home',
], function (Backbone, homeTpl) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: homeTpl,

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return HomeView;
});

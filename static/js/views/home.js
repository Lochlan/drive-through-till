define([
    'backbone',
    'templates/home',
    'views/order-input',
    'views/orders-pending',
], function (Backbone, homeTpl, OrderInputView, OrdersPendingView) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: homeTpl,

        views: function () {
            return {
                orderInput: new OrderInputView({el: '.js-order-input'}),
                ordersPending: new OrdersPendingView({el: '.js-orders-pending'}),
            };
        },

        initialize: function () {
            this.views = _.result(this, 'views');
            this.render();
        },

        render: function () {
            this.$el.html(this.template());

            _(this.views).each(function (subview) {
                subview.setElement(this.$(subview.$el.selector));
                subview.render();
            }.bind(this));

            return this;
        },
    });

    return HomeView;
});

define([
    'underscore',
    'backbone',
    'collections/orders',
    'templates/order-pending',
    'views/order-pending',
], function (_, Backbone, orders, orderPendingTpl, OrderPendingView) {
    'use strict';

    var OrdersPendingView = Backbone.View.extend({
        collection: orders,
        template: orderPendingTpl,
        emptyTemplate: _.template('<em>no orders</em>'),
        views: undefined,

        initialize: function () {
            this.views = [];
            this.render();
            this.listenTo(this.collection, 'update', this.update);
        },

        render: function () {
            this.$el.empty();

            if (this.views.length === 0) {
                this.$el.html(this.emptyTemplate());
                return this;
            }

            this.views.forEach(function (orderPendingView) {
                this.$el.append(orderPendingView.render().el);
                orderPendingView.setElement(orderPendingView.el);
            }.bind(this));

            return this;
        },

        update: function (collection, options) {
            if (options.add) {
                options.changes.added.forEach(function (order) {
                    this.views.push(
                        new OrderPendingView({model: order})
                    );
                }.bind(this));
            }

            this.render();
        }
    });

    return OrdersPendingView;
});

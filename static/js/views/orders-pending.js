define([
    'underscore',
    'backbone',
    'models/app-state',
    'views/order-pending',
], function (_, Backbone, appState, OrderPendingView) {
    'use strict';

    var OrdersPendingView = Backbone.View.extend({
        collection: appState.orders,
        emptyTemplate: _.template('<em>no orders</em>'),
        views: undefined,

        initialize: function () {
            this.views = [];
            this.collection.forEach(function (order) {
                this.views.push(
                    new OrderPendingView({model: order})
                );
            }.bind(this));

            this.render();
            this.listenTo(this.collection, 'update', this.update);
            this.listenTo(appState, 'change', this.render);
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
            if (options.changes.added.length > 0) {
                options.changes.added.forEach(function (addedOrder) {
                    this.views.push(
                        new OrderPendingView({model: addedOrder})
                    );
                }.bind(this));
            }

            if (options.changes.removed.length > 0) {
                options.changes.removed.forEach(function (removedOrder) {
                    this.views.forEach(function (orderPendingView, index) {
                        if (orderPendingView.model === removedOrder) {
                            this.views.splice(index, 1);
                            orderPendingView.remove();
                        }
                    }.bind(this))
                }.bind(this));
            }

            this.render();
        }
    });

    return OrdersPendingView;
});

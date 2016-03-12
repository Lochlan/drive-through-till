define([
    'underscore',
    'backbone',
    'collections/orders',
    'templates/order-pending',
], function (_, Backbone, orders, ordersPendingTpl) {
    'use strict';

    var OrdersPendingView = Backbone.View.extend({
        collection: orders,
        template: ordersPendingTpl,
        emptyTemplate: _.template('<em>no orders</em>'),

        initialize: function () {
            this.render();
            this.listenTo(this.collection, 'update', this.render);
        },

        render: function () {
            this.$el.empty();

            if (this.collection.length === 0) {
                this.$el.html(this.emptyTemplate());
                return this;
            }

            this.collection.each(function (order) {
                this.$el.append(this.template(order.attributes));
            }.bind(this));

            return this;
        },
    });

    return OrdersPendingView;
});

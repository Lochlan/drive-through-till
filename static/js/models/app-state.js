define([
    'backbone',
    'collections/orders',
], function (Backbone, orders) {
    'use strict';

    var AppState = Backbone.Model.extend({
        defaults: {
            editing: false,
        },

        editingOrder: undefined,
        orders: orders,

        initialize: function () {
            this.orders.fetch();
        },

        startEditMode: function (order) {
            if (order) {
                this.editingOrder = order;
            }
            this.set({editing: true});
            this.trigger('edit', order);
        },

        stopEditMode: function (order) {
            this.editingOrder = undefined;
            this.set({editing: false});
            order.save();
        },

        addOrder: function (order) {
            this.orders.add(order);
            order.save();
        },

        removeOrder: function (order) {
            order.destroy();
            this.orders.remove(order);
        },
    });

    return new AppState();
});

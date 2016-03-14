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

        startEditMode: function (order) {
            if (order) {
                this.editingOrder = order;
            }
            this.set({editing: true});
            this.trigger('edit', order);
        },

        stopEditMode: function () {
            this.editingOrder = undefined;
            this.set({editing: false});
        },

        addOrder: function (order) {
            this.orders.add(order);
        },

        removeOrder: function (order) {
            this.orders.remove(order);
        },
    });

    return new AppState();
});

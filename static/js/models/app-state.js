define([
    'backbone',
    'collections/orders',
], function (Backbone, Orders) {
    'use strict';

    var AppState = Backbone.Model.extend({
        defaults: {
            editing: false,
        },

        editingOrder: undefined,
        orders: undefined,

        initialize: function () {
            this.orders = new Orders();
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

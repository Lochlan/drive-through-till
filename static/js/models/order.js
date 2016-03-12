define([
    'backbone',
], function (Backbone) {
    'use strict';

    var Order = Backbone.Model.extend({
        defaults: {
            items: [],
        },

        addItem: function (item) {
            var items = this.get('items');
            var newItems = items.slice(0, items.length);
            newItems.push(item);
            this.set('items', newItems);
        },

        cancel: function () {
            this.set('items', []);
        },
    });

    return Order;
});

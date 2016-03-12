define([
    'backbone',
    'models/order',
], function (Backbone, Order) {
    'use strict';

    var Orders = Backbone.Collection.extend({
        model: Order,
    });

    return new Orders();
});

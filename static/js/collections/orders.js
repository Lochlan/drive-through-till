define([
    'backbone',
    'models/order',
    'backbone.localstorage',
], function (Backbone, Order) {
    'use strict';

    var Orders = Backbone.Collection.extend({
        model: Order,
        localStorage: new Backbone.LocalStorage('DriveThroughOrders'),
    });

    return Orders;
});

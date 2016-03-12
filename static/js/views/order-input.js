define([
    'jquery',
    'backbone',
    'models/order',
    'collections/orders',
    'templates/order-input',
], function ($, Backbone, Order, orders, orderInputTpl) {
    'use strict';

    var OrderInputView = Backbone.View.extend({
        model: undefined,
        template: orderInputTpl,

        initialize: function () {
            this.model = new Order();
            this.render();
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        events: {
            'click .js-item': 'addItem',
            'click .js-submit': 'submitOrder',
            'click .js-cancel': 'cancelOrder',
        },

        addItem: function (event) {
            var item = $(event.target).data('value');
            this.model.addItem(item);
        },

        submitOrder: function () {
            orders.add(this.model);
            this.stopListening();
            this.initialize();
        },

        cancelOrder: function () {
            this.model.cancel();
        },
    });

    return OrderInputView;
});

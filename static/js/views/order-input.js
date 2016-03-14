define([
    'jquery',
    'underscore',
    'backbone',
    'models/app-state',
    'models/order',
    'templates/order-input',
], function ($, _, Backbone, appState, Order, orderInputTpl) {
    'use strict';

    var OrderInputView = Backbone.View.extend({
        model: undefined,
        state: undefined,
        template: orderInputTpl,

        initialize: function (options) {
            options = options || {};
            this.model = options.model || new Order();
            this.render();
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(appState, 'change', this.render);
            this.listenTo(appState, 'edit', this.editOrder);
        },

        render: function () {
            var templateData = _.extend(
                {},
                this.model.attributes,
                appState.attributes
            );
            this.$el.html(this.template(templateData));
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
            if (!this.model.isValid()){
                return;
            }

            if (appState.get('editing') === true) {
                appState.stopEditMode(this.model);
            } else {
                appState.addOrder(this.model);
            }
            this.stopListening();
            this.initialize();
        },

        cancelOrder: function () {
            this.model.cancel();
        },

        editOrder: function (order) {
            this.stopListening();
            this.initialize({model: order});
        },
    });

    return OrderInputView;
});

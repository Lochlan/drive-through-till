define([
    'backbone',
    'models/app-state',
    'templates/order-pending',
], function (Backbone, appState, orderPendingTpl) {
    'use strict';

    var OrderPendingView = Backbone.View.extend({
        el: '<tr>',
        model: undefined,
        template: orderPendingTpl,

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        events: {
            'click .js-cancel': 'cancelOrder',
            'click .js-complete': 'completeOrder',
            'click .js-edit': 'editOrder',
        },

        completeOrder: function () {
            appState.removeOrder(this.model);
        },

        cancelOrder: function () {
            appState.removeOrder(this.model);
        },

        editOrder: function () {
            appState.startEditMode(this.model);
        },
    });

    return OrderPendingView;
});

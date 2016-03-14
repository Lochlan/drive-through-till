define([
    'underscore',
    'backbone',
    'models/app-state',
    'templates/order-pending',
], function (_, Backbone, appState, orderPendingTpl) {
    'use strict';

    var OrderPendingView = Backbone.View.extend({
        el: '<tr>',
        model: undefined,
        template: orderPendingTpl,

        initialize: function () {
            this.render();
            this.listenTo(appState, 'change', this.render);
        },

        render: function () {
            var templateData = _.extend(
                {},
                this.model.attributes,
                _.result(this, 'templateHelpers'),
                appState.attributes
            );
            this.$el.html(this.template(templateData));
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

        templateHelpers: function () {
            return {
                editingThis: appState.editingOrder === this.model,
            };
        },
    });

    return OrderPendingView;
});

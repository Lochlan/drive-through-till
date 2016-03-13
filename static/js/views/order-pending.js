define([
    'backbone',
    'templates/order-pending',
], function (Backbone, orderPendingTpl) {
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
        },

        completeOrder: function () {
            this.model.collection.remove(this.model);
        },

        cancelOrder: function () {
            this.model.collection.remove(this.model);
        },
    });

    return OrderPendingView;
});

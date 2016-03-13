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
    });

    return OrderPendingView;
});

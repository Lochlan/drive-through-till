define([
    'underscore',
    'backbone',
    'collections/orders',
], function (_, Backbone, orders) {
    'use strict';

    var AlertView = Backbone.View.extend({
        collection: orders,
        template: _.template('<div class="manager-alert">MORE THAN FOUR PENDING ORDERS, ALERT MANAGER</div>'),
        emptyTemplate: _.template('<em>no alerts</em>'),

        initialize: function () {
            this.render();
            this.listenTo(this.collection, 'update', this.render);
        },

        render: function () {
            if (this.collection.length <= 4) {
                this.$el.html(this.emptyTemplate());
            } else {
                this.$el.html(this.template());
            }

            return this;
        },
    });

    return AlertView;
});

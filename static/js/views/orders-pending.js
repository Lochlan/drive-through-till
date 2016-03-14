define([
    'underscore',
    'backbone',
    'models/app-state',
    'views/order-pending',
], function (_, Backbone, appState, OrderPendingView) {
    'use strict';

    var OrdersPendingView = Backbone.View.extend({
        collection: appState.orders,
        emptyTemplate: _.template('<em>no orders</em>'),
        views: undefined,
        ChildView: undefined,

        initialize: function () {
            this.ChildView = OrderPendingView;
            this.views = [];
            this.collection.forEach(function (order) {
                this.views.push(
                    new this.ChildView({model: order})
                );
            }.bind(this));

            this.render();
            this.listenTo(this.collection, 'update', this.update);
            this.listenTo(appState, 'change', this.render);
        },

        render: function () {
            this.$el.empty();

            if (this.views.length === 0) {
                this.$el.html(this.emptyTemplate());
                return this;
            }

            this.views.forEach(function (childView) {
                this.$el.append(childView.render().el);
                childView.setElement(childView.el);
            }.bind(this));

            return this;
        },

        update: function (collection, options) {
            if (options.changes.added.length > 0) {
                options.changes.added.forEach(function (addedModel) {
                    this.views.push(
                        new this.ChildView({model: addedModel})
                    );
                }.bind(this));
            }

            if (options.changes.removed.length > 0) {
                options.changes.removed.forEach(function (removedModel) {
                    this.views.forEach(function (childView, index) {
                        if (childView.model === removedModel) {
                            this.views.splice(index, 1);
                            childView.remove();
                        }
                    }.bind(this));
                }.bind(this));
            }

            this.render();
        }
    });

    return OrdersPendingView;
});

/**
*
* views/NavView.js
*
* renders the Nav in the sidebar, listens for changes to to NavCollection
*
**/

'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
Backbone.$ = $;

function NavView() {

    /*********************
    *
    *       PRIVATE
    *
    **********************/
    var view = {};

    /*********************
    *
    *       PUBLIC
    *
    **********************/
    var initialize = function(collection) {
        var View = Backbone.View.extend({

            el: '#dashboard-menu',
            collection: collection,
            tagName: 'li',
            template: _.template($('#navItemTemplate').html()),

            events: {
                'click li.navButton':'clickNav'
            },

            clickNav: function(event) {
                _.each(this.collection.models, function(model) {
                    model.set({selected:false}, {silent: true});
                });

                var model = this.collection.findWhere({id: $(event.currentTarget).attr('id')});
                model.set({selected:true});
            },

            render: function() {
                this.$el.html(this.template({items: this.collection.toJSON()}));
            },

            initialize: function() {
                this.render();
                this.listenTo(this.collection, 'change', this.render);
            }
        });

        view = new View();
    };

    var getNavView = function() {
        return view;
    };

    /*********************
    *
    *      INTERFACE
    *
    **********************/
    return {
        initialize: initialize,
        getNavView: getNavView
    };
}

module.exports = NavView;
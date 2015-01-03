/**
*
* models/NavCollection.js
*
* a collection of NavItem models
*
**/

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

function NavCollection() {

    /*********************
    *
    *       PRIVATE
    *
    **********************/
    var nav = {};

    /*********************
    *
    *       PUBLIC
    *
    **********************/
    var initialize = function() {

        // define nav model
        var NavItem = Backbone.Model.extend({
            defaults: {
                id: '',
                text: '',
                icon: '',
                selected: false
            },
            initialize: function() {}
        });

        // define nav collection
        var NavItems = Backbone.Collection.extend({
            model: NavItem
        });

        // instance of the collection
        nav = new NavItems();

        // create each nav item model
        var overview = new NavItem({id:'overview', text:'Overview', icon:'fa fa-line-chart', href:'#overview', selected: true});
        // var reports = new NavItem({id:'reports', text:'Revenue Reports', icon:'fa fa-file-excel-o', href:'#reports', selected: false});
        // var overview = new NavItem({id:'daily', text:'KPI Daily', icon:'fa fa-newspaper-o', href:'#daily', selected: true});
        // var monthly = new NavItem({id:'monthly', text:'KPI Monthly', icon:'fa fa-calendar', href:'#monthly', selected: false});
        // var trends = new NavItem({id:'trends', text:'KPI Trends', icon:'fa fa-bar-chart-o', href:'#trends', selected: false});

        // add instance of model to collection
        nav.add(overview);
        // nav.add(reports);
        // nav.add(overview);
        // nav.add(monthly);
        // nav.add(trends);
    };

    var getModel = function() {
        return nav;
    };

    /*********************
    *
    *      INTERFACE
    *
    **********************/
    return {
        initialize: initialize,
        getModel: getModel
    };
}

module.exports = NavCollection;
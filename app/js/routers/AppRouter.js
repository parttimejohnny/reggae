/**
*
* routers/AppRouter.js
*
* main router for the application, controls routing and tracks history
*
**/

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Overview = require('../modules/Overview');
// var KpiMonthly = require('../modules/KpiMonthly');
// var KpiTrends = require('../modules/KpiTrends');
// var RevenueReports = require('../modules/RevenueReports');
// var RevenueCharts = require('../modules/RevenueCharts');


function AppRouter() {

    /*********************
    *
    *       PRIVATE
    *
    **********************/
    var Router = {};

    /*********************
    *
    *       PUBLIC
    *
    **********************/
    var router = {};
    var initialize = function() {
        Router = Backbone.Router.extend({
            routes:{
                '': 'overview',
                overview: 'overview'
            },
            overview: function() {
                var ov = new Overview();
                ov.initialize();
            },
            otherRoute: function() {
                console.log('other');
            }
        });

        router = new Router();

        Backbone.history.start();
    };

    var getRouter = function() {
        return router;
    };

    /*********************
    *
    *      INTERFACE
    *
    **********************/
    return {
        initialize: initialize,
        getRouter: getRouter
    };
}

module.exports = AppRouter;

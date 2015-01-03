/**
*
* scripts/main.js
*
* This is the starting point for your application.
* Take a look at http://browserify.org/ for more info
*
**/

'use strict';

// libs
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

// modules
var AppRouter = require('./routers/AppRouter');
var NavCollection = require('./models/NavCollection');
var NavView = require('./views/NavView');
var ContentView = require('./views/ContentView');

// app object
var app = window.app || {};

$(document).ready(function() {
    var router = new AppRouter();
    router.initialize();
    app.router = router.getRouter();

    var navModel = new NavCollection();
    navModel.initialize();
    app.navModel = navModel.getModel();

    app.nav = new NavView();
    app.nav.initialize(app.navModel);

    app.content = new ContentView();
    app.content.initialize();

    // a minor hack, but works.
    $('#daily').removeClass('active');
    if(Backbone.history.fragment === '') {
        $('#charts').addClass('active');
    } else {
        $('#'+Backbone.history.fragment).addClass('active');
    }
});

/**
 * scripts/app.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var $ = require('jquery');
var _ = require('lodash');

var overviewData = {};
var overviewTable = {};


function Overview() {

    /*********************
    *
    *       PRIVATE
    *
    **********************/
    function getData() {
        $.ajax({
            async: false,
            dataType: 'json',
            type: 'POST',
            url: 'helpers/get_data.php',

            success: function(data) {
                overviewData = data;
                console.log(overviewData);
                createTable();
            },

            error: function(jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    }

    function createTable() {
        _.each(overviewData, function(record) {
            // find the metrics object for this game
            console.log(record);
        });
        hideMessage();
    }

    // function populateRow(metrics, table, game, gameID) {
    //     var newRow = [game];
    //     _.each(columnData, function(column) {
    //         var val = metrics[column.column_name];
    //         val = (val === undefined) ? 'n/a' : formatValue(val, column.column_name, gameID);
    //         newRow.push(val);
    //     });
    //     table.row.add(newRow).draw();
    // }

    function showMessage(msg) {
        $('#msgText').html(msg);
        $('#msgText').fadeIn();
    }

    function hideMessage() {
        $('#msgText').fadeOut();
    }

    /*********************
    *
    *       PUBLIC
    *
    **********************/
    var initialize = function() {
        showMessage('loading data <i class="fa fa-spinner fa-spin"></i>');
        $('#titleText').html('<span class="fa fa-newspaper-o"></span> Reggae Mon');

        // add the html
        var content = require('../partials/overview.html');
        $('#contentContainer').empty();
        $('#contentContainer').html(content);

        // set up the table columns
        $('#overviewTable').append('<thead><tr><th>ARTIST_A</th><th>TITLE_A</th><th>ARTIST_B</th><th>TITLE_B</th><th>LABEL</th><th>PRODUCER</th><th>PRODUCER_2</th><th>FORMAT</th><th>YEAR_A</th><th>YEAR_B</th><th>RIDDIM_A</th><th>RIDDIM_B</th><th>GENRE_A</th><th>GENRE_B</th></tr></thead>');

        // initialize the datatables
        overviewTable = $('#overviewTable').DataTable({searching: false, paging: false, info: false});

        // get the rest of the data
        getData();
    };

    /*********************
    *
    *      INTERFACE
    *
    **********************/
    return {
        initialize: initialize,
    };
}

module.exports = Overview;

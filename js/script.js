/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    $('select').material_select();


    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            $('body').css('width','100% !important');
            //  alert("Ready");
            //  console.log(modal, trigger);
        },
        complete: function () {
            
            // alert('Closed');
        } // Callback for Modal close
    }
    );
    $(".button-collapse").sideNav();
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
    );



    if (is_touch_device()) {
        $('.side-nav').css('overflow-y', 'auto')
    }
    function is_touch_device() {
        return 'ontouchstart' in window        // works on most browsers 
                || 'onmsgesturechange' in window;  // works on IE10 with some false positives
    }
    ;



});

$('#collapse1 .collapsible-header ').unbind().click(function () {
    var x = $(this).children('i').text();
    if (x == 'remove_circle_outline') {
        $('#collapse1 .collapsible-header').children('i').text('add_circle_outline');
        $(this).children('i').text('add_circle_outline');
    } else {
        $('#collapse1 .collapsible-header').children('i').text('add_circle_outline');
        $(this).children('i').text('remove_circle_outline');
    }



});
$('#collapse2 .collapsible-header ').unbind().click(function () {
    var x = $(this).children('i').text();
    if (x == 'remove_circle_outline') {
        $('#collapse2 .collapsible-header').children('i').text('add_circle_outline');
        $(this).children('i').text('add_circle_outline');
    } else {
        $('#collapse2 .collapsible-header').children('i').text('add_circle_outline');
        $(this).children('i').text('remove_circle_outline');
    }



});



$('.datepicker').pickadate({

    selectMonths: true, // Creates a dropdown to control month
    selectYears: 10, // Creates a dropdown of 15 years to control year
    onSet: function (context) {
        $('#dat_inMs').val(context.select);
        // alert($('#dat_inMs').val());
        // console.log('Just set stuff:', context.select)
    }

});

var $input = $('.datepicker').pickadate();

// Use the picker object directly.
var picker = $input.pickadate('picker');
picker.clear();


    
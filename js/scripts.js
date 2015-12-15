/*

 My Custom JS
 =============

 Author:  ...
 Updated: December 2015
 Notes:	 For my Education

 */

$(function(){
    //alert
    $('#alertMe').click(function(e){
        e.preventDefault();
        $('#successAlert').slideDown();
    });

    //pop
    $('a.pop').click(function(e){
        e.preventDefault();
    });

    //popover
    $('a.pop').popover();

    //tooltip
    $('[rel="tooltip"]').tooltip();
});



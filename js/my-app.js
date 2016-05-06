// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true
    // Specify Template7 data for pages
  });
// Export selectors engine
var $$ = Dom7;

// Defined as function "getrandom"
function loadParts() {
  $$.getJSON('parts.json', function (json) {
   myApp.template7Data.partlist =   json ;
  });
};

//---------------------
var todoData = localStorage.td7Data ? JSON.parse(localStorage.td7Data) : [];
//---------------------
loadParts();

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});


//Event listener
$$(document).on('pageInit', function (e) { //start listener



}) //end listener

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


loadParts();

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});

//Event listener

$$(document).on('pageInit', function (e) {

  $$('.get-storage-data').on('click', function() {
    var storedData = myApp.formGetData('my-form2');
    if(storedData) {
      alert(JSON.stringify(storedData));
    }
    else {
      alert('There is no stored data for this form yet. Try to change any field')
    }
  });

  $$('.delete-storage-data').on('click', function() {
    var storedData = myApp.formDeleteData('my-form2');
    alert('Form data deleted')
  });

  $$('.save-storage-data').on('click', function() {
    var storedData = myApp.formStoreData('my-form2', {
      'title': 'John',
      'name': 'john@doe.com',
      'date': 'female',
      'inspection': ['yes'],
      'notes': 'Hey'
    });
    alert('Form data replaced, refresh browser to see changes')
  });

})

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

//new below

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
   'name': 'John',
   'date': 'john@doe.com',
   'inspection': ['yes'],
   'notes': 'I am the Tide',
 });
 alert('Form data replaced, refresh browser to see changes')
});


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

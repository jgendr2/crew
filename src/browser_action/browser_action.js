Firebase.enableLogging(true);
var f = new Firebase('https://jason.firebaseio.com/');



f.transaction(function(curr) {
  if (isNaN(parseFloat(curr)))
    return 1; // initialize to 1.
  else
    return curr + 1; // increment.
}, function() {
    // Once the transaction has completed, update the UI (and watch for updates).
    f.on('value', function(s) {

    	chrome.browserAction.setBadgeText({text: '' + s.val() + '' });

      document.getElementById('contents').innerHTML = s.val();
    });
  });

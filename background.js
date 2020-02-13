chrome.runtime.onInstalled.addListener(function() {
    console.log("Waiting for Skylinks");
});

// This event is fired with the user types skynet in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    var newURL = 'https://siasky.net/' + text.replace("sia://","");
    chrome.tabs.create({ url: newURL });
  });
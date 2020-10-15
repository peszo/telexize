chrome.webNavigation.onCommitted.addListener(function() {
  console.log("this is index!");
  chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
    let newurl = "https://telex.hu";
    chrome.tabs.update(tab.id, {url: newurl});
  });
}, {url: [{urlMatches : 'https://index.hu/*'}]});

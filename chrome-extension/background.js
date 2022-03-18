chrome.action.setBadgeText({text: '78'});
chrome.action.setBadgeBackgroundColor({color: '#e82727'});

chrome.tabs.executeScript({file: "app.js"});
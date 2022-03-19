chrome.action.setBadgeText({text: '95'});
chrome.action.setBadgeBackgroundColor({color: '#e82727'});

async function getCurrentTab() {/* ... */}
let tab = await getCurrentTab();

chrome.scripting.executeScript({
  target: {tabId: tab.id},
  files: ['content-script.js']
});

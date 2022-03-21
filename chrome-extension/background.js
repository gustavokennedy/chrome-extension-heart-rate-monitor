chrome.storage.local.set({frequencia: '55'}); // precisa setar com heartRates do app.js
chrome.storage.local.get(["frequencia"], ({ frequencia }) => {
    chrome.action.setBadgeText({ text: frequencia });
    chrome.action.setBadgeBackgroundColor({color: '#e82727'});
});

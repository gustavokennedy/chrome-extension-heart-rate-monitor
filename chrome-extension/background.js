var heartRates = ['10', '20', '30'];
chrome.storage.local.set({frequencia: heartRates[heartRates.length - 1]}); // precisa setar com heartRates do app.js
chrome.storage.local.get(["frequencia"], ({ frequencia }) => {
    chrome.action.setBadgeText({ text: frequencia });
    chrome.action.setBadgeBackgroundColor({color: '#e82727'});
});

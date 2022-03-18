/* 
chrome.action.setBadgeText({text: '78'});
chrome.action.setBadgeBackgroundColor({color: '#e82727'});

chrome.action.setPopup({popup: 'popup.html'});

Para login
chrome.storage.local.get('signed_in', (data) => {
    if (data.signed_in) {
      chrome.action.setPopup({popup: 'popup.html'});
    } else {
      chrome.action.setPopup({popup: 'popup.html'});
    }
  });
*/
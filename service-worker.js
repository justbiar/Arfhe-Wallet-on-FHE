chrome.action.onClicked.addListener(tab => {7
     chrome.scripting.executeScript({
       target: {tabId: tab.id},
       func: () => {
          alert('Arfhe Wallet')
       }
     });
});
chrome.runtime.onInstalled.addListener(() => {
  chrome.browsingData.removeCache({}, () => {
    console.log("Extension yüklendi, cache temizlendi.");
  });
});

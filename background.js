chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      chrome.tabs.executeScript(tabId, { code: 'document.documentElement.outerHTML' }, result => {
        if (result && result[0]) {
          chrome.runtime.sendMessage({ type: 'html', html: result[0] });
        }
      });
    }
  });
  
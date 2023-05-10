chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'html') {
      console.log(message.html);
    }
  });
  
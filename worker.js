chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Check if the URL of the updated tab has changed
  if (changeInfo && changeInfo.url) {
    if (changeInfo.url.includes("/watch?v=")) {
      sendMsg("open_video");
    }
    if (changeInfo.url === "https://www.youtube.com/") {
      sendMsg("back_home");
    }
    if (changeInfo.url.includes("/shorts/")) {
      sendMsg("opened_shorts");
    }
  }
});
function sendMsg(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    if (!tabs || tabs.length === 0) {
      console.error("No active tab found!");
      return;
    }

    try {
      await chrome.tabs.sendMessage(tabs[0].id, { action: message });
      console.log("Sent message to Skipper");
    } catch (error) {
      console.error("Failed to send message to Skipper:", error);
    }
  });
}

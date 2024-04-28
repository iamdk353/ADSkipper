function init() {
  console.log("hello youtube", window.location.href);
  alert(`hello ${window.location.href}`);
  //https://www.youtube.com/
  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    const { action } = message;
    if (action === "open_video") {
      console.log("Initializing ad-module watcher");
      const interval = setInterval(() => {
        const len = getAdModule().length;
        console.log("Recheck", len); // Rechecking for the ad module
        if (len === 1) {
          clearInterval(interval);
          console.log("Found ad module");
          watchModule(getAdModule());
        }
      }, 900);
      setTimeout(() => {
        clearInterval(interval); // Automatically stop searching for the ad module after 60 seconds
      }, 60000);
    } else if (action === "back_home") {
      console.log("Removing ad-module watcher");
    }
  });
  function getAdModule() {
    let ad = document.getElementsByClassName("video-ads ytp-ad-module")[0];
    return ad;
  }
  function watchModule(eleToWatch) {
    console.log("watching ", eleToWatch[0]);
    detectChanges(eleToWatch[0]);
  }
  function detectChanges(eleToWatch) {
    let observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        let mutated = mutation.addedNodes;
        mutated.forEach((node) => {
          if (node instanceof Element) {
            console.log(listAllNodes(node));
            skipAdd(listAllNodes(node));
          }
        });
      });
    });
    let config = { childList: true, subtree: true };
    observer.observe(eleToWatch, config);
  }

  function listAllNodes(parentNode) {
    console.log("list all nodes are called");
    const allNodes = [];
    function traverse(node) {
      allNodes.push(node.className);
      if (node.childNodes.length > 0) {
        node.childNodes.forEach((childNode) => {
          traverse(childNode);
        });
      }
    }
    traverse(parentNode);
    const filtered = allNodes.filter(
      (item) =>
        item !== undefined &&
        item !== "SVGAnimatedString {baseVal: '', animVal: ''}" &&
        typeof item !== "object" &&
        item !== ""
    );
    // filtered.forEach((i) => console.log(i));
    return filtered;
  }
  function skipAdd(list) {
    if (
      list.includes("ytp-skip-ad-button") ||
      list.includes("ytp-ad-skip-button-modern ytp-button")
    ) {
      document.getElementsByClassName("ytp-skip-ad-button")[0].click();
      console.log("add skipped");
    } else {
      console.log("this cant be skipped");
      // location.reload();
    }
  }
}
init();

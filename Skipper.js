// the extension should be active only in youtube domain
// check weather the user has open any youtube video  by using url :: https://www.youtube.com/watch/*
// add a observer to the ad-module that has class name :: "video-ads ytp-ad-module"
// if ad-module gets any child then target the skip ad button with class name :: "ytp-skip-ad-button"
/*
<button class="ytp-skip-ad-button" id="skip-button:1i" style="">
  <div class="ytp-skip-ad-button__text">Skip</div>
  <span class="ytp-skip-ad-button__icon">
    <svg height="100%" viewBox="-6 -6 36 36" width="100%">
      <path d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z" fill="#fff"></path>
    </svg>
  </span>
</button>


*/

/**
 * 
 * ------------------------------------------------
 * when the ad cannot be skipped this will be added 
 * ------------------------------------------------
 * 
 * <div class="video-ads ytp-ad-module" data-layer="4">
  <div
    class="ytp-ad-player-overlay-layout"
    id="player-overlay-layout:0"
    style="text-decoration: none"
  >
    <div class="ytp-ad-player-overlay-layout__player-card-container"></div>
    <div class="ytp-ad-player-overlay-layout__ad-info-container">
      <span
        class="ytp-ad-simple-ad-badge"
        id="simple-ad-badge:2"
        style="text-decoration: none"
        ><div
          class="ytp-ad-text"
          id="simple-ad-badge:3"
          style="text-decoration: none"
        >
          Sponsored ·
        </div></span
      ><span
        class="ytp-ad-duration-remaining"
        id="ad-duration-remaining:4"
        style="text-decoration: none"
        ><div class="ytp-ad-text" id="ad-text:5" style="text-decoration: none">
          0:02
        </div></span
      ><span
        class="ytp-ad-hover-text-button ytp-ad-info-hover-text-button"
        id="ad-info-hover-text-button:6"
        style="text-decoration: none"
        ><button
          class="ytp-ad-button ytp-ad-button-link ytp-ad-clickable"
          id="button:7"
          aria-label="My Ad Centre"
          style="text-decoration: none"
        >
          <span class="ytp-ad-button-icon"
            ><svg
              fill="#fff"
              height="100%"
              version="1.1"
              viewBox="0 0 48 48"
              width="100%"
            >
              <path d="M0 0h48v48H0z" fill="none"></path>
              <path
                d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"
              ></path></svg
          ></span>
        </button>
        <div class="ytp-ad-hover-text-container ytp-ad-info-hover-text-short">
          My Ad Centre
          <div class="ytp-ad-hover-text-callout"></div></div
      ></span>
      <div
        class="ytp-visit-advertiser-link ytp-ad-component--clickable"
        id="visit-advertiser-link:8"
        aria-label="swiggy.com This link opens in new tab"
        role="link"
        tabindex="0"
        style="text-decoration: none"
      >
        <span class="ytp-visit-advertiser-link__text">swiggy.com</span>
      </div>
    </div>
    <div class="ytp-ad-player-overlay-layout__skip-or-preview-container">
      <div
        class="ytp-preview-ad"
        id="ad-preview:1"
        style="text-decoration: none"
      >
        <div class="ytp-preview-ad__text ytp-preview-ad__text--font--small">
          Video plays soon
        </div>
        <img
          class="ytp-preview-ad__image"
          src="https://i.ytimg.com/vi/78k5-LZwLBo/mqdefault.jpg"
        />
      </div>
    </div>
  </div>
</div>

 * 
 * 
 * 
 * 
 */
//==============================================
/**
 * ------------------------------------
 * when ad can be skipped this is added
 * ------------------------------------
 * 
 * <div class="video-ads ytp-ad-module" data-layer="4">
  <div
    class="ytp-ad-player-overlay-layout"
    id="player-overlay-layout:0"
    style="text-decoration: none"
  >
    <div class="ytp-ad-player-overlay-layout__player-card-container"></div>
    <div class="ytp-ad-player-overlay-layout__ad-info-container">
      <span
        class="ytp-ad-simple-ad-badge"
        id="simple-ad-badge:4"
        style="text-decoration: none"
        ><div
          class="ytp-ad-text"
          id="simple-ad-badge:5"
          style="text-decoration: none"
        >
          Sponsored ·
        </div></span
      ><span
        class="ytp-ad-duration-remaining"
        id="ad-duration-remaining:6"
        style="text-decoration: none"
        ><div class="ytp-ad-text" id="ad-text:7" style="text-decoration: none">
          0:35
        </div></span
      ><span
        class="ytp-ad-hover-text-button ytp-ad-info-hover-text-button"
        id="ad-info-hover-text-button:8"
        style="text-decoration: none"
        ><button
          class="ytp-ad-button ytp-ad-button-link ytp-ad-clickable"
          id="button:9"
          aria-label="My Ad Centre"
          style="text-decoration: none"
        >
          <span class="ytp-ad-button-icon"
            ><svg
              fill="#fff"
              height="100%"
              version="1.1"
              viewBox="0 0 48 48"
              width="100%"
            >
              <path d="M0 0h48v48H0z" fill="none"></path>
              <path
                d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"
              ></path></svg
          ></span>
        </button>
        <div class="ytp-ad-hover-text-container ytp-ad-info-hover-text-short">
          My Ad Centre
          <div class="ytp-ad-hover-text-callout"></div></div
      ></span>
      <div
        class="ytp-visit-advertiser-link ytp-ad-component--clickable"
        id="visit-advertiser-link:a"
        aria-label="docs.google.com/forms/d/e/1faipq... This link opens in new tab"
        role="link"
        tabindex="0"
        style="text-decoration: none"
      >
        <span class="ytp-visit-advertiser-link__text"
          >docs.google.com/forms/d/e/1faipq...</span
        >
      </div>
    </div>
    <div class="ytp-ad-player-overlay-layout__skip-or-preview-container">
      <div class="ytp-skip-ad" id="skip-ad:1" style="text-decoration: none">
        <div class="ytp-preview-ad" id="preview-ad:2" style="display: none">
          <div class="ytp-preview-ad__text">1</div>
          <img
            class="ytp-preview-ad__image"
            src="https://i.ytimg.com/vi/Dl-BdxNRUqs/mqdefault.jpg?sqp=-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUShQMA8=&amp;rs=AOn4CLA1QC_ZFKOgx7GH7sDjNMpWNl4roA"
          />
        </div>
        <button
          class="ytp-skip-ad-button"
          id="skip-button:3"
          style="opacity: 0.5"
        >
          <div class="ytp-skip-ad-button__text">Skip</div>
          <span class="ytp-skip-ad-button__icon"
            ><svg height="100%" viewBox="-6 -6 36 36" width="100%">
            <path
            d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z"
            fill="#fff"
            ></path></svg
            ></span>
            </button>
            </div>
            </div>
            </div>
            </div>
            
            */

// function skipAdd(eleToWatch) {
//   console.log("called skip add", eleToWatch);
//   let skipBtn = eleToWatch.getElementsByClassName("ytp-skip-ad-button")[0];
//   console.log("skipp button", skipBtn);
//   skipBtn?.click();
//   console.log("add skipped");
// }

function init() {
  class ADSkipper {
    constructor() {
      this.inHome = true;
      console.log("hello youtube", window.location.href);
      chrome.runtime.onMessage.addListener((message) => {
        const { action } = message;
        if (action === "open_video") {
          this.inHome = false;

          console.log("opened a video");
          console.log("check for ad module ");
          this.watchPrimeRoot();
        }
        if (action === "back_home") {
          this.inHome = true;
          console.log("in home page");
          console.log("remove ad module watcher ");
          console.log("clear all time intervals");
        }
        if (action === "opened_shorts") {
          this.inHome = false;
          console.log(" in shorts page");
          this.checkShortsAd();
        }
      });
    }
    watchPrimeRoot() {
      let foundAdModule = false;
      console.log("watching prime root");
      const primeEle = document.getElementById("movie_player");
      if (
        this.listTopLevelNodes(primeEle).includes("video-ads ytp-ad-module")
      ) {
        console.log("ad module found from root");
        this.getAdModule();
      } else {
        console.log("sending to recheck");
        this.recheck(primeEle, foundAdModule);
      }
    }
    listTopLevelNodes(parentNode) {
      // console.log("list top level nodes are called");
      const topLevelNodes = [];
      Array.from(parentNode.children).forEach((childNode) => {
        topLevelNodes.push(childNode.className);
      });
      const filtered = topLevelNodes.filter(
        (item) =>
          item !== undefined &&
          item !== "SVGAnimatedString {baseVal: '', animVal: ''}" &&
          typeof item !== "object" &&
          item !== ""
      );
      return filtered;
    }
    recheck(ele, foundAdModule) {
      // console.log("recheck called");
      const list = this.listTopLevelNodes(ele);
      if (foundAdModule) return list;
      if (list.includes("video-ads ytp-ad-module")) {
        console.log("ad module found from recheck");
        this.getAdModule();
        foundAdModule = true;
        return list;
      } else {
        console.log("rechecking.... for ad module");
        setTimeout(() => {
          this.recheck(ele, foundAdModule);
        }, 1000);
      }
    }
    getAdModule() {
      const adModule = document.querySelector(".video-ads.ytp-ad-module");
      console.log("found ad module ");
      this.detectChanges(adModule);
      console.log("watch the ad module");
    }
    detectChanges(eleToWatch) {
      console.log("watching the ad module");
      let observer = new MutationObserver((mutationsList) => {
        console.log("mutations observed");
        mutationsList.forEach((mutation) => {
          let mutated = mutation.addedNodes;
          mutated.forEach((node) => {
            if (node instanceof Element) {
              const primeList = this.listAllNodes(node);
              // console.log(this.listAllNodes(node));
              this.checkAdType(primeList);
              // skipAdd(listAllNodes(node));
            }
          });
        });
      });
      let config = { childList: true, subtree: true };
      observer.observe(eleToWatch, config);
    }
    listAllNodes(parentNode) {
      // console.log("list all nodes are called");
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
      return filtered;
    }
    checkAdType(list) {
      if (
        list.includes("ytp-ad-skip-button-modern ytp-button") ||
        list.includes("ytp-skip-ad-button")
      ) {
        console.log("ad can be skipped ");
        const index =
          list.indexOf("ytp-ad-skip-button-modern ytp-button") ||
          list.indexOf("ytp-skip-ad-button");
        if (index) {
          let className = list[index];
          const button = document.getElementsByClassName(className)[0];
          if (button) {
            console.log("button found");
            button.click();
            console.log("\t\t\t\tad skipped");
          }
        }
      } else if (
        list.includes("ytp-ad-text ytp-ad-preview-text-modern") ||
        list.includes("ytp-preview-ad__text ytp-preview-ad__text--font--small")
      ) {
        console.log("\t\t\t\tad cannot be skipped ");
      }
    }
    checkShortsAd() {
      console.log(document.querySelectorAll("[is-active]")[1]);
    }
  }
  const adSkipObj = new ADSkipper();
}
init();

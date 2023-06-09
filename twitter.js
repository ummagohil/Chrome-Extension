function hideTwitterNumbers() {
  const followersFollowing = document.querySelectorAll(
    "span.css-901oao.css-16my406.r-18jsvk2.r-poiln3.r-1b43r93.r-b88u0q.r-1cwl3u0.r-bcqeeo.r-qvutc0"
  );
  const followersFollowingDarkMode = document.querySelectorAll(
    "span.css-901oao.css-16my406.r-1nao33i.r-poiln3.r-1b43r93.r-b88u0q.r-1cwl3u0.r-bcqeeo.r-qvutc0"
  );
  const likes = document.querySelectorAll(
    "div.css-901oao.css-1hf3ou5.r-14j79pv.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-bcqeeo.r-qvutc0"
  );
  const likesDarkMode = document.querySelectorAll(
    "div.css-901oao.css-1hf3ou5.r-1bwzh9t.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-bcqeeo.r-qvutc0"
  );
  followersFollowing.forEach((followersFollowing) => {
    followersFollowing.style.display = "none";
  });
  followersFollowingDarkMode.forEach((followersFollowingDarkMode) => {
    followersFollowingDarkMode.style.display = "none";
  });
  likes.forEach((likes) => {
    likes.style.display = "none";
  });
  likesDarkMode.forEach((likesDarkMode) => {
    likesDarkMode.style.display = "none";
  });
}

function observeTwitterChanges() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        hideTwitterNumbers();
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

hideTwitterNumbers();
observeTwitterChanges();

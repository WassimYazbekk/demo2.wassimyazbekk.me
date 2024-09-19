document.addEventListener("DOMContentLoaded", () => {
  const contentDropDownTrigger = document.getElementById("instagram-logo");
  const contentDropDown = document.getElementById("content-filter");
  const postDropDownTrigger = document.getElementById("post-trigger");
  const postDropDown = document.getElementById("post-menu");
  const overlay = document.getElementById("overlay");

  const toggleContentDropDown = () => {
    if (contentDropDown.classList.contains("open")) {
      contentDropDown.classList.remove("open");
      overlay.classList.remove("visible");
      contentDropDownTrigger.setAttribute("aria-expanded", "false");
    } else {
      contentDropDown.classList.add("open");
      overlay.classList.add("visible");
      contentDropDownTrigger.setAttribute("aria-expanded", "true");
    }
  };

  const togglePostDropDown = () => {
    if (postDropDown.classList.contains("open")) {
      postDropDown.classList.remove("open");
      overlay.classList.remove("visible");
      postDropDownTrigger.setAttribute("aria-expanded", "false");
    } else {
      postDropDown.classList.add("open");
      overlay.classList.add("visible");
      postDropDownTrigger.setAttribute("aria-expanded", "true");
    }
  };

  const closeDropDowns = () => {
    if (postDropDown.classList.contains("open")) {
      postDropDown.classList.remove("open");
      overlay.classList.remove("visible");
      postDropDownTrigger.setAttribute("aria-expanded", "false");
    }

    if (contentDropDown.classList.contains("open")) {
      contentDropDown.classList.remove("open");
      overlay.classList.remove("visible");
      contentDropDownTrigger.setAttribute("aria-expanded", "false");
    }
  };

  contentDropDownTrigger.addEventListener("click", toggleContentDropDown);
  postDropDownTrigger.addEventListener("click", togglePostDropDown);
  overlay.addEventListener("click", closeDropDowns);

  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "Escape" && contentFilter.classList.contains("open")) {
  //     closeContentFilter();
  //   }
  // });
});

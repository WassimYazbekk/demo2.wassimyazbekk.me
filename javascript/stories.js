document.addEventListener("DOMContentLoaded", () => {
  const stories = document.getElementById("stories-section");
  for (let i = 0; i < 10; ++i) {
    stories.insertAdjacentHTML(
      "beforeend",
      `
      <div class="story-container">
        <div class="story-img-container ${i > 5 ? "seen" : ""}">
          <img
            class="story-img"
            src="https://placehold.co/400"
            alt="story image"
          />
        </div>
        <h1 class="story-name">Username${i + 1}</h1>
      </div>
    `,
    );
  }
});

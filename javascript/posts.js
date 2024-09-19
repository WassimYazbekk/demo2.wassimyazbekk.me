const posts = document.getElementById("posts-section");
const loading = document.getElementById("loading");
const postSizes = [
  "400",
  "500",
  "600",
  "700",
  "800",
  "400x600",
  "400x800",
  "900x1200",
  "1600x900",
];

let postCount = 10;
let loadingInProgress = false;

function createPost() {
  const postComponent = `
    <div class="card">
      <div class="card-header">
        <div class="user-details">
          <div class="profile-img-container">
            <img
              class="profile-img"
              src="https://placehold.co/400"
              alt=""
            />
          </div>
          <h1>Username . <span class="text-link">Follow</span></h1>
        </div>

        <!-- Post Actions Trigger -->
        <div class="post-actions-trigger">
          <img src="assets/svg/more.svg" alt="" />
        </div>
      </div>
      <div class="card-img-container">
        <img class="card-img" src="https://placehold.co/${postSizes[Math.floor(Math.random() * postSizes.length)]}" alt="" />
      </div>
      <div class="card-footer">
        <div class="card-actions">
          <div class="flex-gap-16">
          <img src="assets/svg/notifications.svg" alt="" />
          <img src="assets/svg/comment.svg" alt="" />
          <img src="assets/svg/share.svg" alt="" />
          </div>
          <div>
          <img src="assets/svg/save.svg" alt="" />
          </div>
        </div>
        <h3>123 likes</h3>
        <p>
          <span class="bold">Username</span> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
        <p class="text-muted">View all 32 comments</p>
        <p class="text-muted">
          9 hours ago . <span class="bold">See translation</span>
        </p>
      </div>
    </div>
  `;
  return postComponent;
}

function loadPosts() {
  if (loadingInProgress) return;

  loadingInProgress = true;
  loading.style.display = "flex";

  setTimeout(() => {
    for (let i = 0; i < 20; ++i) {
      const postComponent = createPost();
      loading.insertAdjacentHTML("beforebegin", postComponent);
    }
    loading.style.display = "none";
    loadingInProgress = false;
  }, 2000);
}

window.addEventListener("scroll", () => {
  const scrollThreshold =
    document.documentElement.scrollHeight - window.innerHeight - 200;

  if (window.scrollY >= scrollThreshold && !loadingInProgress) {
    loadPosts();
  }
});

for (let i = 0; i < postCount; ++i) {
  const postComponent = createPost();
  loading.insertAdjacentHTML("beforebegin", postComponent);
}

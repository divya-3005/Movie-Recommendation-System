const movieLists = document.querySelectorAll(".movie-list-wrapper");

movieLists.forEach((movieList) => {
  movieList.addEventListener("wheel", (event) => {
    event.preventDefault(); // Stop vertical scroll
    movieList.scrollLeft += event.deltaY * 2; // Convert vertical scroll to horizontal
  });
});

// TOGGLE MODE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

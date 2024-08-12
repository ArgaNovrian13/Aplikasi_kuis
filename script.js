document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("open-btn");
  const closeBtn = document.getElementById("close-btn");

  // Open sidebar
  if (openBtn) {
    openBtn.addEventListener("click", function () {
      sidebar.classList.add("open");
      document.querySelector("main").style.marginLeft =
        sidebar.offsetWidth + "px";
    });
  }

  // Close sidebar
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("open");
      document.querySelector("main").style.marginLeft = "0";
    });
  }
});

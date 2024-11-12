document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-group .tab");
  const tabContents = document.querySelectorAll(".tab-content > div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach((tab) => tab.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      tab.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });
});

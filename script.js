const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".save-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function () {
  modal.showModal();
});

closeBtn.addEventListener("click", function () {
  modal.close();
});

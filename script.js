// script.js

let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updatePages() {
  pages.forEach((page, index) => {
    const offset = index - currentPage;
    page.style.transform = `translateX(${offset * 100}%) rotateY(${offset === 0 ? 0 : offset > 0 ? -30 : 30}deg)`;
    page.style.zIndex = totalPages - Math.abs(offset);
    page.style.opacity = offset === 0 ? 1 : 0.5;
  });

  // Hide prevBtn on first page
  prevBtn.style.display = currentPage === 0 ? "none" : "block";
}

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
  } else {
    currentPage = 0; // go back to cover page
  }
  updatePages();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

// Initialize
updatePages();



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        form.style.display = "none";
        thankYouMessage.classList.remove("hidden");
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  });
});

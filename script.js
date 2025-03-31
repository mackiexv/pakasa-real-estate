document.addEventListener("DOMContentLoaded", function () {
  /* --- Schedule Viewing Modal Functionality --- */
  const scheduleModal = document.getElementById("scheduleModal");
  const scheduleBtn = document.getElementById("scheduleBtn");
  const closeBtn = document.querySelector(".modal .close");
  const scheduleForm = document.getElementById("scheduleForm");

  if (scheduleBtn && scheduleModal) {
    scheduleBtn.addEventListener("click", function () {
      scheduleModal.style.display = "block";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      scheduleModal.style.display = "none";
    });
  }
  window.addEventListener("click", function (event) {
    if (event.target === scheduleModal) {
      scheduleModal.style.display = "none";
    }
  });
  if (scheduleForm) {
    scheduleForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(scheduleForm);
      console.log("Schedule Viewing Submission:", Object.fromEntries(formData));
      alert("Thank you! Your viewing request has been submitted.");
      scheduleModal.style.display = "none";
      scheduleForm.reset();
    });
  }

  /* --- Menu Toggle for Responsive Navigation --- */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("menuToggle or navLinks not found!");
  }

  /* --- Call Button --- */
  const callBtn = document.getElementById("callBtn");
  if (callBtn) {
    callBtn.addEventListener("click", function () {
      alert("Call us at: +31 688 955 894");
    });
  }
});

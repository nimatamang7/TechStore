function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;

  toastContainer.appendChild(toast);

  // Remove after 4 seconds
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

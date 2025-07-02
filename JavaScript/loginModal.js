const loginForm = document.getElementById('login-form');
  const body = document.body;
  const x = document.getElementById('login');
  const y = document.getElementById('register');
  const z = document.getElementById('btn');

  function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
  }

  function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
  }

  // Open login modal and disable scroll
  document.querySelector('.loginbtn').addEventListener('click', () => {
    loginForm.style.display = 'block';
    body.classList.add('modal-open');
  });

  // Close modal clicking outside and enable scroll
  window.onclick = function(event) {
    if (event.target === loginForm) {
      loginForm.style.display = 'none';
      body.classList.remove('modal-open');
    }
  };

  // Close modal with close button (×)
  document.getElementById("closeModal").addEventListener("click", () => {
    loginForm.style.display = "none";
    body.classList.remove("modal-open");
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      loginForm.style.display = "none";
      body.classList.remove("modal-open");
    }
  });
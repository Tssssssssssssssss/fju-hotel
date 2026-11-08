const roomForm = document.querySelector("#room-step");
const guestDetails = document.querySelector("#guest-details");

roomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  bootstrap.Collapse.getOrCreateInstance(guestDetails, { toggle: false }).show();
});

const adminLoginForm = document.querySelector("#admin-login-form");
const adminLoginModal = document.querySelector("#admin-login-modal");
const adminPanel = document.querySelector("#admin-panel");
const adminLoginButton = document.querySelector("#admin-login-button");
const adminPanelLink = document.querySelector("#admin-panel-link");
const adminLogoutButton = document.querySelector("#admin-logout");
const adminLoginError = document.querySelector("#admin-login-error");

adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const account = document.querySelector("#admin-account").value.trim();
  const password = document.querySelector("#admin-password").value;

  if (account !== "admin" || password !== "1234") {
    adminLoginError.hidden = false;
    return;
  }

  adminLoginError.hidden = true;
  adminPanel.hidden = false;
  adminLoginButton.hidden = true;
  adminPanelLink.hidden = false;
  adminLogoutButton.hidden = false;
  bootstrap.Modal.getOrCreateInstance(adminLoginModal).hide();
});

adminLoginForm.addEventListener("input", () => {
  adminLoginError.hidden = true;
});

adminLoginModal.addEventListener("hidden.bs.modal", () => {
  adminLoginForm.reset();
  adminLoginError.hidden = true;

  if (!adminPanel.hidden) {
    adminPanel.scrollIntoView({ behavior: "smooth" });
    adminPanel.focus({ preventScroll: true });
  }
});

adminLogoutButton.addEventListener("click", () => {
  adminPanel.hidden = true;
  adminLoginButton.hidden = false;
  adminPanelLink.hidden = true;
  adminLogoutButton.hidden = true;
  adminLoginButton.focus();
});

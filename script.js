// ===== Settings =====
const CONFIG = {
  // Your Telegram channel link
  telegramUrl: "https://t.me/your_channel",
  // Delay before the pop-up appears (ms)
  showDelay: 600,
  // Redirect straight to Telegram after this many ms (0 = off)
  autoRedirect: 0,
};

(function () {
  const overlay = document.getElementById("overlay");
  const cta = document.getElementById("cta");
  const reopen = document.getElementById("reopen");
  const closeBtn = document.getElementById("close");
  const laterBtn = document.getElementById("later");

  cta.href = CONFIG.telegramUrl;

  function open() {
    reopen.hidden = true;
    overlay.classList.remove("closing");
    overlay.hidden = false;
    cta.focus({ preventScroll: true });
  }

  function close() {
    overlay.classList.add("closing");
    setTimeout(() => {
      overlay.hidden = true;
      overlay.classList.remove("closing");
      reopen.hidden = false;
      reopen.focus({ preventScroll: true });
    }, 280);
  }

  closeBtn.addEventListener("click", close);
  laterBtn.addEventListener("click", close);
  reopen.addEventListener("click", open);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) close();
  });

  setTimeout(open, CONFIG.showDelay);

  if (CONFIG.autoRedirect > 0) {
    setTimeout(() => { window.location.href = CONFIG.telegramUrl; }, CONFIG.autoRedirect);
  }
})();

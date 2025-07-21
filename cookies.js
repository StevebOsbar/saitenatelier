const cookieModalHtml = `
          <dialog id="cookie-modal">
            <p>Diese Website verwendet keine Cookies.</p>
            <button id="accept-all-cookies">Okay</button>
          </dialog>
      `;

const cookieFlag = "cookiesAccepted";

const renderCookieModal = () => {
  if (localStorage.getItem(cookieFlag)) return;

  document.body.insertAdjacentHTML("beforeend", cookieModalHtml);

  const cookieModal = document.getElementById("cookie-modal");
  const acceptCookiesBtn = document.getElementById("accept-all-cookies");

  acceptCookiesBtn.addEventListener("click", () => {
    cookieModal.close();
    window.localStorage.setItem("cookiesAccepted", "true");
  });

  cookieModal.showModal();
};

renderCookieModal();

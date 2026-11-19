(function () {
  var button = document.createElement("a");
  button.className = "dyk-whatsapp-button";
  button.href = "https://wa.me/573146955666";
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.setAttribute("aria-label", "Escríbenos por WhatsApp");
  button.innerHTML =
    '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 .0A15.8 15.8 0 0 0 2.4 23.9L.3 31.5l7.8-2A15.8 15.8 0 1 0 16 0zm0 28.7a12.8 12.8 0 0 1-6.5-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.8 12.8 0 1 1 16 28.7zm7-9.6c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2s-.9 1.2-1.1 1.4-.4.3-.8.1a10.5 10.5 0 0 1-3.1-1.9 11.6 11.6 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.3-.6s0-.4 0-.6-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5a14.8 14.8 0 0 0 5.7 5c.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.7-.1 2.2-.9 2.5-1.8s.3-1.6.2-1.8-.3-.3-.7-.5z"/></svg><span>Escríbenos</span>';
  document.body.appendChild(button);
})();

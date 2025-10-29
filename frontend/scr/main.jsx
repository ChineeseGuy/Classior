import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

function EnhanceFlaskUI() {
  useEffect(() => {
    // 1) Inject a tiny style system
    const style = document.createElement("style");
    style.textContent = `
      :root{
        --btn-bg:#4f46e5;         /* indigo-600 */
        --btn-bg-hover:#4338ca;   /* indigo-700 */
        --btn-bg-active:#3730a3;  /* indigo-800 */
        --btn-text:#fff;
        --btn-outline:#d1d5db;    /* gray-300 */
        --ring:#a5b4fc66;         /* indigo/40 */
        --shadow: 0 8px 20px rgba(79,70,229,0.25);
      }

      .btn{
        display:inline-flex; align-items:center; justify-content:center;
        gap:.5rem;
        padding:.65rem 1.1rem;
        border-radius:.8rem;
        font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial;
        font-weight:600; letter-spacing:.2px;
        line-height:1;
        border:1px solid transparent;
        cursor:pointer; user-select:none;
        transition:transform .08s ease, box-shadow .15s ease, background .15s ease, border-color .15s ease, color .15s ease;
        box-shadow: var(--shadow);
      }
      .btn:focus-visible{ outline:none; box-shadow: var(--shadow), 0 0 0 6px var(--ring); }

      .btn-primary{
        background: var(--btn-bg); color: var(--btn-text);
      }
      .btn-primary:hover{ background: var(--btn-bg-hover); transform: translateY(-1px); }
      .btn-primary:active{ background: var(--btn-bg-active); transform: translateY(0); }

      .btn-outline{
        background:#fff; color:#111827; border-color: var(--btn-outline); box-shadow: 0 4px 14px rgba(0,0,0,.06);
      }
      .btn-outline:hover{ border-color:#9ca3af; transform: translateY(-1px); }
      .btn-outline:active{ transform: translateY(0); }

      .btn-ghost{
        background:transparent; color:#111827; box-shadow:none;
      }
      .btn-ghost:hover{ background:#f3f4f6; }

      .btn-lg{ padding:.8rem 1.25rem; font-size:1rem; }

      .btn-group{ display:flex; gap:.6rem; flex-wrap:wrap; }
    `;
    document.head.appendChild(style);

    // 2) Beautify the Flask-rendered buttons by ID
    const b1 = document.getElementById("flaskButton1");
    const b2 = document.getElementById("flaskButton2");

    if (b1) b1.classList.add("btn", "btn-primary", "btn-lg");
    if (b2) b2.classList.add("btn", "btn-outline", "btn-lg");

    // 3) Optional: group them nicely (wrap in a flex container)
    const group = document.createElement("div");
    group.className = "btn-group";
    const parent = b1?.parentElement;
    if (b1 && b2 && parent) {
      parent.insertBefore(group, b1);
      group.appendChild(b1);
      group.appendChild(b2);
    }

    // 4) Optional icons (emoji for zero deps)
    if (b1 && !b1.dataset.iconified) {
      b1.dataset.iconified = "1";
      b1.insertAdjacentHTML("afterbegin", "🚀 ");
    }
    if (b2 && !b2.dataset.iconified) {
      b2.dataset.iconified = "1";
      b2.insertAdjacentHTML("afterbegin", "✨ ");
    }

    return () => style.remove();
  }, []);

  // Mount a tiny note in the toolbar (optional)
  return <span>🎨 Buttons styled by React</span>;
}

const mount = document.getElementById("layout-controls");
if (mount) createRoot(mount).render(<EnhanceFlaskUI />);

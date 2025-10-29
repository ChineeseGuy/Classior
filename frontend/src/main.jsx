import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

function EnhanceFlaskUI() {
  useEffect(() => {
    console.log("[React] mounted");

    // Inject styles once
    const style = document.createElement("style");
    style.textContent = `
      .btn{
        display:inline-flex;align-items:center;justify-content:center;
        padding:.6rem 1rem;border-radius:.75rem;border:1px solid transparent;
        font-weight:600;letter-spacing:.2px;cursor:pointer;user-select:none;
        transition:transform .08s ease, box-shadow .15s ease, background .15s ease;
        box-shadow:0 8px 20px rgba(79,70,229,.25);
      }
      .btn-primary{ background:#4f46e5; color:#fff; }
      .btn-primary:hover{ background:#4338ca; transform:translateY(-1px);}
      .btn-primary:active{ background:#3730a3; transform:translateY(0); }
      .btn-outline{ background:#fff; color:#111827; border-color:#d1d5db; box-shadow:0 4px 14px rgba(0,0,0,.06); }
      .btn-outline:hover{ border-color:#9ca3af; transform:translateY(-1px); }
      .btn-group{ display:flex; gap:.6rem; flex-wrap:wrap; margin-top:.5rem; }
    `;
    document.head.appendChild(style);

    // Find your existing Flask buttons
    const b1 = document.getElementById("flaskButton1");
    const b2 = document.getElementById("flaskButton2");

    if (!b1 || !b2) {
      console.warn("[React] Flask buttons not found");
      return;
    }

    // Group them nicely
    const group = document.createElement("div");
    group.className = "btn-group";
    const parent = b1.parentElement;
    parent.insertBefore(group, b1);
    group.appendChild(b1);
    group.appendChild(b2);

    // Beautify
    b1.classList.add("btn","btn-primary");
    b2.classList.add("btn","btn-outline");

    // Optional icons
    b1.insertAdjacentText("afterbegin", "🚀 ");
    b2.insertAdjacentText("afterbegin", "✨ ");

    return () => style.remove();
  }, []);

  return <span>🎨 Buttons styled by React</span>;
}

// Mount into the div your Flask page already has
const mount = document.getElementById("layout-controls");
if (mount) {
  createRoot(mount).render(<EnhanceFlaskUI />);
} else {
  console.error("[React] #layout-controls not found");
}

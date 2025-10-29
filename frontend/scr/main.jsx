import { createRoot } from "react-dom/client";
import React, { useEffect } from "react";

function PrettyButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll("button[id^='flaskButton']");
    buttons.forEach(btn => {
      // Basic modern button look
      btn.style.backgroundColor = "#007bff";
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.style.borderRadius = "8px";
      btn.style.padding = "10px 16px";
      btn.style.margin = "4px";
      btn.style.fontSize = "1rem";
      btn.style.cursor = "pointer";
      btn.style.transition = "all 0.2s ease";

      // Add hover effect
      btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "#0056b3";
        btn.style.transform = "scale(1.05)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "#007bff";
        btn.style.transform = "scale(1)";
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", fontSize: "0.9rem", color: "#333" }}>
      <p>✨ React enhanced your Flask buttons!</p>
    </div
